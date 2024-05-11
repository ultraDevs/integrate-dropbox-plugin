<?php
/**
 * Account Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */

namespace ultraDevs\EasyDropBoxIntegration\App;

/**
 * Account Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */
class Account {

	/**
	 * Get Accounts
	 *
	 * @param string $id Account ID.
	 * @return array
	 */
	public static function get_accounts( $id = null ) {
		$accounts = get_option( 'easy_dropbox_intregration_accounts', array() );
		if ( $id ) {
			return ! empty( $accounts[ $id ] ) ? $accounts[ $id ] : '';
		}
		return $accounts;
	}

	/**
	 * Get Active Account
	 *
	 * @return array
	 */
	public static function get_active_account() {
		$accounts = self::get_accounts();

		// check if cookie is set for idb_active_account.
		$active_account = isset( $_COOKIE['idb_active_account'] ) ? $_COOKIE['idb_active_account'] : null;

		if ( ! empty( $active_account ) ) {
			$active_account = str_replace( '\\"', '"', $active_account );
			$account        = json_decode( $active_account, true );

			if ( ! empty( $account['id'] ) && empty( $accounts[ $account['id'] ] ) ) {
				setcookie( 'idb_active_account', '', time() - 3600, '/' );
			} else {
				return $account;
			}
		}

		// if cookie is not set, get the first account.
		$account = array_shift( $accounts );
		if ( ! empty( $account ) ) {
			return $account;
		}

		return array();
	}

	/**
	 * Set Active Account.
	 *
	 * @param string $account_id Account ID.
	 */
	public static function set_active_account( $account_id ) {
		$accounts = self::get_accounts();

		$account = array();

		if ( ! empty( $accounts[ $account_id ] ) ) {
			$account = $accounts[ $account_id ];
			setcookie( 'idb_active_account', wp_json_encode( $account ), time() + ( 30 * DAY_IN_SECONDS ), '/' );
		} elseif ( ! empty( $accounts ) ) {
			$account = array_shift( $accounts );
			setcookie( 'idb_active_account', wp_json_encode( $account ), time() + ( 30 * DAY_IN_SECONDS ), '/' );
		} else {
			setcookie( 'idb_active_account', '', time() - 3600, '/' );
		}

		return $account;
	}

	public static function update_account( $data ) {
		$accounts = self::get_accounts();

		$accounts[ $data['id'] ] = $data;
		return update_option( 'easy_dropbox_intregration_accounts', $accounts );
	}

	/**
	 * Delete Account
	 *
	 * @param string $account_id Account ID.
	 */
	public static function delete_account( $account_id ) {
		$accounts        = self::get_accounts();
		$removed_account = $accounts[ $account_id ];

		// @ TODO - delete all files from this account.

		$authorization = new Authorization( $removed_account );
		$authorization->remove_access_token();
		unset( $accounts[ $account_id ] );

		$active_account = self::get_active_account();

		if ( $account_id === $active_account['id'] ) {
			count( $accounts ) ? self::set_active_account( array_key_first( $accounts ) ) : self::set_active_account( null );
		}

		$status = update_option( 'easy_dropbox_intregration_accounts', $accounts );

		return $status ? $removed_account : false;
	}

	/**
	 * Get Tokens
	 *
	 * @param string $account_id Account ID.
	 *
	 * @return object | array
	 */
	public static function get_token( $account_id = null ) {
		if ( ! $account_id ) {
			$active_account = self::get_active_account();
			$account_id     = ! empty( $active_account ) ? $active_account['id'] : null;
		}

		$tokens = get_option( 'easy_dropbox_intregration_tokens', array() );

		return ! empty( $tokens[ $account_id ] ) ? $tokens[ $account_id ] : array();
	}

	/**
	 * Get Root ID
	 *
	 * @param string $account_id Account ID.
	 */
	public static function get_root_id( $account_id = null ) {

		if ( ! $account_id ) {
			$active_account = self::get_active_account();
			$account_id     = ! empty( $active_account ) ? $active_account['id'] : null;
		}

		$accounts = self::get_accounts( $account_id );

		return ! empty( $accounts['root_id'] ) ? $accounts['root_id'] : null;
	}
}
