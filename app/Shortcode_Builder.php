<?php
/**
 * Shortcode_Builder Class
 *
 * @package IDBWP
 * @since 1.0.0
 */

namespace ultraDevs\IDBWP\App;

use ultraDevs\IDBWP\App\Traits\Singleton;

/**
 * Shortcode_Builder Class
 *
 * @package IDBWP
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

        $this->table_name = $wpdb->prefix . 'idbwp_shortcodes';
    }

    /**
     * Get Shortcodes
     *
     * @return array
     */
    public function get_shortcodes() {
        global $wpdb;

        // @TODO: Add pagination, Cache.

        // $query = ;
        $shortcodes = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$this->table_name}" ), ARRAY_A );

        // Get Shortcode type from config column and add it to the array.
        foreach ($shortcodes as $key => $shortcode) {
            $config = maybe_unserialize($shortcode['config']);

            $shortcodes[$key]['type'] = esc_html($config['type']);
        }

        return $shortcodes;
    }

    /**
     * Get Shortcode
     *
     * @param int $id Shortcode ID.
     *
     * @return array
     */
    public function get_shortcode($id) {
        global $wpdb;

        $query = $wpdb->prepare("SELECT * FROM {$this->table_name} WHERE id = %d", $id);
        $shortcode = $wpdb->get_row($query, ARRAY_A);

        return $shortcode;
    }

    /**
     * Add Shortcode
     *
     * @param array $data Shortcode Data.
     *
     * @return int
     */
    public function add_shortcode($data) {
        global $wpdb;

        $default = array(
            'title'      => '',
            'config'     => '',
            'locations'  => '',
            'status'     => 'active',
            'created_at' => current_time('mysql'),
            'updated_at' => current_time('mysql'),
        );

        $data = wp_parse_args($data, $default);

        $wpdb->insert($this->table_name, $data, array('%s', '%s', '%s', '%s', '%s', '%s'));

        return $wpdb->insert_id;
    }

    /**
     * Update Shortcode
     *
     * @param int $id Shortcode ID.
     * @param array $data Shortcode Data.
     *
     * @return int
     */
    public function update_shortcode($id, $data) {
        global $wpdb;

        $default = array(
            'title'      => '',
            'config'     => '',
            'locations'  => '',
            'status'     => 'active',
            'updated_at' => current_time('mysql'),
        );

        $data = wp_parse_args($data, $default);

        $update = $wpdb->update($this->table_name, $data, array('id' => $id), array('%s', '%s', '%s', '%s', '%s'), array('%d'));

        return $update;
    }

    /**
     * Duplicate Shortcode
     *
     * @param int $id Shortcode ID.
     *
     * @return int
     */
    public function duplicate_shortcode($id) {
        $shortcode = $this->get_shortcode($id);

        if (empty($shortcode)) {
            return 0;
        }

        unset($shortcode['id']);

        $shortcode['title'] = $shortcode['title'] . ' - Copy';

        $shortcode['created_at'] = current_time('mysql');
        $shortcode['updated_at'] = current_time('mysql');

        $insert_id = $this->add_shortcode($shortcode);
        $shortcode['id'] = $insert_id;

        return $shortcode;
    }

    /**
     * Delete Shortcode
     *
     * @param int $id Shortcode ID.
     *
     * @return int
     */
    public function delete_shortcode($id) {
        global $wpdb;

        $delete = $wpdb->delete($this->table_name, array('id' => $id), array('%d'));

        return $delete;
    }

    /**
     * Get Shortcode Locations
     *
     * @param int $id Shortcode ID.
     *
     * @return array
     */
    public function get_shortcode_locations($id) {
        $shortcode = $this->get_shortcode($id);

        if (empty($shortcode)) {
            return array();
        }

        $locations = maybe_unserialize($shortcode['locations']);

        return $locations;
    }

    /**
     * Get Shortcode Config
     *
     * @param int $id Shortcode ID.
     *
     * @return array
     */
    public function get_shortcode_config($id) {
        $shortcode = $this->get_shortcode($id);

        if (empty($shortcode)) {
            return array();
        }

        $config = maybe_unserialize($shortcode['config']);

        return $config;
    }

    /**
     * Get Shortcode Status
     *
     * @param int $id Shortcode ID.
     *
     * @return string
     */
    public function get_shortcode_status($id) {
        $shortcode = $this->get_shortcode($id);

        if (empty($shortcode)) {
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
    public function get_shortcode_title($id) {
        $shortcode = $this->get_shortcode($id);

        if (empty($shortcode)) {
            return '';
        }

        return $shortcode['title'];
    }
}
