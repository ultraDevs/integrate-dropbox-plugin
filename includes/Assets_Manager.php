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

		$this->file_browser_assets();

		$this->settings_assets();
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
	 * Settings Assets
	 *
	 * Enqueue Settings Page Styles and Scripts
	 */
	public function settings_assets() {
		wp_enqueue_style( 'idb-settings', INTEGRATE_DROPBOX_ASSETS . 'admin/settings/index.css', array(), INTEGRATE_DROPBOX_VERSION );

		$script_assets = file_exists( INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/settings/index.asset.php' ) ? require INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/settings/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-components' ) );

		wp_enqueue_script( 'idb-settings', INTEGRATE_DROPBOX_ASSETS . 'admin/settings/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : INTEGRATE_DROPBOX_VERSION, true );

		wp_localize_script(
			'idb-settings',
			'IDBData',
			$this->localization_data()
		);
	}

	/**
	 * File Browser Assets
	 *
	 * Enqueue File Browser Styles and Scripts
	 */
	public function file_browser_assets() {
		wp_enqueue_style( 'idb-file-browser', INTEGRATE_DROPBOX_ASSETS . 'admin/file-browser/index.css', array( 'wp-components' ), INTEGRATE_DROPBOX_VERSION );

		$script_assets = file_exists( INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/file-browser/index.asset.php' ) ? require INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/file-browser/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'idb-file-browser', INTEGRATE_DROPBOX_ASSETS . 'admin/file-browser/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : INTEGRATE_DROPBOX_VERSION, true );

		wp_localize_script(
			'idb-file-browser',
			'IDBData',
			$this->localization_data()
		);
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
			'loadingImg' => INTEGRATE_DROPBOX_ASSETS . 'images/loading/Spin.svg'
		);

		return apply_filters( 'ud_id_localization_data', $localization_data );
	}

}
