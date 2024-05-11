<?php
/**
 * Helper Class
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */

namespace ultraDevs\DropboxIntegrator;

use ultraDevs\DropboxIntegrator\App\Client;
use ultraDevs\DropboxIntegrator\App\FileAbstract;

/**
 * Helper Class
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */
class Helper {

	protected static $cached_folder_key = 'idb_cached_folders';

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
		return round(  ( $current_time - $time ) / 24 / 60 / 60 );
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
	public static function get_icon() {

	}

	/**
	 * Clean Path
	 *
	 * @param string $path Path.
	 * @return string
	 */
	public static function clean_path( $path ) {
		// Remove html entities.
		$path = html_entity_decode( $path, ENT_QUOTES, 'UTF-8' );
		// Remove double slashes.
		$path = str_replace( '//', '/', $path );
		// Remove trailing slash.
		$path = trim( $path, '/' );
		$special_chars = array( '<', '>', ':', '"', '|', '?', '*' );
		$path = str_replace( $special_chars, '', $path );

		// Check if we have / in the start of the path.
		if ( '/' !== substr( $path, 0, 1 ) ) {
			$path = '/' . $path;
		}

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
	 * Get Mimetype From Extension.
	 *
	 * @param string $extension Extension.
	 *
	 * @return string
	 */
	public static function get_mimetype( $extension = '' ) {

		if ( empty( $extension ) ) {
			return 'application/octet-stream';
		}

		$mime_types = [
			'aac' => 'audio/aac',
			'abw' => 'application/x-abiword',
			'arc' => 'application/x-freearc',
			'avif' => 'image/avif',
			'avi' => 'video/x-msvideo',
			'azw' => 'application/vnd.amazon.ebook',
			'bin' => 'application/octet-stream',
			'bmp' => 'image/bmp',
			'bz' => 'application/x-bzip',
			'bz2' => 'application/x-bzip2',
			'cda' => 'application/x-cdf',
			'csh' => 'application/x-csh',
			'css' => 'text/css',
			'csv' => 'text/csv',
			'doc' => 'application/msword',
			'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			'eot' => 'application/vnd.ms-fontobject',
			'epub' => 'application/epub+zip',
			'gz' => 'application/gzip',
			'gif' => 'image/gif',
			'htm' => 'text/html',
			'html' => 'text/html',
			'ico' => 'image/vnd.microsoft.icon',
			'ics' => 'text/calendar',
			'jar' => 'application/java-archive',
			'jpeg' => 'image/jpeg',
			'jpg' => 'image/jpeg',
			'js' => 'text/javascript',
			'json' => 'application/json',
			'jsonld' => 'application/ld+json',
			'mid' => 'audio/midi audio/x-midi',
			'midi' => 'audio/midi audio/x-midi',
			'mjs' => 'text/javascript',
			'mp3' => 'audio/mpeg',
			'mp4' => 'video/mp4',
			'mpeg' => 'video/mpeg',
			'mpkg' => 'application/vnd.apple.installer+xml',
			'odp' => 'application/vnd.oasis.opendocument.presentation',
			'ods' => 'application/vnd.oasis.opendocument.spreadsheet',
			'odt' => 'application/vnd.oasis.opendocument.text',
			'oga' => 'audio/ogg',
			'ogv' => 'video/ogg',
			'ogx' => 'application/ogg',
			'opus' => 'audio/opus',
			'otf' => 'font/otf',
			'png' => 'image/png',
			'pdf' => 'application/pdf',
			'php' => 'application/x-httpd-php',
			'ppt' => 'application/vnd.ms-powerpoint',
			'pptx' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
			'rar' => 'application/vnd.rar',
			'rtf' => 'application/rtf',
			'sh' => 'application/x-sh',
			'svg' => 'image/svg+xml',
			'swf' => 'application/x-shockwave-flash',
			'tar' => 'application/x-tar',
			'tif' => 'image/tiff',
			'tiff' => 'image/tiff',
			'ts' => 'video/mp2t',
			'ttf' => 'font/ttf',
			'txt' => 'text/plain',
			'vsd' => 'application/vnd.visio',
			'wav' => 'audio/wav',
			'weba' => 'audio/webm',
			'webm' => 'video/webm',
			'webp' => 'image/webp',
			'woff' => 'font/woff',
			'woff2' => 'font/woff2',
			'xhtml' => 'application/xhtml+xml',
			'xls' => 'application/vnd.ms-excel',
			'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			'xml' => 'text/xml',
			'xul' => 'application/vnd.mozilla.xul+xml',
			'zip' => 'application/zip',
			'3gp' => 'video/3gpp',
			'3g2' => 'video/3gpp2',
			'7z' => 'application/x-7z-compressed'
		];

		// Add Google Mime Types.
		$mime_types = array_merge( $mime_types, [
			'gdoc' => 'application/vnd.google-apps.document',
			'gsheet' => 'application/vnd.google-apps.spreadsheet',
			'gslides' => 'application/vnd.google-apps.presentation',
			'gdraw' => 'application/vnd.google-apps.drawing',
			'gscript' => 'application/vnd.google-apps.script',
		]);

		$extension = strtolower( $extension );

		if ( isset( $mime_types[ $extension ] ) ) {
			return $mime_types[ $extension ];
		}

		return 'application/octet-stream';
	}

	/**
	 * Get Breadcrumbs
	 *
	 * @param string $folder Folder.
	 * @return string
	 */
	public static function get_breadcrumbs( $folder ) {
		$folder = self::clean_path( $folder );
		$folder = str_replace( '\\', '/', $folder );
		$folder = trim( $folder, '/' );

		$breadcrumbs = array();
		$breadcrumbs[] = array(
			'name' => __( 'All Files', 'easy-dropbox-integrator' ),
			'path' => '/',
		);

		if ( empty( $folder ) ) {
			return $breadcrumbs;
		}

		$folder = explode( '/', $folder );
		$folder_path = '';
		foreach ( $folder as $folder_name ) {
			$folder_path .= '/' . $folder_name;
			$breadcrumbs[] = array(
				'name' => ucfirst( $folder_name ),
				'path' => $folder_path,
			);
		}

		return $breadcrumbs;
	}

	/**
	 * Supported extensions for thumbnails
	 *
	 * @param string $extension Extension.
	 *
	 * @return boolean
	 */
	public static function can_generate_thumbnail( $extension ) {
		$extensions = ['csv', 'doc', 'docm', 'docx', 'ods', 'odt', 'pdf', 'rtf', 'xls', 'xlsm', 'xlsx', 'odp', 'pps', 'ppsm', 'ppsx', 'ppt', 'pptm', 'pptx', '3fr', 'ai', 'arw', 'bmp', 'cr2', 'crw', 'dcs', 'dcr', 'dng', 'eps', 'erf', 'gif', 'heic', 'jpg', 'jpeg', 'kdc', 'mef', 'mos', 'mrw', 'nef', 'nrw', 'orf', 'pef', 'png', 'psd', 'r3d', 'raf', 'rw2', 'rwl', 'sketch', 'sr2', 'svg', 'svgz', 'tif', 'tiff', 'x3f', '3gp', '3gpp', '3gpp2', 'asf', 'avi', 'dv', 'flv', 'm2t', 'm4v', 'mkv', 'mov', 'mp4', 'mpeg', 'mpg', 'mts', 'oggtheora', 'ogv', 'rm', 'ts', 'vob', 'webm', 'wmv', 'paper', 'webp'];

		return in_array( $extension, $extensions, true );
	}

	/**
	 * Can file be previewed via Dropbox?
	 *
	 * @param string $extension Extension.
	 *
	 * @return boolean
	 */
	public static function can_preview_by_cloud( $extension ) {
		$previewable = apply_filters(
			'idb_previewable_extensions',
			[
				'pdf', 'txt', 'ai', 'eps', 'odp', 'odt', 'doc', 'docx', 'docm', 'ppt', 'pps', 'ppsx', 'ppsm', 'pptx', 'pptm', 'xls', 'xlsx', 'xlsm', 'rtf', 'jpg', 'jpeg', 'gif', 'png', 'webp', 'mp4', 'm4v', 'ogg', 'ogv', 'webmv', 'mp3', 'm4a', 'ogg', 'oga', 'wav', 'flac', 'paper', 'gdoc', 'gslides', 'gsheet'
			]
		);

		return in_array( $extension, $previewable );
	}
	
	/**
	 * Supported extensions for embed
	 *
	 * @param string $extension Extension.
	 *
	 * @return boolean
	 */
	public static function can_embed( $extension ) {
		$extensions = ['pdf', 'mp4', 'm4v', 'ogg', 'ogv', 'webmv', 'webm', 'mp3', 'm4a', 'ogg', 'oga', 'wav', 'jpg', 'jpeg', 'gif', 'apng', 'png', 'svg', 'webp', 'flac', 'xls', 'xlsx', 'xlsm', 'doc', 'docx', 'docm', 'ppt', 'pptx', 'pptm', 'pps', 'ppsm', 'ppsx'];

		return in_array( $extension, $extensions, true );
	}

	/**
	 * Can create thumbnail
	 *
	 * @param string $extension Extension.
	 *
	 * @return boolean
	 */
	public static function can_create_thumbnail( $extension ) {
		$extensions = apply_filters(
			'idb_thumbnail_extensions',
			['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'pdf', 'doc', 'docx', 'docm', 'ppt', 'pps', 'ppsm', 'ppsx', 'pptx', 'pptm', 'xls', 'xlsx', 'xlsm', 'odp', 'ods', 'odt', 'rtf', 'csv', '3fr', 'ai', 'arw', 'cr2', 'crw', 'dcr', 'dng', 'eps', 'erf', 'heic', 'kdc', 'mef', 'mos', 'mrw', 'nef', 'nrw', 'orf', 'pef', 'psd', 'raf', 'raw', 'rw2', 'rwl', 'sr2', 'svg', 'tif', 'tiff', 'x3f', '3gp', '3gpp', '3gpp2', 'asf', 'avi', 'dv', 'flv', 'm2t', 'm4v', 'mkv', 'mov', 'mp4', 'mpeg', 'mpg', 'mts', 'oggtheora', 'ogv', 'rm', 'ts', 'vob', 'webm', 'wmv', 'paper', 'webp']
		);

		return in_array( $extension, $extensions, true );
	}

	/**
	 * Get Thumbnail
	 *
	 * @param string $path Path.
	 * @param string $size Size.
	 * @param string $format Format.
	 * @param string $account_id Account ID.
	 *
	 * @return string
	 */
	public static function get_thumbnail( $account_id, $path, $size, $format ) {

		if ( empty( $account_id ) || empty( $path ) ) {
			return '';
		}


		$thumbnail = Client::get_instance( $account_id )->get_client()->getThumbnail( $path, $size, $format );
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
		return str_replace( '\\', '/', dirname( $path ) );
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

	/**
	 * Remove folder from cache
	 *
	 * @param string $path Path.
	 */
	public static function remove_cached_folder( $path ) {
		$cached_folders = get_option( self::$cached_folder_key, array() );
		$key = array_search( $path, $cached_folders, true );
		if ( false !== $key ) {
			unset( $cached_folders[ $key ] );
		}
		return update_option( self::$cached_folder_key, $cached_folders, false );
	}

	/**
	 * Reset Cache
	 *
	 * @return string
	 */
	public static function reset_cache() {
		return delete_option( self::$cached_folder_key );
	}

	/**
	 * Get Relative Path
	 *
	 * @param string|null $full_path Full Path.
	 * @param string $from_path From Path.
	 *
	 * @return string
	 */
	public static function get_relative_path( $full_path, $from_path = null ) {

		$root_folder = ''; // @TODO: Update this later.
		if ( empty( $from_path ) ) {
			if ( '' === $root_folder || '/' === $root_folder ) {
				return $full_path;
			}
			
			$from_path = $root_folder;
		}

		$exact_from_path = explode( '/', $from_path );
		$exact_full_path = explode( '/', $full_path );
		$path_diff = ( count( $exact_full_path ) - count( $exact_from_path ) );

		if ( $path_diff < 1 ) {
			return '/';
		}

		if ( 1 === $path_diff ) {
			return '/' . end( $exact_full_path );
		}

		return '/' . implode( '/', array_slice( $exact_full_path, - $path_diff ) );

	}

	/**
	 * Find Array item in array with value.
	 *
	 * @param array  $array Array.
	 * @param string $key Key.
	 * @param string $search Search.
	 *
	 * @return mixed
	 */
	public static function find_array_item_with_value( $array, $key, $search ) {
		$data = array_map(
			function( $item ) use ( $key ) {
				return is_object( $item ) ? $item->{$key} : $item[ $key ];
			},
			$array
		);

		return array_search( $search, $data );
	}

	/**
	 * Beautify File Name
	 *
	 * @param string $file_name File Name.
	 * @return string
	 */
	public static function beautify_file_name( $file_name ) {

	}

	/**
	 * Sort Files
	 *
	 * @param array $files Files.
	 * @param string $sort_by Sort By.
	 * @param string $order Order.
	 *
	 * @return array
	 */
	public static function sort_files( $files, $sort_by = 'name', $order = 'asc' ) {
		
		$sort = [];

		if ( 'shuffle' === $sort_by ) {
			$keys = array_keys( $files );
			shuffle( $keys );
			$shuffled = [];
			foreach ( $keys as $key ) {
				$shuffled[ $key ] = $files[ $key ];
			}

			return $shuffled;
		}

		$sort_column = $sort_by;
		switch( $sort_by ) {
			case 'name':
				$sort_column = 'path_display';
				break;
			case 'modified':
				$sort_column = 'last_edited';
				break;
			case 'size':
				$sort_column = 'size';
				break;
		}

		$sort_order = 'asc' === $order ? SORT_ASC : SORT_DESC;

		foreach ( $files as $key => $file ) {
			if ( $file instanceof FileAbstract ) {
				$sort['is_dir'][ $key ] = $file->is_dir();
				$sort['sort'][ $key ] = strtolower( $file->{ 'get_' . $sort_column }() );
			} else {
				$sort['is_dir'][ $key ] = $file['is_dir'];
				$sort['sort'][ $key ] = $file[ $sort_column ];
			}
		}

		array_multisort( $sort['is_dir'], SORT_DESC, SORT_REGULAR, $sort['sort'], $sort_order, SORT_NATURAL | SORT_FLAG_CASE, $files, SORT_ASC );

		return $files;
	}


	/**
	 * Normalize String
	 *
	 * @param string $str String.
	 * 
	 * Credit: https://stackoverflow.com/a/19018736
	 */
	public static function normalize_string ($str = '')
	{
		$str = strip_tags($str); 
		$str = preg_replace('/[\r\n\t ]+/', ' ', $str);
		$str = preg_replace('/[\"\*\/\:\<\>\?\'\|]+/', ' ', $str);
		// $str = strtolower($str);
		$str = html_entity_decode( $str, ENT_QUOTES, "utf-8" );
		$str = htmlentities($str, ENT_QUOTES, "utf-8");
		$str = preg_replace("/(&)([a-z])([a-z]+;)/i", '$2', $str);
		$str = str_replace(' ', '-', $str);
		$str = rawurlencode($str);
		$str = str_replace('%', '-', $str);
		return $str;
	}
	
}
