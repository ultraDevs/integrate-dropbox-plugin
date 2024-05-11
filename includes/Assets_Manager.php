<?php
/**
 * Assets Manager Class
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */

namespace ultraDevs\DropboxIntegrator;

use ultraDevs\DropboxIntegrator\Admin\Dashboard;
use ultraDevs\DropboxIntegrator\App\Account;
use ultraDevs\DropboxIntegrator\App\Client;
use ultraDevs\DropboxIntegrator\Helper;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package DropboxIntegrator
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
		// wp_enqueue_style( 'ud-id-frontend', DROPBOX_INTEGRATOR_ASSETS . 'css/frontend.css', '', DROPBOX_INTEGRATOR_VERSION );
		// wp_enqueue_script( 'ud-id-frontend', DROPBOX_INTEGRATOR_ASSETS . 'js/frontend.js', array( 'jquery' ), DROPBOX_INTEGRATOR_VERSION, true );
	}

	/**
	 * Settings Assets
	 *
	 * Enqueue Settings Page Styles and Scripts
	 */
	public function settings_assets() {
		wp_enqueue_style( 'idb-settings', DROPBOX_INTEGRATOR_ASSETS . 'admin/settings/index.css', array(), DROPBOX_INTEGRATOR_VERSION );

		$script_assets = file_exists( DROPBOX_INTEGRATOR_DIR_PATH . 'assets/admin/settings/index.asset.php' ) ? require DROPBOX_INTEGRATOR_DIR_PATH . 'assets/admin/settings/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'idb-settings', DROPBOX_INTEGRATOR_ASSETS . 'admin/settings/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : DROPBOX_INTEGRATOR_VERSION, true );

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
		wp_enqueue_style( 'idb-file-browser', DROPBOX_INTEGRATOR_ASSETS . 'admin/file-browser/index.css', array( 'wp-components' ), DROPBOX_INTEGRATOR_VERSION );

		$script_assets = file_exists( DROPBOX_INTEGRATOR_DIR_PATH . 'assets/admin/file-browser/index.asset.php' ) ? require DROPBOX_INTEGRATOR_DIR_PATH . 'assets/admin/file-browser/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'idb-file-browser', DROPBOX_INTEGRATOR_ASSETS . 'admin/file-browser/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : DROPBOX_INTEGRATOR_VERSION, true );

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
			'version'       => DROPBOX_INTEGRATOR_VERSION,
			'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
			'version'       => DROPBOX_INTEGRATOR_VERSION,
			'assets'        => DROPBOX_INTEGRATOR_ASSETS,
			'authUrl'       => $auth_url,
			'accounts'      => Account::get_accounts(),
			'activeAccount' => Account::get_active_account(),
			'ajaxNonce'     => wp_create_nonce( 'idb_ajax_nonce' ),
			'loadingImg' => DROPBOX_INTEGRATOR_ASSETS . 'images/loading/Spin.svg'
		);

		return apply_filters( 'idb_localization_data', $localization_data );
	}

}
