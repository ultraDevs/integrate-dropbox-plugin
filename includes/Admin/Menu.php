<?php
/**
 * Menu
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\Admin;

use ultraDevs\IntegrateDropbox\App\App;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\Helper;
use ultraDevs\IntegrateDropbox\Assets_Manager;

/**
 * Menu Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Menu {
	/**
	 * Menu
	 *
	 * @var string
	 */
	public static $menu = '';

	/**
	 * Menu Icon
	 *
	 * @var string
	 */
	public static $icon = INTEGRATE_DROPBOX_ASSETS . 'images/sl.svg';

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( __CLASS__, 'register_menu' ) );
		add_action( 'admin_init', array( $this, 'handle_authorization' ) );

		if ( is_admin() && isset( $_GET[ 'page' ] ) && INTEGRATE_DROPBOX_MENU_SLUG === wp_unslash( $_GET['page'] ) ) { // phpcs:ignore
			add_action( 'in_admin_header', array( $this, 'remove_notices' ) );
		}
	}


	/**
	 * Register Admin Menu
	 */
	public static function register_menu() {
		self::$menu = add_menu_page( __( 'Dashboard - Integrate Dropbox', 'integrate-dropbox' ), __( 'Dropbox', 'integrate-dropbox' ), 'manage_options', INTEGRATE_DROPBOX_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ), Helper::get_icon(), 56 );

		add_submenu_page( INTEGRATE_DROPBOX_MENU_SLUG, __( 'File Browser - Integrate Dropbox', 'integrate-dropbox' ), __( 'File Browser', 'integrate-dropbox' ), 'manage_options', INTEGRATE_DROPBOX_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ) );

		// Settings.
		add_submenu_page( INTEGRATE_DROPBOX_MENU_SLUG, __( 'Settings - Integrate Dropbox', 'integrate-dropbox' ), __( 'Settings', 'integrate-dropbox' ), 'manage_options', INTEGRATE_DROPBOX_MENU_SLUG . '-settings', array( __CLASS__, 'render_settings_page' ) );

		// Assets Manager Class.
		$assets_manager = new Assets_Manager();

		add_action( 'admin_print_scripts-' . self::$menu, array( $assets_manager, 'admin_assets' ) );
	}

	/**
	 * Main View
	 */
	public static function render_file_browser_page() {
		echo '<div id="ud-id-app"></div>';
	}

	/**
	 * Render Settings
	 */
	public static function render_settings_page() {
		echo '<div id="ud-id-app"></div>';
	}

	public function handle_authorization() {
		if ( isset( $_GET['action'] ) && 'authorization' === $_GET['action'] ) {
			
			$app = new App();
			$app->process_authorization();
		}
	}

	/**
	 * Remove All Notices.
	 *
	 * @return void
	 */
	public function remove_notices() {
		remove_all_actions( 'admin_notices' );
		remove_all_actions( 'all_admin_notices' );
	}
}
