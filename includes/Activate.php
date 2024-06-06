<?php
/**
 * Activate
 *
 * @package IntegrateDropBoxWP
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropBoxWP;

use ultraDevs\IntegrateDropBoxWP\Helper;

/**
 * Activate Class
 *
 * @package IntegrateDropBoxWP
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
		update_option( 'idbwp_settings', idbwp_get_settings() );
	}

	/**
	 * Save Plugin's Data
	 */
	public function plugin_data() {
		Helper::update_option( 'idbwp_version', IDBWP_VERSION );

		$installed_time = Helper::get_option( 'idbwp_installed_datetime', false );
		if ( ! $installed_time ) {
			Helper::update_option( 'idbwp_installed_datetime', current_time( 'timestamp' ) ); // phpcs:ignore
		}
	}

	/**
	 * Activation Redirect
	 */
	public function activation_redirect() {

		if ( get_option( 'idbwp_do_activation_redirect', false ) ) {

			delete_option( 'idbwp_do_activation_redirect' );
			wp_safe_redirect( admin_url( 'admin.php?page=' . IDBWP_MENU_SLUG ) );
			exit();
		}
	}

	/**
	 * Create Directories
	 *
	 */
	public function create_directories() {

		$directories = array(
			IDBWP_CACHE_DIR,
			IDBWP_CACHE_DIR . 'thumbnails/',
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
		$table_files      = $wpdb->prefix . 'idbwp_files';
		$table_shortcodes = $wpdb->prefix . 'idbwp_shortcodes';

		$sql_files = "CREATE TABLE IF NOT EXISTS $table_files (
			id varchar(255) NOT NULL,
			`name` text NOT NULL,
			`path` text NOT NULL,
			account_id text NOT NULL,
			mimetype varchar(255) NOT NULL,
			`type` text DEFAULT NULL,
			data longtext NOT NULL,
			PRIMARY KEY  (id)
		) $charset_collate;";


		$sql_shortcodes = "CREATE TABLE IF NOT EXISTS $table_shortcodes (
			id int(11) NOT NULL AUTO_INCREMENT,
			`title` varchar(255) NOT NULL,
			`config` LONGTEXT NULL,
			`locations` LONGTEXT NULL,
			`status` varchar(255) NULL DEFAULT 'active',
			`created_at` datetime NOT NULL,
			`updated_at` datetime NOT NULL,
			PRIMARY KEY  (id)
		) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $sql_files );
		dbDelta( $sql_shortcodes );
	}
}
