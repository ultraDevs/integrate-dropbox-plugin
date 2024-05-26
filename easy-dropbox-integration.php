<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package EasyDropBoxIntegration
 */

/**
 * Plugin Name:       Easy DropBox Integration - Browse, Upload, Manage Your Dropbox Files from Your Website
 * Plugin URI:        https://ultradevs.com/easy-dropbox-integration/
 * Description:       Easy DropBox Integration - Browse, Upload, Manage Your Dropbox Files from Your Website Easily.
 * Version: 1.0.0
 * Author:            ultradevs
 * Author URI:        https://ultradevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       easy-dropbox-integration
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

// Constant.
define( 'EASY_DROPBOX_INTEGRATION_VERSION', '1.0.0' );
define( 'EASY_DROPBOX_INTEGRATION_NAME', __( 'Easy DropBox Integration', 'easy-dropbox-integration' ) );
define( 'EASY_DROPBOX_INTEGRATION_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'EASY_DROPBOX_INTEGRATION_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'EASY_DROPBOX_INTEGRATION_ASSETS', EASY_DROPBOX_INTEGRATION_DIR_URL . 'assets/' );
define( 'EASY_DROPBOX_INTEGRATION_CACHE_DIR', WP_CONTENT_DIR . '/uploads/easy-dropbox-integration-cache/' );
define( 'EASY_DROPBOX_INTEGRATION_CACHE_DIR_URL', content_url() . '/uploads/easy-dropbox-integration-cache/' );
define( 'EASY_DROPBOX_INTEGRATION_MENU_SLUG', 'easy-dropbox-integration' );
define( 'EASY_DROPBOX_INTEGRATION_ERROR', '[ Easy DropBox Integration ] - ' );
define( 'EASY_DROPBOX_INTEGRATION_DEV_MODE', true );


/**
 * Require Composer Autoload
 */
require_once EASY_DROPBOX_INTEGRATION_DIR_PATH . 'vendor/autoload.php';

/**
 * Integrate Dropbox class
 */
final class EasyDropBoxIntegration {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'session_start' ) );
		add_action( 'plugins_loaded', array( $this, 'init' ) );
		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
		add_action( 'init', array( $this, 'load_text_domain' ) );

		do_action( 'easy_dropbox_integration_loaded' );
	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \EasyDropBoxIntegration
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
		new ultraDevs\EasyDropBoxIntegration\Ajax();

		// Assets Manager Class.
		$assets_manager = ( new ultraDevs\EasyDropBoxIntegration\Assets_Manager )::get_instance();

		// Activate.
		$activate = new ultraDevs\EasyDropBoxIntegration\Activate();

		// Review Class.
		$review = new ultraDevs\EasyDropBoxIntegration\Review();

		// Menu.
		$menu = new ultraDevs\EasyDropBoxIntegration\Admin\Menu();

		// App.
		new ultraDevs\EasyDropBoxIntegration\App\App();

		// Rest API.
		new ultraDevs\EasyDropBoxIntegration\Rest_API();

		// Shortcode.
		$shortcode = new ultraDevs\EasyDropBoxIntegration\Shortcode();

		if ( is_admin() ) {

			add_action( 'admin_enqueue_scripts', array( $assets_manager, 'admin_assets' ) );

			// Activation_Redirect.
			add_action( 'admin_init', array( $activate, 'activation_redirect' ) );

			// Menu.
			$menu->register();

			// Plugin Action Links.
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

			// Review Notice.
			$review->register();

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
		$activate = new ultraDevs\EasyDropBoxIntegration\Activate();
		$activate->run();
	}

	/**
	 * Plugin Deactivation.
	 *
	 * @return void
	 */
	public function deactivate() {
		unset( $_COOKIE['edbi_active_account'] );
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
					'slug'  => 'easy-dropbox-integration',
					'title' => __( 'Easy Dropbox Integration', 'easy-dropbox-integration' ),
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
		load_plugin_textdomain( 'easy-dropbox-integration', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Plugin Action Links
	 *
	 * @param array $links Links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {

		$links[] = '<a href="' . admin_url( 'admin.php?page=' . EASY_DROPBOX_INTEGRATION_MENU_SLUG ) . '">' . __( 'Settings', 'easy-dropbox-integration' ) . '</a>';

		return $links;

	}

}

/**
 * Check if easy_dropbox_integration doesn't exist
 */
if ( ! function_exists( 'easy_dropbox_integration' ) ) {
	/**
	 * Load Integrate Dropbox
	 *
	 * @return EasyDropBoxIntegration
	 */
	function easy_dropbox_integration() {
		return EasyDropBoxIntegration::run();
	}
}
easy_dropbox_integration();


// echo esc_url( 'https:\/\/dl-web.dropbox.com\/account_photo\/get\/pid_uphoto%3AAAAAAFzgsynQ8G9YAm3yDdYgAdioxvU4AYYw2N-C0xXzwRCfzs1oMY5pRDgQS2zJD7bV_WTg-v3RY-D_c6Ez?size=128x128&vers=1558710916897');