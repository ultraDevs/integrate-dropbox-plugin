<?php
/**
 * Thumbnail Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * Thumbnail Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Thumbnail {

	/**
	 * Entry
	 *
	 * @var object
	 */
	private $entry;

	/**
	 * Format
	 *
	 * @var string
	 */
	private $format;

	/**
	 * Thumbnail Name
	 *
	 * @var string
	 */
	private $thumbnail_name;

	/**
	 * Thumbnails Location
	 *
	 * @var string
	 */
	private $thumbnails_location;

	/**
	 * Thumbnails Location URL
	 *
	 * @var string
	 */
	private $thumbnails_location_url;

	/**
	 * Size
	 *
	 * @var string
	 */
	private $size = 'w2048h1536';

	/**
	 * Constructor
	 *
	 * @param string $entry Entry.
	 */
	public function __construct( $entry, $size = 'large', $format = 'png' ) {
		$this->entry                   = $entry;
		$this->format                  = $format;
		// Get Active Account ID.
		$account_id = Account::get_active_account()['id'];

		// Prepare account_id as a folder name.
		$account_id = Helper::normalize_string( $account_id );

		$this->thumbnails_location     = INTEGRATE_DROPBOX_CACHE_DIR . 'thumbnails/' . $account_id . '/';
		$this->thumbnails_location_url = INTEGRATE_DROPBOX_CACHE_DIR_URL . 'thumbnails/' . $account_id . '/';

		$this->size           = $size;

		$this->thumbnail_name = $this->entry->getId() . '_' . $this->size . '_ud.' . $this->format;
	}

	/**
	 * Get Name
	 *
	 * @return string
	 */
	public function get_name() {
		return str_replace( ':', '', $this->thumbnail_name );
	}

	public function generate_thumbnail() {

		global $wp_filesystem;

		if( ! $wp_filesystem ){
			require_once ABSPATH . 'wp-admin/includes/file.php';
			WP_Filesystem();
		} 

		$file = $this->thumbnails_location . $this->get_name();

		if ( file_exists( $file ) ) {
			return $this->thumbnails_location_url . $this->get_name();
		}

		$thumbnail = Client::get_instance()->get_client()->getThumbnail( $this->entry->getPathLower(), $this->size, $this->format );
		$thumbnail = $thumbnail->getContents();
		
		if ( ! file_exists( $this->thumbnails_location ) ) {
			wp_mkdir_p( $this->thumbnails_location );
		}

		// file_put_contents( $file, $thumbnail );
		if ( ! $wp_filesystem->put_contents( $file, $thumbnail, FS_CHMOD_FILE ) ) {
			return false;
		}

		return $this->thumbnails_location_url . $this->get_name();
	}

	/**
	 * Get Thumbnail URL
	 *
	 * @return string
	 */
	public function get_thumbnail_url() {
		return $this->thumbnails_location_url . $this->get_name();
	}
}
