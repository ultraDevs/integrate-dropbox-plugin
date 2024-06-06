<?php
/**
 * Client Class
 *
 * @package IDBWP
 * @since 1.0.0
 */

namespace ultraDevs\IDBWP\App;

use ultraDevs\IDBWP\App\Account;
use ultraDevs\IDBWP\App\Authorization;
use Kunnu\Dropbox\DropboxApp;
use Kunnu\Dropbox\Dropbox;
use Kunnu\Dropbox\Store\SessionPersistentDataStore;
use ultraDevs\IDBWP\App\Traits\Singleton;
use ultraDevs\IDBWP\Helper;

/**
 * Client Class
 *
 * @package IDBWP
 * @since 1.0.0
 */
class Client {

	use Singleton;

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
	 *
	 * @param string $account_id Account ID.
	 */
	public function __construct( $account_id = null ) {
		if ( empty( $account_id ) ) {
			$this->account = Account::get_active_account() ? Account::get_accounts( Account::get_active_account()['id'] ) : null;
		} else {
			$this->account = Account::get_accounts( $account_id );
		}

		// Callback for refresh token.
		add_action( 'idbwp_refresh_token', array( $this, 'refresh_token' ), 10, 1 );

		$this->client_id    = apply_filters( 'idbwp_client_id', 'mp6f0by845hzuzw' );
		$this->app_secret   = apply_filters( 'idbwp_app_secret', 'osnj0do9if83yrh' );
		$this->redirect_uri = apply_filters( 'idbwp_redirect_uri', 'https://oauth.ultradevs.com/dropbox-integrator-wp.php' );

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
			$this->client = new Dropbox(
				$this->get_app( $account ),
				array(
					'persistent_data_store' => new SessionPersistentDataStore( 'integrate-dropbox-wp' ),
				)
			);

		} catch ( \Exception $e ) {
			error_log( IDBWP_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Failed to start Dropbox Client: %s', 'integrate-dropbox-wp' ), $e->getMessage() )
			);
			return $e;
		}

		// if ( $this->client->getOAuth2Client()->isAccessTokenExpired() ) {
		// 	// Refresh token.
		// 	$this->refresh_token( $account );
		// }

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
				$authorization    = new Authorization( $account );
				$this->client_app = new DropboxApp( $this->get_app_key(), $this->get_app_secret(), $authorization->get_access_token() );
			} else {
				$this->client_app = new DropboxApp( $this->get_app_key(), $this->get_app_secret() );
			}
		}

		return $this->client_app;
	}

	/**
	 * Get Metadata
	 *
	 * @param string $path Path.
	 *
	 * @return array
	 */
	public function get_metadata( $path = '/' ) {
		$metadata = $this->client->getMetadata( $path );

		return $metadata;
	}

	/**
	 * Get Folder.
	 *
	 * @param string $path Path.
	 * @param bool   $is_allowed Is Allowed.
	 * @param bool   $recursive Recursive.
	 * @param bool   $hierarchical Hierarchical.
	 * @param array  $filter Filter.
	 *
	 * @return array
	 */
	public function get_folder( $path = null, $is_allowed = true, $recursive = false, $hierarchical = false, $filter = [ 'name', 'asc' ]) {

		if ( null === $path ) {
			$path = '/';
		}

		if ( false !== strpos( $path, '/' ) ) {
			$path = Helper::clean_path( $path );
		}

		try {
			$folder = API::get_instance( $this->account['id'] )->get_folder( $path, array( 'recursive' => $recursive, 'hierarchical' => $hierarchical ), $filter );
		} catch ( \Exception $e ) {
			error_log( IDBWP_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Failed to get folder: %s', 'integrate-dropbox-wp' ), $e->getMessage() )
			);
			return false;
		}

		if ( false !== $folder ) {
			foreach ( $folder->get_children() as $k => $child ) {
				if ( $is_allowed && false === $this->is_allowed( $child ) ) { 
					unset( $folder->children[ $k ] );
					continue;
				}
			}
		}

		return $folder;
	}

	/**
	 * Is Allowed
	 *
	 * @param object $file File.
	 *
	 * @return bool
	 */
	public function is_allowed( $file ) {
		$allowed = apply_filters( 'idbwp_is_allowed', true, $file ); // @TODO : Sample filter.

		return $allowed;
	}

	public function get_thumbnail( $file, $width = null, $height = null, $return_link = false ) {
		
		if ( $file->has_own_thumbnail() ) {
			$thumbnail_url = $file->get_thumbnail();
		} else {
			$thumbnail = new Thumbnail( $file );
			$thumbnail_url = $thumbnail->get_thumbnail_url();
		}

		if ( $return_link ) {
			return $thumbnail_url;
		}

		header( 'Location: ' . $thumbnail_url );
	}

	public function file_preview( $id, $account_id = null, $path = '' ) {
		if ( empty( $account_id ) ) {
			$account_id = $this->account['id'];
		}

		// IF after all we still don't have an account, return false.
		if ( empty( $account_id ) ) {
			return false;
		}

		// if ( empty( $path ) ) {
		// 	$path = '/';
		// }


		$file = $this->get_file( $id );

		// do_action( 'idbwp_log_event', 'File Preview ' . $file , $account_id, $path );

		if (
			in_array( $file->get_extension(), array( 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'txt' ) )
		) {
			$shared_link = str_replace( '/s/', '/s/raw/', $this->get_shared_link( $file ) );

			if ( false !==  strpos( $shared_link, 'scl/fi' ) ) {
				$shared_link .= '&raw=1';
			}

			error_log( $shared_link );

			header( 'Location: ' . $shared_link );

			exit;
		}

		// HTML5 Media.
		if ( in_array( $file->get_extension(), array( 'mp4', 'webm', 'ogg', 'mp3', 'wav', 'm4a', 'aac', 'flac' ) ) ) {
			$shared_link = $this->get_shared_link( $file );

			$shared_link = str_replace( '/s/', '/s/raw/', $shared_link );

			if ( false !==  strpos( $shared_link, 'scl/fi' ) ) {
				$shared_link .= '&raw=1';
			}

			header( 'Location: ' . $shared_link );

			exit;
		}

		// PDF.
		if ( 'pdf' === $file->get_extension() ) {
			$shared_link = $this->get_shared_link( $file );

			if (
				// @TODO: Check if user can download.
				false === true &&
				$file->get_size() < 25000000
			) {
				$shared_link = 'https://docs.google.com/viewerng/viewer?embedded=true&url='.urlencode( $shared_link . '&dl=1' );
			} else {
				$shared_link = str_replace( '/s/', '/s/raw/', $shared_link );

				if ( false !==  strpos( $shared_link, 'scl/fi' ) ) {
					$shared_link .= '&raw=1';
				}
			}

			header( 'Location: ' . $shared_link );

			exit;
		}

		// Office Files.
		if ( in_array( $file->get_extension(), array( 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx' ) ) ) {
			$shared_link = $this->get_shared_link( $file ); // @TODO: Temporary Link.

			$shared_link = 'https://view.officeapps.live.com/op/view.aspx?src='.urlencode( $shared_link );

			header( 'Location: ' . $shared_link );

			exit;
		}


		try {
			$preview = API::get_instance()->get_preview( $file->get_id() );
			dump( $preview );

			// echo $preview->getContents();
		} catch ( \Exception $e ) {
			error_log( IDBWP_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Failed to get file preview: %s', 'integrate-dropbox-wp' ), $e->getMessage() )
			);

			exit();
		}

		exit();
	}

	public function get_file( $req_path = null, $check_if_allowed = true ) {
		// $req_path = Helper::clean_path( $req_path );

		if ( '/' === $req_path || '' === $req_path ) {
			$file = new File();
			$file->set_id( 'dropbox' );
			$file->set_name( 'Dropbox' );
			$file->set_basename( 'Dropbox' );
			$file->set_path( '/' );
			$file->set_is_dir( true );
			$file->set_path_display( '/' );
		} else {
			try {
				$file = API::get_instance( $this->account['id'] )->get_file( $req_path );
			} catch ( \Exception $e ) {
				error_log( IDBWP_ERROR . sprintf(
					/* translators: %s: Error Message */
					__( 'Failed to get file: %s', 'integrate-dropbox-wp' ), $e->getMessage() )
				);
				return false;
			}
		}

		// @TODO: Check if allowed.

		return $file;
	}

	public function get_shared_link( $file, $link_settings = [
		'audience' => 'public'
	], $create = true ) {

		$default_settings = [
            'audience' => 'public',
            'allow_download' => true,
            'require_password' => false,
            'expires' => null,
        ];

		// @TODO: Implement Cache.

		$settings = array_merge( $default_settings, $link_settings );


		return $this->create_shared_link( $file, $settings );


	}

	public function create_shared_link( $file, $settings ) {
		
	
		$shared_links = API::get_instance( $this->account['id'] )->create_shared_link( $file->get_id(), $settings );

		$link = '';
		foreach ( $shared_links as $shared_link ) {
			if (
				$shared_link instanceof \Kunnu\Dropbox\Models\FileMetadata
			) {
				$link = $shared_link->getUrl();
			} else {
				$link = $shared_link[0]['url'];
			}
		}

		return $link;

	}

	// public function file_preview( $file, $account_id = null, $path = null ) {
	// 	if ( empty( $account_id ) ) {
	// 		$account_id = $this->account['id'];
	// 	}

	// 	// IF after all we still don't have an account, return false.
	// 	if ( empty( $account_id ) ) {
	// 		return false;
	// 	}

	// 	if ( empty( $path ) ) {
	// 		$path = '/';
	// 	}

	// 	$details = $this->client->getMetadata( $file );
	// 	$file = new File( $details );

	// 	$thumbnail = new Thumbnail( $details );

	// 	return $thumbnail->get_thumbnail_url();

	// 	// return wp_json_encode([
	// 	// 	'url' => $thumbnail->get_thumbnail_url(),
	// 	// 	'type'    => $file->get_extension(),
	// 	// ]);

	// 	do_action( 'idbwp_log_event', $details, $account_id, $path );

	// 	// Generate Preview for Media files.
	// 	// if ( in_array( $details['.tag'], array( 'audio', 'video', 'image' ) ) ) {
	// 	// $preview = $this->client->getThumbnail( $file, 'jpeg', 'w64h64' );
	// 	// $preview = $preview->getContents();
	// 	// } else {
	// 	// $preview = Helper::get_file_icon( $details['.tag'] );
	// 	// }
	// }

	/**
	 * Get Auth URL
	 *
	 * @param array $params Params.
	 *
	 * @return string
	 */
	public function get_auth_url( $params = array() ) {
		$auth_helper = $this->client->getAuthHelper();

		$redirect_uri = admin_url( 'admin.php?page=integrate-dropbox-wp&action=authorization' );
		$redirect_uri .= sprintf( '&site_url=%s', site_url() );
		// Nonce.
		$redirect_uri .= sprintf( '&nonce=%s', wp_create_nonce( 'idbwp_authorization' ) );

		$encoded_redirect = strtr( base64_encode( $redirect_uri ), '+/=', '-_~' );

		return $auth_helper->getAuthUrl( $this->redirect_uri, $params, $encoded_redirect, 'offline' );
	}

	/**
	 * Create Access Token.
	 *
	 * @return array
	 */
	public function create_access_token() {

		// We don't need nonce as already verified in process_authorization.

		try {
			$code  = sanitize_text_field( $_REQUEST['code'] );
			$state = sanitize_text_field( $_REQUEST['state'] );

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
				'photo'   => $account->getProfilePhotoUrl() ? esc_url( $account->getProfilePhotoUrl() ) : IDBWP_ASSETS . 'images/dropbox-logo.png',
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
			error_log( IDBWP_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Failed to generate access token: %s', 'integrate-dropbox-wp' ), $e->getMessage() )
			);

			return new \WP_Error( 'broke', 'failed_to_generate_access_token', $e->getMessage() );
		}

		return true;
	}

	/**
	 * Refresh Token.
	 *
	 * @param array $account Account.
	 */
	public function refresh_token( $account = null ) {
		if ( empty( $account ) ) {
			return false;
		}
		$authorization = new Authorization( $account );
		$refresh_token = $authorization->get_refresh_token();

		$active_token = Account::get_token( $account['id'] );

		if ( empty( $refresh_token ) ) {
			error_log( IDBWP_ERROR . __( 'No refresh token found!', 'integrate-dropbox-wp' ) );

			$authorization->set_valid_token( false );
			$authorization->revoke_token();

			return false;
		}

		try {
			$token = $this->get_client()->getAuthHelper()->getRefreshedAccessToken( $active_token );

			$authorization->set_access_token( $token );
			$this->get_client()->setAccessToken( $token );

			// Remove Authorization Lost Notice.
			if ( $timestamp = wp_next_scheduled( 'idbwp_authorization_lost_notice', array( 'account_id' => $account['id'] ) ) ) {
				wp_unschedule_event( $timestamp, 'idbwp_authorization_lost_notice', array( 'account_id' => $account['id'] ) );

				$account['is_lost'] = false;
				Account::update_account( $account );
			}
		} catch ( \Exception $e ) {
			error_log( IDBWP_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error refreshing token: %s', 'integrate-dropbox-wp' ), $e->getMessage() )
			);

			$authorization->set_valid_token( false );

			// Schedule Authorization Lost Notice.
			if ( ! wp_next_scheduled( 'idbwp_authorization_lost_notice', array( 'account_id' => $account['id'] ) ) ) {
				wp_schedule_event( time(), 'idbwp_authorization_lost_notice', array( 'account_id' => $account['id'] ) );

				$account['is_lost'] = true;
				Account::update_account( $account );
			}
		}

		return $this->get_client();
	}

	/**
	 * Get Storage Space Info
	 *
	 * @return array
	 */
	public function get_storage_space_info() {
		$space_usage = $this->client->getSpaceUsage();
		$used        = $space_usage['used'];
		$allocation  = $space_usage['allocation']['allocated'];

		return array(
			'used'      => $used,
			'allocated' => $allocation,
			'percent'   => round( ( $used / $allocation ) * 100 ),
		);
	}
}
