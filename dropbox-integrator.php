<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package DropboxIntegrator
 */

use ultraDevs\DropboxIntegrator\App\API;

/**
 * Plugin Name:       Easy Dropbox Integrator - Browse, Upload, Manage Your Dropbox Files from Your Website
 * Plugin URI:        https://ultradevs.com/easy-dropbox-integrator/
 * Description:       Easy Dropbox Integrator - Browse, Upload, Manage Your Dropbox Files from Your Website Easily.
 * Version: 1.0.0
 * Author:            ultradevs
 * Author URI:        https://ultradevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       easy-dropbox-integrator
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

// Constant.
define( 'DROPBOX_INTEGRATOR_VERSION', '1.0.0' );
define( 'DROPBOX_INTEGRATOR_NAME', 'Easy Dropbox Integrator' );
define( 'DROPBOX_INTEGRATOR_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'DROPBOX_INTEGRATOR_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'DROPBOX_INTEGRATOR_ASSETS', DROPBOX_INTEGRATOR_DIR_URL . 'assets/' );
define( 'DROPBOX_INTEGRATOR_CACHE_DIR', WP_CONTENT_DIR . '/easy-dropbox-integrator-cache/' );
define( 'DROPBOX_INTEGRATOR_CACHE_DIR_URL', content_url() . '/easy-dropbox-integrator-cache/' );
define( 'DROPBOX_INTEGRATOR_MENU_SLUG', 'easy-dropbox-integrator' );
define( 'DROPBOX_INTEGRATOR_ERROR', '[ Easy Dropbox Integrator ] - ' );
define( 'DROPBOX_INTEGRATOR_DEV_MODE', true );


/**
 * Require Composer Autoload
 */
require_once DROPBOX_INTEGRATOR_DIR_PATH . 'vendor/autoload.php';

/**
 * Require DropBox SDK
 */
require_once DROPBOX_INTEGRATOR_DIR_PATH . 'dropbox/kunalvarma05/dropbox-php-sdk/vendor/autoload.php';

/**
 * Integrate Dropbox class
 */
final class DropboxIntegrator {

	/**
	 * Constructor
	 */
	public function __construct() {

		add_action( 'plugins_loaded', array( $this, 'init' ) );

		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
		add_action( 'init', array( $this, 'load_text_domain' ) );

		do_action( 'dropbox_integrator_loaded' );
	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \DropboxIntegrator
	 */
	public static function run() {
		/**
		 * Instance
		 *
		 * @var boolean
		 */
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

		return $instance;
	}

	/**
	 * Plugin Init
	 */
	public function init() {

		// Ajax Class.
		new ultraDevs\DropboxIntegrator\Ajax();

		// Assets Manager Class.
		$assets_manager = new ultraDevs\DropboxIntegrator\Assets_Manager();

		// Activate.
		$activate = new ultraDevs\DropboxIntegrator\Activate();

		// Review Class.
		$review = new ultraDevs\DropboxIntegrator\Review();

		// Menu.
		$menu = new ultraDevs\DropboxIntegrator\Admin\Menu();

		// App.
		new ultraDevs\DropboxIntegrator\App\App();

		// Rest API.
		new ultraDevs\DropboxIntegrator\Rest_API();

		if ( is_admin() ) {

			// Activation_Redirect.
			add_action( 'admin_init', array( $activate, 'activation_redirect' ) );

			// Menu.
			$menu->register();

			// Plugin Action Links.
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

			// Review Notice.
			$review->register();

		} else {
			// Frontend Assets.
			add_action( 'wp_enqueue_scripts', array( $assets_manager, 'frontend_assets' ) );
		}

	}

	/**
	 * The code that runs during plugin activation.
	 */
	/**
	 * Plugin Activation.
	 *
	 * @return void
	 */
	public function activate() {
		$activate = new ultraDevs\DropboxIntegrator\Activate();
		$activate->run();
	}

	/**
	 * Plugin Deactivation.
	 *
	 * @return void
	 */
	public function deactivate() {
		unset( $_COOKIE['idb_active_account'] );
	}

	/**
	 * Block Category
	 *
	 * @param array $categories Block Categories.
	 *
	 * @return array
	 */
	public function register_block_category( $categories ) {

		$categories = array_merge(
			$categories,
			array(
				array(
					'slug'  => 'easy-dropbox-integrator',
					'title' => __( 'Integrate Dropbox', 'easy-dropbox-integrator' ),
				),
			)
		);

		return $categories;
	}

	/**
	 * Loads a plugin’s translated strings.
	 *
	 * @return void
	 */
	public function load_text_domain() {
		load_plugin_textdomain( 'easy-dropbox-integrator', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Plugin Action Links
	 *
	 * @param array $links Links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {

		$links[] = '<a href="' . admin_url( 'admin.php?page=' . DROPBOX_INTEGRATOR_MENU_SLUG ) . '">' . __( 'Settings', 'easy-dropbox-integrator' ) . '</a>';

		return $links;

	}

}

/**
 * Check if dropbox_integrator doesn't exist
 */
if ( ! function_exists( 'dropbox_integrator' ) ) {
	/**
	 * Load Integrate Dropbox
	 *
	 * @return DropboxIntegrator
	 */
	function dropbox_integrator() {
		return DropboxIntegrator::run();
	}
}
dropbox_integrator();
