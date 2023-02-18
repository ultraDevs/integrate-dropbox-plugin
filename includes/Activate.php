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
		$this->settings_data();
	}

	/**
	 * Settings Data
	 */
	public function settings_data() {
		update_option( 'ud_integrate_dropbox_settings', ud_idb_get_settings() );
	}

	/**
	 * Save Plugin's Data
	 */
	public function plugin_data() {
		Helper::update_option( 'ud_integrate_dropbox_version', INTEGRATE_DROPBOX_VERSION );

		$installed_time = Helper::get_option( 'ud_integrate_dropbox_installed_datetime', false );
		if ( ! $installed_time ) {
			Helper::update_option( 'ud_integrate_dropbox_installed_datetime', current_time( 'timestamp' ) ); // phpcs:ignore
		}
	}

	/**
	 * Activation Redirect
	 */
	public function activation_redirect() {

		if ( get_option( 'ud_integrate_dropbox_do_activation_redirect', false ) ) {

			delete_option( 'ud_integrate_dropbox_do_activation_redirect' );
			wp_safe_redirect( admin_url( 'admin.php?page=' . INTEGRATE_DROPBOX_MENU_SLUG ) );
			exit();
		}
	}
}
