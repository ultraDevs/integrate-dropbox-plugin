<?php
/**
 * Files Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

/**
 * Files Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Files {

	/**
	 * Folder
	 *
	 * @var string
	 */
	private $folder;

	/**
	 * Constructor
	 */
	public function __construct() {
		
	}

	public static function get_files() {
		$this->folder = Client::get_instance()->get_client();



	}

}
