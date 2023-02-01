<?php
/**
 * App Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

/**
 * App Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class App {

	/**
	 * DropBox API Client.
	 *
	 * @var object
	 */
	public $client;

	/**
	 * DropBox API Service.
	 *
	 * @var object
	 */
	public $service;

	/**
	 * Constructor
	 */
	public function __construct() {
		echo 'Hola From App';
	}

}
