<?php
/**
 * Client Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Authorization;
use Kunnu\Dropbox\DropboxApp;
use Kunnu\Dropbox\Dropbox;
use Kunnu\Dropbox\Store\SessionPersistentDataStore;

/**
 * Client Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Client {

	/**
	 * DropBox API Client.
	 *
	 * @var object
	 */
	public $client;

	/**
	 * DropBox App.
	 *
	 * @var object
	 */
	public $client_app;

	/**
	 * Account.
	 *
	 * @var object
	 */
	public $account;

	/**
	 * Client ID.
	 *
	 * @var string
	 */
	public $client_id;

	/**
	 * Client Secret.
	 *
	 * @var string
	 */
	public $app_secret;

	/**
	 * Redirect URI.
	 *
	 * @var string
	 */
	public $redirect_uri;

	
	/**
	 * Constructor
	 */
	public function __construct( $account_id = null ) {

		if ( empty( $account_id) ) {
			$this->account = Account::get_active_account();
		} else {
			$this->account = Account::get_accounts( $account_id );
		}

		$this->client_id    = apply_filters( 'ud_idb_client_id', 'mp6f0by845hzuzw' );
		$this->app_secret   = apply_filters( 'ud_idb_app_secret', 'osnj0do9if83yrh' );
		$this->redirect_uri = apply_filters( 'ud_idb_redirect_uri', 'https://oauth.ultradevs.com/integrate-dropbox-wp.php' );

		$this->get_client();
	}

	/**
	 * Get Client
	 *
	 * @return object
	 */
	public function get_client() {
		if ( empty( $this->client ) ) {
			$this->client = $this->create_client( $this->account );
		}

		return $this->client;
	}

	/**
	 * Get App Key
	 *
	 * @return string
	 */
	public function get_app_key() {
		return $this->client_id;
	}

	/**
	 * Get App Secret
	 *
	 * @return string
	 */
	public function get_app_secret() {
		return $this->app_secret;
	}

	/**
	 * Create Client
	 *
	 * @param array $account Account Data.
	 *
	 * @return object
	 */
	public function create_client( $account = null ) {
		try {
			$this->client     = new Dropbox(
				$this->get_app( $account ),
				array(
					'persistent_data_store' => new SessionPersistentDataStore( 'integrate-dropbox' ),
				)
			);

		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Failed to start Dropbox Client: %s', 'integrate-dropbox' ), $e->getMessage() ) );

			return $e;
		}

		return $this->client;
	}

	/**
	 * Get App
	 *
	 * @param array $account Account Data.
	 *
	 * @return object
	 */
	public function get_app( $account = null ) {
		
		if ( empty( $this->client_app ) ) {
			if ( ! empty( $account ) ) {
				$authorization = new Authorization( $account );
				$this->client_app = new DropboxApp( $this->get_app_key(), $this->get_app_secret(), $authorization->get_access_token() );
			} else {
				$this->client_app = new DropboxApp( $this->get_app_key(), $this->get_app_secret() );
			}
		}

		return $this->client_app;
	}

	/**
	 * Get Auth URL
	 *
	 * @param array $params Params.
	 *
	 * @return string
	 */
	public function get_auth_url( $params = array()) {
		$auth_helper = $this->client->getAuthHelper();

		$redirect_uri = admin_url( 'admin.php?page=integrate-dropbox&action=authorization' );

		$encoded_redirect = strtr( base64_encode( $redirect_uri ), '+/=', '-_~' );

		return $auth_helper->getAuthUrl( $this->redirect_uri, $params, $encoded_redirect, 'offline' );
	}

	/**
	 * Create Access Token.
	 *
	 * @return array
	 */
	public function create_access_token() {

		try {
			$code = $_REQUEST['code'];
			$state = $_REQUEST['state'];

			// Fetch access token.
			$access_token = $this->get_client()->getAuthHelper()->getAccessToken( $code, $state, $this->redirect_uri );

			// Set access token.
			$this->get_client()->setAccessToken( $access_token->getToken() );

			// Get account details.
			$account = $this->get_client()->getCurrentAccount();

			$root_info = $account->getRootInfo();

			$user_data = array(
				'id'      => $account->getAccountId(),
				'name'    => $account->getDisplayName(),
				'email'   => $account->getEmail(),
				'photo'   => $account->getProfilePhotoUrl(),
				'root_id' => $root_info['root_namespace_id'],
				'lost'    => false,
				'storage' => $this->get_storage_space_info(),
			);

			// Save account.
			Account::update_account( $user_data );
			// Set active account.
			Account::set_active_account( $user_data['id'] );

			// Save Access Token.
			$authorization = new Authorization( $user_data );
			$authorization->set_access_token( $access_token );

		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Failed to generate access token: %s', 'integrate-dropbox' ), $e->getMessage() ) );

			return new \WP_Error( 'broke', 'failed_to_generate_access_token', $e->getMessage() );
		}

		return true;
	}

	/**
	 * Get Storage Space Info
	 *
	 * @return array
	 */
	public function get_storage_space_info() {
		$space_usage = $this->client->getSpaceUsage();
		$used = $space_usage['used'];
		$allocation = $space_usage['allocation']['allocated'];

		return array(
			'used' => $used,
			'allocated' => $allocation,
			'percent' => round( ( $used / $allocation ) * 100 ),
		);

	}

}
