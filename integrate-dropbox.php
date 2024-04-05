<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package IntegrateDropbox
 */

use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\App\File;
use ultraDevs\IntegrateDropbox\App\API;
use ultraDevs\IntegrateDropbox\App\FileBrowser;

/**
 * Plugin Name:       Integrate Dropbox
 * Plugin URI:        https://ultradevs.com
 * Description:       Integrate Dropbox Description
 * Version: 1.0.0
 * Author:            ultradevs
 * Author URI:        https://ultradevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       integrate-dropbox
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

// Constant.
define( 'INTEGRATE_DROPBOX_VERSION', '1.0.0' );
define( 'INTEGRATE_DROPBOX_NAME', 'Integrate Dropbox' );
define( 'INTEGRATE_DROPBOX_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'INTEGRATE_DROPBOX_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'INTEGRATE_DROPBOX_ASSETS', INTEGRATE_DROPBOX_DIR_URL . 'assets/' );
define( 'INTEGRATE_DROPBOX_CACHE_DIR', WP_CONTENT_DIR . '/integrate-dropbox-cache/' );
define( 'INTEGRATE_DROPBOX_CACHE_DIR_URL', content_url() . '/integrate-dropbox-cache/' );
define( 'INTEGRATE_DROPBOX_MENU_SLUG', 'integrate-dropbox' );
define( 'INTEGRATE_DROPBOX_ERROR', '[ Integrate Dropbox ] - ' );
define( 'INTEGRATE_DROPBOX_DEV_MODE', true );

// if ( function_exists( 'ud_id_fs' ) ) {
// 	ud_id_fs()->set_basename( true, __FILE__ );
// } else {
// 	if ( ! function_exists( 'ud_id_fs' ) ) {
// 		// Create a helper function for easy SDK access.
// 		function ud_id_fs() {
// 			global $ud_id_fs;
	
// 			if ( ! isset( $ud_id_fs ) ) {
// 				// Include Freemius SDK.
// 				require_once dirname(__FILE__) . '/freemius/start.php';
	
// 				$ud_id_fs = fs_dynamic_init( array(
// 					'id'                  => '11947',
// 					'slug'                => 'integrate-dropbox',
// 					'type'                => 'plugin',
// 					'public_key'          => 'pk_a176432ddab9116ca5cb857548db3',
// 					'is_premium'          => true,
// 					'premium_suffix'      => 'PRO',
// 					// If your plugin is a serviceware, set this option to false.
// 					'has_premium_version' => true,
// 					'has_addons'          => false,
// 					'has_paid_plans'      => true,
// 					'trial'               => array(
// 						'days'               => 3,
// 						'is_require_payment' => true,
// 					),
// 					'menu'                => array(
// 						'slug'           => 'integrate-dropbox',
// 						'first-path'     => 'admin.php?page=integrate-dropbox',
// 						'support'        => false,
// 					),
// 					// Set the SDK to work in a sandbox mode (for development & testing).
// 					// IMPORTANT: MAKE SURE TO REMOVE SECRET KEY BEFORE DEPLOYMENT.
// 					'secret_key'          => 'sk_uZK$}43?:LyzW%B)PHfQWj()yEzYY',
// 				) );
// 			}
	
// 			return $ud_id_fs;
// 		}
	
// 		// Init Freemius.
// 		ud_id_fs();
// 		// Signal that SDK was initiated.
// 		do_action( 'ud_id_fs_loaded' );
// 	}
// }


/**
 * Require Composer Autoload
 */
require_once INTEGRATE_DROPBOX_DIR_PATH . 'vendor/autoload.php';

/**
 * Integrate Dropbox class
 */
final class IntegrateDropbox {

	/**
	 * Constructor
	 */
	public function __construct() {

		add_action( 'plugins_loaded', array( $this, 'init' ) );

		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
		add_action( 'init', array( $this, 'load_text_domain' ) );

		do_action( 'integrate_dropbox_loaded' );
	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \IntegrateDropbox
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
		new ultraDevs\IntegrateDropbox\Ajax();

		// Assets Manager Class.
		$assets_manager = new ultraDevs\IntegrateDropbox\Assets_Manager();

		// Activate.
		$activate = new ultraDevs\IntegrateDropbox\Activate();

		// Review Class.
		$review = new ultraDevs\IntegrateDropbox\Review();

		// Dashboard.
		$dashboard = new ultraDevs\IntegrateDropbox\Admin\Dashboard();

		// App.
		new ultraDevs\IntegrateDropbox\App\App();

		// Rest API.
		new ultraDevs\IntegrateDropbox\Rest_API();

		if ( is_admin() ) {

			// Activation_Redirect.
			add_action( 'admin_init', array( $activate, 'activation_redirect' ) );

			// Dashboard.
			$dashboard->register();

			// Plugin Action Links.
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

			// Review Notice.
			$review->register();

		} else {
			// Frontend Assets.
			add_action( 'wp_enqueue_scripts', array( $assets_manager, 'frontend_assets' ) );
		}

		// $file_preview = Client::get_instance()->file_preview( '/hello test/hello/features/img-1.png' );
		// //  $file_preview = Client::get_instance()->file_preview( '/get started with dropbox.pdf' );

		// ud_vd( $file_preview );


		// $api_class = API::get_instance()->get_file( '/hello test/hello/features/img-1.png' );

		// ud_vd( $api_class );

		// $client = FileBrowser::get_instance()->get_file_list( '/', true, false, false );
		// dump( $client );
		// foreach ( $client->children as $child ) {
		// 	// dd( $child );
		// 	dump( $child->basename );
		// }
		// dd( $client );

		// $rename = API::get_instance()->rename( '/EXCHANGE.zip', 'Exchange.zip' );
		// $rename = API::get_instance()->rename( '/Hello Test', 'Hello' );
		// dd( $rename );

		// $folder = API::get_instance()->create_folder( 'Imon', '/' );
		// dd( $folder );

		// echo '<pre>';
		// var_dump( FileBrowser::get_instance()->get_file_list( '', true, false, false ) );
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
		$activate = new ultraDevs\IntegrateDropbox\Activate();
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
					'slug'  => 'integrate-dropbox',
					'title' => __( 'Integrate Dropbox', 'integrate-dropbox' ),
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
		load_plugin_textdomain( 'integrate-dropbox', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Plugin Action Links
	 *
	 * @param array $links Links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {

		$links[] = '<a href="' . admin_url( 'admin.php?page=' . INTEGRATE_DROPBOX_MENU_SLUG ) . '">' . __( 'Settings', 'integrate-dropbox' ) . '</a>';

		return $links;

	}

}

/**
 * Check if integrate_dropbox doesn't exist
 */
if ( ! function_exists( 'integrate_dropbox' ) ) {
	/**
	 * Load Integrate Dropbox
	 *
	 * @return IntegrateDropbox
	 */
	function integrate_dropbox() {
		return IntegrateDropbox::run();
	}
}
integrate_dropbox();
