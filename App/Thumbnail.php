<?php
/**
 * Thumbnail Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

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
		$this->thumbnails_location     = INTEGRATE_DROPBOX_CACHE_DIR . 'thumbnails/';
		$this->thumbnails_location_url = INTEGRATE_DROPBOX_CACHE_DIR_URL . 'thumbnails/';

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

		$file = $this->thumbnails_location . $this->get_name();

		if ( file_exists( $file ) ) {
			return $this->thumbnails_location_url . $this->get_name();
		}

		$thumbnail = Client::get_instance()->get_client()->getThumbnail( $this->entry->getPathLower(), $this->size, $this->format );
		$thumbnail = $thumbnail->getContents();

		if ( ! file_exists( $this->thumbnails_location ) ) {
			mkdir( $this->thumbnails_location, 0777, true );
		}

		file_put_contents( $file, $thumbnail );

		return $this->thumbnails_location_url . $this->get_name();
	}
}
