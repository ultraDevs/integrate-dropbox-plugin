<?php
/**
 * Menu
 *
 * @package IDBWP
 * @since 1.0.0
 */

namespace ultraDevs\IDBWP\Admin;

use ultraDevs\IDBWP\App\App;
use ultraDevs\IDBWP\App\Client;
use ultraDevs\IDBWP\Helper;
use ultraDevs\IDBWP\Assets_Manager;

/**
 * Menu Class
 *
 * @package IDBWP
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
	public static $icon = IDBWP_ASSETS . 'images/sl.svg';

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( __CLASS__, 'register_menu' ) );
		add_action( 'admin_init', array( $this, 'handle_authorization' ) );

		$menu_to_avoid = array(
			IDBWP_MENU_SLUG,
			IDBWP_MENU_SLUG . '-settings',
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
		self::$menu = add_menu_page( __( 'Dashboard - Integrate DropBox WP', 'integrate-dropbox-wp' ), __( 'DropBox', 'integrate-dropbox-wp' ), 'manage_options', IDBWP_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ), Helper::get_icon(), 56 );

		add_submenu_page( IDBWP_MENU_SLUG, __( 'File Browser - Integrate DropBox WP', 'integrate-dropbox-wp' ), __( 'File Browser', 'integrate-dropbox-wp' ), 'manage_options', IDBWP_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ) );

		// Shortcode Builder.
		$shortcode_builder = add_submenu_page( IDBWP_MENU_SLUG, __( 'Shortcode Builder - Integrate DropBox WP', 'integrate-dropbox-wp' ), __( 'Shortcode Builder', 'integrate-dropbox-wp' ), 'manage_options', IDBWP_MENU_SLUG . '-shortcode-builder', array( __CLASS__, 'render_shortcode_builder_page' ) );

		// Settings.
		$settings = add_submenu_page( IDBWP_MENU_SLUG, __( 'Settings - Integrate DropBox WP', 'integrate-dropbox-wp' ), __( 'Settings', 'integrate-dropbox-wp' ), 'manage_options', IDBWP_MENU_SLUG . '-settings', array( __CLASS__, 'render_settings_page' ) );

		// Assets Manager Class.
		$assets_manager = new Assets_Manager();

		add_action( 'admin_print_scripts-' . self::$menu , array( $assets_manager, 'file_browser_assets' ) );
		add_action( 'admin_print_scripts-' . $settings , array( $assets_manager, 'settings_assets' ) );
		add_action( 'admin_print_scripts-' . $shortcode_builder , array( $assets_manager, 'file_browser_assets' ) );
		add_action( 'admin_print_scripts-' . $shortcode_builder , array( $assets_manager, 'shortcode_builder_assets' ) );
	}

	/**
	 * Main View
	 */
	public static function render_file_browser_page() {
		echo '<div id="edbi-file-browser"></div>';
	}

	/**
	 * Render Settings
	 */
	public static function render_settings_page() {
		echo '<div id="edbi-settings"></div>';
	}

	/**
	 * Render Shortcode Builder
	 */
	public static function render_shortcode_builder_page() {
		echo '<div id="edbi-shortcode-builder"></div>';
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
