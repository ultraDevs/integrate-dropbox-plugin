<?php
/**
 * Shortcode_Builder Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */

namespace ultraDevs\EasyDropBoxIntegration\App;

use ultraDevs\EasyDropBoxIntegration\App\Traits\Singleton;

/**
 * Shortcode_Builder Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */
class Shortcode_Builder {
	use Singleton;

	/**
	 * DB Table Name
	 */
	private $table_name;

	/**
	 * Constructor
	 */
	private function __construct() {
		global $wpdb;

		$this->table_name = $wpdb->prefix . 'easy_dropbox_intregration_shortcodes';
	}


	/**
	 * Get Shortcodes
	 *
	 * @return array
	 */
	public function get_shortcodes() {
		global $wpdb;

		// @TODO: Add pagination.

		$query = "SELECT * FROM {$this->table_name}";
		$shortcodes = $wpdb->get_results( $query, ARRAY_A );

		return $shortcodes;
	}

	/**
	 * Get Shortcode
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return array
	 */
	public function get_shortcode( $id ) {
		global $wpdb;

		$query = $wpdb->prepare( "SELECT * FROM {$this->table_name} WHERE id = %d", $id );
		$shortcode = $wpdb->get_row( $query, ARRAY_A );

		return $shortcode;
	}

	/**
	 * Add Shortcode
	 *
	 * @param array $data Shortcode Data.
	 *
	 * @return int
	 */
	public function add_shortcode( $data ) {
		global $wpdb;

		$default = array(
			'title'      => '',
			'config'     => '',
			'locations'  => '',
			'status'     => 'active',
			'created_at' => current_time( 'mysql' ),
			'updated_at' => current_time( 'mysql' ),
		);

		$data = wp_parse_args( $data, $default );

		$wpdb->insert( $this->table_name, $data );

		return $wpdb->insert_id;
	}

	/**
	 * Update Shortcode
	 *
	 * @param int   $id   Shortcode ID.
	 * @param array $data Shortcode Data.
	 *
	 * @return int
	 */
	public function update_shortcode( $id, $data ) {
		global $wpdb;

		$default = array(
			'title'      => '',
			'config'     => '',
			'locations'  => '',
			'status'     => 'active',
			'updated_at' => current_time( 'mysql' ),
		);

		$data = wp_parse_args( $data, $default );

		$wpdb->update( $this->table_name, $data, array( 'id' => $id ) );

		return $wpdb->insert_id;
	}

	/**
	 * Delete Shortcode
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return int
	 */
	public function delete_shortcode( $id ) {
		global $wpdb;

		$wpdb->delete( $this->table_name, array( 'id' => $id ) );

		return $wpdb->insert_id;
	}

	/**
	 * Get Shortcode Locations
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return array
	 */
	public function get_shortcode_locations( $id ) {
		$shortcode = $this->get_shortcode( $id );

		if ( empty( $shortcode ) ) {
			return array();
		}

		$locations = maybe_unserialize( $shortcode['locations'] );

		return $locations;
	}

	/**
	 * Get Shortcode Config
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return array
	 */
	public function get_shortcode_config( $id ) {
		$shortcode = $this->get_shortcode( $id );

		if ( empty( $shortcode ) ) {
			return array();
		}

		$config = maybe_unserialize( $shortcode['config'] );

		return $config;
	}

	/**
	 * Get Shortcode Status
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return string
	 */
	public function get_shortcode_status( $id ) {
		$shortcode = $this->get_shortcode( $id );

		if ( empty( $shortcode ) ) {
			return 'inactive';
		}

		return $shortcode['status'];
	}

	/**
	 * Get Shortcode Title
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return string
	 */
	public function get_shortcode_title( $id ) {
		$shortcode = $this->get_shortcode( $id );

		if ( empty( $shortcode ) ) {
			return '';
		}

		return $shortcode['title'];
	}

	/**
	 * Duplicate Shortcode
	 *
	 * @param int $id Shortcode ID.
	 *
	 * @return int
	 */
	public function duplicate_shortcode( $id ) {
		$shortcode = $this->get_shortcode( $id );

		if ( empty( $shortcode ) ) {
			return 0;
		}

		$shortcode['title'] = $shortcode['title'] . ' - Copy';
		$shortcode['created_at'] = current_time( 'mysql' );
		$shortcode['updated_at'] = current_time( 'mysql' );

		$new_id = $this->add_shortcode( $shortcode );

		return $new_id;
	}
}
