<?php
/**
 * Menu
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */

namespace ultraDevs\EasyDropBoxIntegration\Admin;

use ultraDevs\EasyDropBoxIntegration\App\App;
use ultraDevs\EasyDropBoxIntegration\App\Client;
use ultraDevs\EasyDropBoxIntegration\Helper;
use ultraDevs\EasyDropBoxIntegration\Assets_Manager;

/**
 * Menu Class
 *
 * @package EasyDropBoxIntegration
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
	public static $icon = EASY_DROPBOX_INTEGRATION_ASSETS . 'images/sl.svg';

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( __CLASS__, 'register_menu' ) );
		add_action( 'admin_init', array( $this, 'handle_authorization' ) );

		$menu_to_avoid = array(
			EASY_DROPBOX_INTEGRATION_MENU_SLUG,
			EASY_DROPBOX_INTEGRATION_MENU_SLUG . '-settings',
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
		self::$menu = add_menu_page( __( 'Dashboard - Easy DropBox Integration', 'easy-dropbox-integration' ), __( 'DropBox', 'easy-dropbox-integration' ), 'manage_options', EASY_DROPBOX_INTEGRATION_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ), Helper::get_icon(), 56 );

		add_submenu_page( EASY_DROPBOX_INTEGRATION_MENU_SLUG, __( 'File Browser - Easy DropBox Integration', 'easy-dropbox-integration' ), __( 'File Browser', 'easy-dropbox-integration' ), 'manage_options', EASY_DROPBOX_INTEGRATION_MENU_SLUG, array( __CLASS__, 'render_file_browser_page' ) );

		// Shortcode Builder.
		$shortcode_builder = add_submenu_page( EASY_DROPBOX_INTEGRATION_MENU_SLUG, __( 'Shortcode Builder - Easy DropBox Integration', 'easy-dropbox-integration' ), __( 'Shortcode Builder', 'easy-dropbox-integration' ), 'manage_options', EASY_DROPBOX_INTEGRATION_MENU_SLUG . '-shortcode-builder', array( __CLASS__, 'render_shortcode_builder_page' ) );

		// Settings.
		$settings = add_submenu_page( EASY_DROPBOX_INTEGRATION_MENU_SLUG, __( 'Settings - Easy DropBox Integration', 'easy-dropbox-integration' ), __( 'Settings', 'easy-dropbox-integration' ), 'manage_options', EASY_DROPBOX_INTEGRATION_MENU_SLUG . '-settings', array( __CLASS__, 'render_settings_page' ) );

		// Assets Manager Class.
		$assets_manager = new Assets_Manager();

		add_action( 'admin_print_scripts-' . self::$menu , array( $assets_manager, 'file_browser_assets' ) );
		add_action( 'admin_print_scripts-' . $settings , array( $assets_manager, 'settings_assets' ) );
		add_action( 'admin_print_scripts-' . $shortcode_builder , array( $assets_manager, 'shortcode_builder_assets' ) );
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

	/**
	 * Render Shortcode Builder
	 */
	public static function render_shortcode_builder_page() {
		echo '<div id="idb-shortcode-builder"></div>';
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
