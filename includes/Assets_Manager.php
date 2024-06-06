<?php
/**
 * Assets Manager Class
 *
 * @package IDBWP
 * @since 1.0.0
 */

namespace ultraDevs\IDBWP;

use ultraDevs\IDBWP\Admin\Dashboard;
use ultraDevs\IDBWP\App\Account;
use ultraDevs\IDBWP\App\Client;
use ultraDevs\IDBWP\App\Traits\Singleton;
use ultraDevs\IDBWP\Helper;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package IDBWP
 * @since 1.0.0
 */
class Assets_Manager {
	use Singleton;

	/**
	 * Admin Assets
	 *
	 * Enqueue Admin Styles and Scripts
	 *
	 */
	public function admin_assets( $hook ) {

		// Register sweetalert2.
		wp_register_script( 'sweetalert2', IDBWP_ASSETS . 'vendors/sweetalert2/js/sweetalert2.min.js', array( 'jquery' ), IDBWP_VERSION, true );
		wp_register_style( 'sweetalert2', IDBWP_ASSETS . 'vendors/sweetalert2/css/sweetalert2.min.css', array(), IDBWP_VERSION );

		if ( strpos( $hook, 'integrate-dropbox-wp' ) === false ) {
			return;
		}

		// Enqueue Styles.
		wp_enqueue_style( 'edbi-admin', IDBWP_ASSETS . 'admin/common/index.css', array(), IDBWP_VERSION );

	}

	/**
	 * Frontend Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function frontend_assets() {

		$css_version = file_exists( IDBWP_DIR_PATH . 'assets/frontend/css/edbi.css' ) ? filemtime( IDBWP_DIR_PATH . 'assets/frontend/css/edbi.css' ) : IDBWP_VERSION;
		// $js_version  = file_exists( IDBWP_DIR_PATH . 'assets/frontend/js/edbi.js' ) ? filemtime( IDBWP_DIR_PATH . 'assets/frontend/js/edbi.js' ) : IDBWP_VERSION;

		wp_enqueue_style( 'ud-id-frontend', IDBWP_ASSETS . 'frontend/css/edbi.css', '', $css_version );
		// wp_enqueue_script( 'ud-id-frontend', IDBWP_ASSETS . 'frontend/js/edbi.js', array( 'jquery' ), $js_version, true );
	}

	/**
	 * Settings Assets
	 *
	 * Enqueue Settings Page Styles and Scripts
	 */
	public function settings_assets() {

		// Sweetalert2.
		wp_enqueue_script( 'sweetalert2' );
		wp_enqueue_style( 'sweetalert2' );

		wp_enqueue_style( 'edbi-settings', IDBWP_ASSETS . 'admin/settings/index.css', array(), IDBWP_VERSION );

		$script_assets = file_exists( IDBWP_DIR_PATH . 'assets/admin/settings/index.asset.php' ) ? require IDBWP_DIR_PATH . 'assets/admin/settings/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'edbi-settings', IDBWP_ASSETS . 'admin/settings/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : IDBWP_VERSION, true );

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

		// Sweetalert2.
		wp_enqueue_script( 'sweetalert2' );
		wp_enqueue_style( 'sweetalert2' );

		wp_enqueue_style( 'edbi-shortcode-builder', IDBWP_ASSETS . 'admin/shortcode-builder/index.css', array(), IDBWP_VERSION );

		$script_assets = file_exists( IDBWP_DIR_PATH . 'assets/admin/shortcode-builder/index.asset.php' ) ? require IDBWP_DIR_PATH . 'assets/admin/shortcode-builder/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'edbi-shortcode-builder', IDBWP_ASSETS . 'admin/shortcode-builder/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : IDBWP_VERSION, true );

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

		// Sweetalert2.
		wp_enqueue_script( 'sweetalert2' );
		wp_enqueue_style( 'sweetalert2' );

		wp_enqueue_style( 'edbi-file-browser', IDBWP_ASSETS . 'admin/file-browser/index.css', array( 'wp-components' ), IDBWP_VERSION );

		$script_assets = file_exists( IDBWP_DIR_PATH . 'assets/admin/file-browser/index.asset.php' ) ? require IDBWP_DIR_PATH . 'assets/admin/file-browser/index.asset.php' : array();

		$deps = array_merge( $script_assets['dependencies'], array( 'wp-util' ) );

		wp_enqueue_script( 'edbi-file-browser', IDBWP_ASSETS . 'admin/file-browser/index.js', $deps, $script_assets['version'] ? $script_assets['version'] : IDBWP_VERSION, true );

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
			'version'       => IDBWP_VERSION,
			'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
			'version'       => IDBWP_VERSION,
			'assets'        => IDBWP_ASSETS,
			'authUrl'       => $auth_url,
			'accounts'      => Account::get_accounts(),
			'activeAccount' => Account::get_active_account(),
			'ajaxNonce'     => wp_create_nonce( 'idbwp_ajax_nonce' ),
			'loadingImg' => IDBWP_ASSETS . 'images/loading/Spin.svg'
		);

		return apply_filters( 'idbwp_localization_data', $localization_data );
	}

}
