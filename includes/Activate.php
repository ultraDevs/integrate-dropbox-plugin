<?php
/**
 * Activate
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */

namespace ultraDevs\EasyDropBoxIntegration;

use ultraDevs\EasyDropBoxIntegration\Helper;

/**
 * Activate Class
 *
 * @package EasyDropBoxIntegration
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
		$this->create_tables();
		$this->create_directories();
	}

	/**
	 * Settings Data
	 */
	public function settings_data() {
		update_option( 'easy_dropbox_intregration_settings', idb_get_settings() );
	}

	/**
	 * Save Plugin's Data
	 */
	public function plugin_data() {
		Helper::update_option( 'easy_dropbox_intregration_version', EASY_DROPBOX_INTEGRATION_VERSION );

		$installed_time = Helper::get_option( 'easy_dropbox_intregration_installed_datetime', false );
		if ( ! $installed_time ) {
			Helper::update_option( 'easy_dropbox_intregration_installed_datetime', current_time( 'timestamp' ) ); // phpcs:ignore
		}
	}

	/**
	 * Activation Redirect
	 */
	public function activation_redirect() {

		if ( get_option( 'easy_dropbox_intregration_do_activation_redirect', false ) ) {

			delete_option( 'easy_dropbox_intregration_do_activation_redirect' );
			wp_safe_redirect( admin_url( 'admin.php?page=' . EASY_DROPBOX_INTEGRATION_MENU_SLUG ) );
			exit();
		}
	}

	/**
	 * Create Directories
	 *
	 */
	public function create_directories() {

		$directories = array(
			EASY_DROPBOX_INTEGRATION_CACHE_DIR,
			EASY_DROPBOX_INTEGRATION_CACHE_DIR . 'thumbnails/',
		);

		foreach ( $directories as $directory ) {
			if ( ! file_exists( $directory ) ) {
				wp_mkdir_p( $directory );
			}
		}

	}

	/**
	 * Create Tables
	 */
	public function create_tables() {
		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();
		$table_name      = $wpdb->prefix . 'easy_dropbox_intregration_files';

		$sql = "CREATE TABLE IF NOT EXISTS $table_name (
			id varchar(255) NOT NULL,
			`name` text NOT NULL,
			`path` text NOT NULL,
			account_id text NOT NULL,
			mimetype varchar(255) NOT NULL,
			`type` text DEFAULT NULL,
			data longtext NOT NULL,
			PRIMARY KEY  (id)
		) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $sql );
	}
}
