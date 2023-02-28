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
	 * Thumbnail
	 *
	 * @var string
	 */
	private $entry;

	/**
	 * Width
	 *
	 * @var number
	 */
	private $width;

	/**
	 * Height
	 *
	 * @var number
	 */
	private $height;

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
	 * Image Data.
	 *
	 * @var string
	 */
	private $image_data;

	/**
	 * Sizes
	 *
	 * @var array
	 */
	private $sizes = [
		'w2048h1536' => [
			'width' => 2048,
			'height' => 1536,
		],
		'w1024h768' => [
			'width' => 1024,
			'height' => 768,
		],
		'w640h480' => [
			'width' => 640,
			'height' => 480,
		],
		'w480h320' => [
			'width' => 480,
			'height' => 320,
		],
		'w250h250' => [
			'width' => 250,
			'height' => 250,
		],
		'w128h128' => [
			'width' => 128,
			'height' => 180,
		],
		'w64h64' => [
			'width' => 64,
			'height' => 64,
		],
		'w32h32' => [
			'width' => 32,
			'height' => 32,
		],
	];

	/**
	 * Size
	 *
	 * @var string
	 */
	private $size = 'w2048h1536';

	/**
	 * Loading Thumbnail
	 *
	 * @var boolean
	 */
	private $loading_thumbnail = false;

	/**
	 * Constructor
	 *
	 * @param string $entry Entry.
	 */
	public function __construct( $entry, $width, $height, $format, $image_data = null, $loading_thumbnail = false ) {
		$this->entry                   = $entry;
		$this->width                   = $width;
		$this->height                  = $height;
		$this->format                  = $format;
		$this->image_data              = $image_data;
		$this->loading_thumbnail       = $loading_thumbnail;
		$this->thumbnails_location     = INTEGRATE_DROPBOX_CACHE_DIR . 'thumbnails/';
		$this->thumbnails_location_url = INTEGRATE_DROPBOX_CACHE_DIR_URL . 'thumbnails/';

		$this->size = $this->get_size();
		$this->thumbnail_name = '';
	}

	/**
	 * Get Size
	 *
	 * @return string
	 */
	public function get_size() {
		$size = 'w2048h1536';

		foreach ( $this->sizes as $key => $value ) {
			if ( $this->width <= $value['width'] && $this->height <= $value['height'] ) {
				$size = $key;
				break;
			}
		}

		return $size;
	}
}
