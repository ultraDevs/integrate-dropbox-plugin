<?php
/**
 * Assets Manager Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */

namespace ultraDevs\EasyDropBoxIntegration;

use ultraDevs\EasyDropBoxIntegration\Admin\Dashboard;
use ultraDevs\EasyDropBoxIntegration\App\Account;
use ultraDevs\EasyDropBoxIntegration\App\Client;
use ultraDevs\EasyDropBoxIntegration\Helper;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package EasyDropBoxIntegration
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
		// wp_enqueue_style( 'ud-id-frontend', EASY_DROPBOX_INTEGRATION_ASSETS . 'css/frontend.css', '', EASY_DROPBOX_INTEGRATION_VERSION );
		// wp_enqueue_script( 'ud-id-frontend', EASY_DROPBOX_INTEGRATION_ASSETS . 'js/frontend.js', array( 'jquery' ), EASY_DROPBOX_INTEGRATION_VERSION, true );
	}

	/**
	 * Settings Assets
	 *
	 * Enqueue Settings Page Styles and Scripts
	 */
	public function settings_assets() {
		wp_enqueue_style( 'edbi-settings', EASY_DROPBOX_INTEGRATION_ASSETS . 'admin/settings/index.css', array(), EASY_DROPBOX_INTEGRATION_VERSION );

		$script_assets = file_exists( EASY_DROPBOX_INTEGRATION_DIR_PATH . 'assets/admin/settings/index.asset.php' ) ? require EASY_DROPBOX_INTEGRATION_DIR_PATH . 'assets/admin/settings/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'edbi-settings', EASY_DROPBOX_INTEGRATION_ASSETS . 'admin/settings/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : EASY_DROPBOX_INTEGRATION_VERSION, true );

		wp_localize_script(
			'edbi-settings',
			'EDBIData',
			$this->localization_data()
		);
	}

	/**
	 * Shortcode Builder Assets
	 *
	 * Shortcode Builder Page Styles and Scripts
	 */
	public function shortcode_builder_assets() {
		wp_enqueue_style( 'edbi-shortcode-builder', EASY_DROPBOX_INTEGRATION_ASSETS . 'admin/shortcode-builder/index.css', array(), EASY_DROPBOX_INTEGRATION_VERSION );

		$script_assets = file_exists( EASY_DROPBOX_INTEGRATION_DIR_PATH . 'assets/admin/shortcode-builder/index.asset.php' ) ? require EASY_DROPBOX_INTEGRATION_DIR_PATH . 'assets/admin/shortcode-builder/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'edbi-shortcode-builder', EASY_DROPBOX_INTEGRATION_ASSETS . 'admin/shortcode-builder/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : EASY_DROPBOX_INTEGRATION_VERSION, true );

		wp_localize_script(
			'edbi-shortcode-builder',
			'EDBIData',
			$this->localization_data()
		);
	}

	/**
	 * File Browser Assets
	 *
	 * Enqueue File Browser Styles and Scripts
	 */
	public function file_browser_assets() {
		wp_enqueue_style( 'edbi-file-browser', EASY_DROPBOX_INTEGRATION_ASSETS . 'admin/file-browser/index.css', array( 'wp-components' ), EASY_DROPBOX_INTEGRATION_VERSION );

		$script_assets = file_exists( EASY_DROPBOX_INTEGRATION_DIR_PATH . 'assets/admin/file-browser/index.asset.php' ) ? require EASY_DROPBOX_INTEGRATION_DIR_PATH . 'assets/admin/file-browser/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'edbi-file-browser', EASY_DROPBOX_INTEGRATION_ASSETS . 'admin/file-browser/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : EASY_DROPBOX_INTEGRATION_VERSION, true );

		wp_localize_script(
			'edbi-file-browser',
			'EDBIData',
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
			'version'       => EASY_DROPBOX_INTEGRATION_VERSION,
			'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
			'version'       => EASY_DROPBOX_INTEGRATION_VERSION,
			'assets'        => EASY_DROPBOX_INTEGRATION_ASSETS,
			'authUrl'       => $auth_url,
			'accounts'      => Account::get_accounts(),
			'activeAccount' => Account::get_active_account(),
			'ajaxNonce'     => wp_create_nonce( 'edbi_ajax_nonce' ),
			'loadingImg' => EASY_DROPBOX_INTEGRATION_ASSETS . 'images/loading/Spin.svg'
		);

		return apply_filters( 'edbi_localization_data', $localization_data );
	}

}
