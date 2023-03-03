<?php
/**
 * Helper Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\App\Client;

/**
 * Helper Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Helper {

	protected static $cached_folder_key = 'ud_idb_cached_folders';

	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Add Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $value Option Value.
	 */
	public static function add_option( $key, $value ) {
		// Add Option.
		add_option( $key, $value );
	}

	/**
	 * Get Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $default Option Default.
	 */
	public static function get_option( $key, $default = false ) {
		// Get Option.
		return get_option( $key, $default );
		
	}

	/**
	 * Update Option
	 *
	 * @param string $key Option Key.
	 * @param mixed  $value Option Value.
	 */
	public static function update_option( $key, $value ) {
		// Update Option.
		update_option( $key, $value );
	}

	/**
	 * Delete Option
	 *
	 * @param string $key Option Key.
	 */
	public static function delete_option( $key ) {
		// Delete Option.
		delete_option( $key );
	}

	/**
	 * Multiple in_array
	 *
	 * @param array $needles needles.
	 * @param array $haystack haystack.
	 * @return boolean
	 */
	public function multiple_in_array( $needles, $haystack ) {
		return (bool) array_intersect( $needles, $haystack );
	}

	/**
	 * Time to Day(s) Converter
	 *
	 * @param int $time Time.
	 * @return int
	 */
	public static function time_to_days( $time ) {

		$current_time = current_time( 'timestamp' ); //phpcs:ignore
		return round( ( $current_time - $time ) / 24 / 60 / 60 );
	}

	/**
	 * Type
	 *
	 * @return boolean
	 */
	public static function type() {
		return apply_filters( 'type', 'Free' );
	}

	/**
	 * Recursive sanitation for text or array
	 *
	 * @param (array|string) $array_or_string Array OR String.
	 * @since  0.1
	 * @return mixed
	 */
	public static function sanitize_text_or_array_field( $array_or_string ) {
		if ( is_string( $array_or_string ) ) {
			$array_or_string = sanitize_text_field( $array_or_string );
		} elseif ( is_array( $array_or_string ) ) {
			foreach ( $array_or_string as $key => &$value ) {
				if ( is_array( $value ) ) {
					$value = sanitize_text_or_array_field( $value );
				} else {
					$value = sanitize_text_field( $value );
				}
			}
		}

		return $array_or_string;
	}

	/**
	 * Get Icon
	 *
	 * @return string
	 */
	public static function get_icon(){

	}

	/**
	 * Clean Path
	 *
	 * @param string $path Path.
	 * @return string
	 */
	public static function clean_path( $path ) {
		$path = str_replace( '\\', '/', $path );
		$path = preg_replace( '/\/+/', '/', $path );
		return $path;
	}

	/**
	 * Get Path Info
	 *
	 * @param string $path Path.
	 * @return string
	 */
	public static function get_path_info( $path ) {
		return pathinfo( $path );
	}

	/**
	 * Get Breadcrumbs
	 *
	 * @param string $path Path.
	 * @return string
	 */
	public static function get_breadcrumbs( $folder ) {
		$folder = self::clean_path( $folder );
		$folders = explode( '/', $folder );
		$breadcrumbs = array();
		
		$folder_path = '';
		foreach ( $folders as $folder ) {
			$folder_path .= $folder . '/';
			$breadcrumbs[] = array(
				'name' => ! empty( $folder ) ? $folder : __( 'All Files', 'integrate-dropbox' ),
				'path' => $folder_path,
			);
		}
		return $breadcrumbs;
	}

	/**
	 * Get Thumbnail
	 *
	 * @param string $path Path.
	 * @param string $size Size.
	 * @param string $format Format.
	 * @return string
	 */
	public static function get_thumbnail( $path, $size, $format ) {
		$thumbnail = Client::get_instance()->get_client()->getThumbnail( $path, $size, $format );
		$thumbnail = $thumbnail->getContents();
		return $thumbnail;
	}

	/**
	 * Get Previous Path
	 *
	 * @param string $path Path.
	 * @return string
	 */
	public static function get_previous_path( $path ) {
		$path = self::clean_path( $path );
		$folders = explode( '/', $path );
		array_pop( $folders );
		$previous_path = implode( '/', $folders );
		return $previous_path;
	}

	/**
	 * Check if folder is cached
	 *
	 * @param string $path Path.
	 * @return boolean true|false true if cached, false if not cached
	 */
	public static function is_cached_folder( $path ) {
		$cached_folders = get_option( self::$cached_folder_key, array() );

		return in_array( $path, $cached_folders, true );
	}

	/**
	 * Save folder to cache
	 *
	 * @param string $path Path.
	 * @return boolean true|false true if saved, false if not saved
	 */
	public static function update_cached_folder( $path ) {
		$cached_folders = get_option( self::$cached_folder_key, array() );
		$cached_folders[] = $path;
		return update_option( self::$cached_folder_key, $cached_folders, false );
	}
}
