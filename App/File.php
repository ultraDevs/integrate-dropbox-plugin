<?php
/**
 * File Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Traits\Singleton;
use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\App\FileAbstract;

/**
 * File Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class File extends FileAbstract {
	use Singleton;

	/**
	 * DropBox API Client.
	 *
	 * @var object
	 */
	protected $client = null;

	protected function __construct() {
		$this->client = Client::get_instance(
			Account::get_active_account() ? Account::get_active_account()['id'] : null
		);
	}

	public function test() {
		ud_vd( $this->client );
	}
}
