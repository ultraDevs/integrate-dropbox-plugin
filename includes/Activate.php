<?php
/**
 * Activate
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\Helper;

/**
 * Activate Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Activate {
	/**
	 * The code that runs during plugin activation.
	 *
	 * @return void
	 */
	public function run() {
		$this->plugin_data();
	}


	/**
	 * Save Plugin's Data
	 */
	public function plugin_data() {
		Helper::update_option( 'integrate_dropbox_version', INTEGRATE_DROPBOX_VERSION );

		$installed_time = Helper::get_option( 'integrate_dropbox_installed_datetime', false );
		if ( ! $installed_time ) {
			Helper::update_option( 'integrate_dropbox_installed_datetime', current_time( 'timestamp' ) ); // phpcs:ignore
		}
	}

	/**
	 * Activation Redirect
	 */
	public function activation_redirect() {

		if ( get_option( 'integrate_dropbox_do_activation_redirect', false ) ) {

			delete_option( 'integrate_dropbox_do_activation_redirect' );
			wp_safe_redirect( admin_url( 'admin.php?page=' . INTEGRATE_DROPBOX_MENU_SLUG ) );
			exit();
		}
	}
}
