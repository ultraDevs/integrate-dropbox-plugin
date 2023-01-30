<?php
/**
 * Assets Manager Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\Admin\Dashboard;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package IntegrateDropbox
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

		if ( ! did_action( 'wp_enqueue_media' ) ) {
			wp_enqueue_media();
		}

		wp_enqueue_style( 'ud-id-admin', INTEGRATE_DROPBOX_ASSETS . 'admin/index.css', array( 'wp-components' ), INTEGRATE_DROPBOX_VERSION );

		$script_assets = file_exists( INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/index.asset.php' ) ? require INTEGRATE_DROPBOX_DIR_PATH . 'assets/admin/index.asset.php' : array();

		wp_enqueue_script( 'ud-id-admin', INTEGRATE_DROPBOX_ASSETS . 'admin/index.js', $script_assets['dependencies'], $script_assets['version'], true );

		wp_localize_script(
			'ud-id-admin',
			'SLAdmin',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'version' => INTEGRATE_DROPBOX_VERSION,
				'assets'  => INTEGRATE_DROPBOX_ASSETS,
			)
		);

	}


	/**
	 * Frontend Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function frontend_assets() {
		wp_enqueue_style( 'ud-id-frontend', INTEGRATE_DROPBOX_ASSETS . 'css/frontend.css', '', INTEGRATE_DROPBOX_VERSION );
		wp_enqueue_script( 'ud-id-frontend', INTEGRATE_DROPBOX_ASSETS . 'js/frontend.js', array( 'jquery' ), INTEGRATE_DROPBOX_VERSION, true );
	}

}
