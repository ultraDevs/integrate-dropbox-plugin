<?php
/**
 * Menu
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */

namespace ultraDevs\DropboxIntegrator\Admin;

use ultraDevs\DropboxIntegrator\App\App;
use ultraDevs\DropboxIntegrator\App\Client;
use ultraDevs\DropboxIntegrator\Helper;
use ultraDevs\DropboxIntegrator\Assets_Manager;

/**
 * Menu Class
 *
 * @package DropboxIntegrator
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
	public static $icon = DROPBOX_INTEGRATOR_ASSETS . 'images/sl.svg';

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( __CLASS__, 'register_menu' ) );
		add_action( 'admin_init', array( $this, 'handle_authorization' ) );

		$menu_to_avoid = array(
			DROPBOX_INTEGRATOR_MENU_SLUG,
			DROPBOX_INTEGRATOR_MENU_SLUG . '-settings',
		);

		if (
			is_admin() && isset( $_GET[ 'page' ] ) &&
			in_array( wp_unslash( $_GET['page'] ), $menu_to_avoid, true )
		) { // phpcs:ignore
			add_action( 'in_admin_header', array( $this, 'remove_notices' ) );
		}
	}


	/**
	 * Register Admin Menu
	 */
	public static function register_menu() {
		self::$menu = add_menu_page( __( 'Dashboard - Integrate Dropbox', 'dropbox-integrator' ), __( 'Dropbox', 'dropbox-integrator' ), 'manage_options', DROPBOX_INTEGRATOR_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ), Helper::get_icon(), 56 );

		add_submenu_page( DROPBOX_INTEGRATOR_MENU_SLUG, __( 'File Browser - Integrate Dropbox', 'dropbox-integrator' ), __( 'File Browser', 'dropbox-integrator' ), 'manage_options', DROPBOX_INTEGRATOR_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ) );

		// Settings.
		$settings = add_submenu_page( DROPBOX_INTEGRATOR_MENU_SLUG, __( 'Settings - Integrate Dropbox', 'dropbox-integrator' ), __( 'Settings', 'dropbox-integrator' ), 'manage_options', DROPBOX_INTEGRATOR_MENU_SLUG . '-settings', array( __CLASS__, 'render_settings_page' ) );

		// Assets Manager Class.
		$assets_manager = new Assets_Manager();

		add_action( 'admin_print_scripts-' . self::$menu , array( $assets_manager, 'file_browser_assets' ) );
		add_action( 'admin_print_scripts-' . $settings , array( $assets_manager, 'settings_assets' ) );
	}

	/**
	 * Main View
	 */
	public static function render_file_browser_page() {
		echo '<div id="idb-file-browser"></div>';
	}

	/**
	 * Render Settings
	 */
	public static function render_settings_page() {
		echo '<div id="idb-settings"></div>';
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
