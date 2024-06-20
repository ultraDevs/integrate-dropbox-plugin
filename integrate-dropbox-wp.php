<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package IDBWP
 */

/**
 * Plugin Name:       Integrate DropBox WP - Browse, Upload, Manage Your Dropbox Files from Your Website
 * Plugin URI:        https://ultradevs.com/integrate-dropbox-wp/
 * Description:       Integrate DropBox WP - Browse, Upload, Manage Your Dropbox Files from Your Website Easily.
 * Version: 1.0.0
 * Author:            ultradevs
 * Author URI:        https://ultradevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       integrate-dropbox-wp
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

// Constant.
define( 'IDBWP_VERSION', '1.0.0' );
define( 'IDBWP_NAME', __( 'Integrate DropBox WP', 'integrate-dropbox-wp' ) );
define( 'IDBWP_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'IDBWP_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'IDBWP_ASSETS', IDBWP_DIR_URL . 'assets/' );
define( 'IDBWP_CACHE_DIR', WP_CONTENT_DIR . '/uploads/integrate-dropbox-wp-cache/' );
define( 'IDBWP_CACHE_DIR_URL', content_url() . '/uploads/integrate-dropbox-wp-cache/' );
define( 'IDBWP_MENU_SLUG', 'integrate-dropbox-wp' );
define( 'IDBWP_ERROR', '[ Integrate DropBox WP ] - ' );
define( 'IDBWP_DEV_MODE', true );


/**
 * Require Composer Autoload
 */
require_once IDBWP_DIR_PATH . 'vendor/autoload.php';

/**
 * Integrate Dropbox class
 */
final class IDBWP_Core {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'session_start' ) );
		add_action( 'plugins_loaded', array( $this, 'init' ) );
		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
		add_action( 'init', array( $this, 'load_text_domain' ) );

		do_action( 'idbwp_loaded' );
	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \IDBWP
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
		new ultraDevs\IDBWP\Ajax();

		// Assets Manager Class.
		$assets_manager = ( new ultraDevs\IDBWP\Assets_Manager )::get_instance();

		// Activate.
		$activate = new ultraDevs\IDBWP\Activate();


		// Menu.
		$menu = new ultraDevs\IDBWP\Admin\Menu();

		// App.
		new ultraDevs\IDBWP\App\App();

		// Rest API.
		new ultraDevs\IDBWP\Rest_API();

		// Shortcode.
		$shortcode = new ultraDevs\IDBWP\Shortcode();

		if ( is_admin() ) {

			add_action( 'admin_enqueue_scripts', array( $assets_manager, 'admin_assets' ) );

			// Activation_Redirect.
			add_action( 'admin_init', array( $activate, 'activation_redirect' ) );

			// Menu.
			$menu->register();

			// Plugin Action Links.
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

		} else {
			$shortcode->register();
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
		$activate = new ultraDevs\IDBWP\Activate();
		$activate->run();
	}

	/**
	 * Plugin Deactivation.
	 *
	 * @return void
	 */
	public function deactivate() {
		unset( $_COOKIE['idbwp_active_account'] );
	}

	/**
	 * Session Start
	 *
	 * @return void
	 */
	public function session_start() {
		if ( ! session_id() ) {
			session_start();
		}
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
					'slug'  => 'integrate-dropbox-wp',
					'title' => __( 'Integrate DropBox WP', 'integrate-dropbox-wp' ),
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
		load_plugin_textdomain( 'integrate-dropbox-wp', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Plugin Action Links
	 *
	 * @param array $links Links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {

		$links[] = '<a href="' . admin_url( 'admin.php?page=' . IDBWP_MENU_SLUG ) . '">' . __( 'Settings', 'integrate-dropbox-wp' ) . '</a>';

		return $links;

	}

}

/**
 * Check if integrate_dropbox_wp doesn't exist
 */
if ( ! function_exists( 'integrate_dropbox_wp' ) ) {
	/**
	 * Load Integrate Dropbox
	 *
	 * @return IDBWP_Core
	 */
	function integrate_dropbox_wp() {
		return IDBWP_Core::run();
	}
}
integrate_dropbox_wp();
