<?php
/**
 * Assets Manager Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\Admin\Dashboard;
use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Assets_Manager {

	/**
	 * Admin Assets
	 *
	 * Enqueue Admin Styles and Scripts
	 *
	 */
	public function admin_assets() {

		wp_enqueue_style( 'ud-id-admin', INTEGRATE_DROPBOX_ASSETS . 'admin/index.css', array( 'wp-components' ), INTEGRATE_DROPBOX_VERSION );

		$script_assets = file_exists( INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/index.asset.php' ) ? require INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/index.asset.php' : array();

		wp_enqueue_script( 'ud-id-admin', INTEGRATE_DROPBOX_ASSETS . 'admin/index.js', $script_assets['dependencies'], $script_assets['version'] ? $script_assets['version'] : INTEGRATE_DROPBOX_VERSION, true );

		wp_localize_script(
			'ud-id-admin',
			'IDBAdmin',
			$this->localization_data()
		);

	}

	/**
	 * Frontend Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function frontend_assets() {
		// wp_enqueue_style( 'ud-id-frontend', INTEGRATE_DROPBOX_ASSETS . 'css/frontend.css', '', INTEGRATE_DROPBOX_VERSION );
		// wp_enqueue_script( 'ud-id-frontend', INTEGRATE_DROPBOX_ASSETS . 'js/frontend.js', array( 'jquery' ), INTEGRATE_DROPBOX_VERSION, true );
	}

	/**
	 * Localize Data.
	 *
	 * @return array
	 */
	public function localization_data() {
		$client   = new Client();
		$auth_url = $client->get_auth_url( [ 'prompt' => 'login' ] );

		$localization_data = array(
			'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
			'version'       => INTEGRATE_DROPBOX_VERSION,
			'assets'        => INTEGRATE_DROPBOX_ASSETS,
			'authUrl'       => $auth_url,
			'accounts'      => Account::get_accounts(),
			'activeAccount' => Account::get_active_account(),
			'ajaxNonce'     => wp_create_nonce( 'idb_ajax_nonce' ),
		);

		return apply_filters( 'ud_id_localization_data', $localization_data );
	}

}
