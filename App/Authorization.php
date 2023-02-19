<?php
/**
 * Authorization Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\App\Account;

/**
 * Authorization Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Authorization {

	/**
	 * DropBox API Client.
	 *
	 * @var object
	 */
	public $client;

	/**
	 * Account ID.
	 *
	 * @var string
	 */
	public $account_id;

	/**
	 * Token Key.
	 *
	 * @var string
	 */
	public $tokens_key = 'ud_idb_tokens';

	/**
	 * Is Valid Token?
	 *
	 * @var boolean
	 */
	public $is_valid = true;

	/**
	 * Constructor
	 */
	public function __construct( $account ) {
		$this->account_id = $account['id'];

		// Callback for refresh token.
		// add_action( 'ud_idb_refresh_token', array( $this, 'refresh_token' ), 10, 1 );
	}

	/**
	 * Get Client.
	 *
	 * @return object
	 */
	public function get_client() {
		if ( empty( $this->client ) ) {
			$this->client = new Client( $this->account_id );
		}

		return $this->client;
	}

	/**
	 * Get Token By ID.
	 *
	 * @return string | false
	 */
	public function get_access_token() {
		$tokens = get_option( $this->tokens_key, array() );

		return ! empty ( $tokens[ $this->account_id ] ) ? $tokens[ $this->account_id ] : false;
	}

	/**
	 * Has Access Token?
	 *
	 * @return string | false
	 */
	public function has_access_token() {
		if ( ! $this->is_valid_token() ) {
			return false;
		}

		return ! empty ( $this->get_access_token() ) ? $this->get_access_token() : false;
	}

	/**
	 * Set Access Token.
	 *
	 * @param string $token Token.
	 *
	 * @return string
	 */
	public function set_access_token( $token ) {
		$tokens = get_option( $this->tokens_key, array() );

		$tokens[ $this->account_id ] = $token;

		update_option( $this->tokens_key, $tokens );

		return $token;
	}

	/**
	 * Remove Access Token.
	 */
	public function remove_access_token() {
		$tokens = get_option( $this->tokens_key, array() );

		if ( ! empty( $tokens[ $this->account_id ] ) ) {
			unset( $tokens[ $this->account_id ] );
		}

		update_option( $this->tokens_key, $tokens );
	}

	/**
	 * Is Valid Token?
	 *
	 * @return boolean
	 */
	public function is_valid_token() {
		return $this->is_valid;
	}

	/**
	 * Set Valid Token.
	 *
	 * @param boolean $is_valid Is Valid Token.
	 */
	public function set_valid_token( $is_valid = true ) {
		$this->is_valid = $is_valid;
	}

	/**
	 * Revoke Token.
	 *
	 * @param array $account Account.
	 *
	 * @return boolean
	 */
	public function revoke_token( $account = null ) {
		error_log( INTEGRATE_DROPBOX_ERROR . __( 'Authorization Lost', 'integrate-dropbox' ) );

		try {
			$this->get_client($account)->getAuthHelper()->revokeAccessToken();
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error revoking token: %s', 'integrate-dropbox' ), $e->getMessage() ) );
		}

		// Delete Account.
		Account::delete_account( $this->account_id );

		return true;

	}

	/**
	 * Refresh Token.
	 *
	 * @param array $account Account.
	 */
	public function refresh_token( $account = null ) {
		$refresh_token = $this->get_client()->getRefreshToken();

		if ( empty ( $refresh_token ) ) {
			error_log( INTEGRATE_DROPBOX_ERROR . __( 'No refresh token found!', 'integrate-dropbox' ) );

			$this->set_valid_token( false );
			$this->revoke_token();

			return false;
		}

		try {
			$token = $this->get_client()->getAuthHelper()->refreshToken();

			$this->set_access_token( $token );
			$this->get_client()->setAccessToken( $token );

			// Remove Authorization Lost Notice.
			if ( $timestamp = wp_next_scheduled( 'ud_idb_authorization_lost_notice', array( 'account_id' => $account['id'] ) ) ) {
				wp_unschedule_event( $timestamp, 'ud_idb_authorization_lost_notice', array( 'account_id' => $account['id'] ) );

				$account['is_lost'] = false;
				Account::update_account( $account );
			}

		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error refreshing token: %s', 'integrate-dropbox' ), $e->getMessage() ) );

			$this->set_valid_token( false );

			// Schedule Authorization Lost Notice.
			if ( ! wp_next_scheduled( 'ud_idb_authorization_lost_notice', array( 'account_id' => $account['id'] ) ) ) {
				wp_schedule_single_event( time(), 'ud_idb_authorization_lost_notice', array( 'account_id' => $account['id'] ) );

				$account['is_lost'] = true;
				Account::update_account( $account );
			}

			return false;
		}
	}

}
