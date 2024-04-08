<?php
/**
 * App Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

if ( ! session_id() ) {
	session_start();
}

use Kunnu\Dropbox\Models\FileMetadata;
use Kunnu\Dropbox\Models\FolderMetadata;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\Helper;
use ultraDevs\IntegrateDropbox\App\Files;
use ultraDevs\IntegrateDropbox\App\Traits\Singleton;

/**
 * App Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class App {

	use Singleton;

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
	 * DropBox API Account ID.
	 *
	 * @var string
	 */
	public $account_id = null;

	/**
	 * Constructor
	 *
	 * @param string $account_id Account ID.
	 */
	public function __construct( $account_id = null ) {
		if ( empty( $account_id ) && ! empty( Account::get_active_account( 'id' ) ) ) {
			$account_id = Account::get_active_account( 'id' );
		}

		$this->account_id = $account_id;

		// add_filter( 'idb_root_id', array( 'ultraDevs\IntegrateDropbox\App\Account', 'get_root_id' ), 10, 1 );
	}

	/**
	 * Process Authorization
	 *
	 * @return void
	 */
	public function process_authorization() {
		$redirect = admin_url( 'admin.php?page=integrate-dropbox' );

		if ( ! empty( $_REQUEST['state'] ) ) {
			$state     = strtr( $_REQUEST['state'], '-_~', '+/=' );
			$url_state = null;
			$split_pos = strpos( $state, '|' );

			if ( false !== $split_pos ) {
				$url_state = substr( $state, $split_pos + 1 );
			}

			$redirect_to = base64_decode( $url_state );

			if ( false === strpos( $redirect_to, 'integrate-dropbox' ) ) {
				return false;
			}
		} else {
			echo '<script type="text/javascript">window.opener.parent.location.href="' . $redirect . '"; window.close();</script>';
		}

		// @ TODO -

		if ( isset( $_REQUEST['code'] ) ) {
			$client = new Client();
			$client->create_access_token();
		}

		echo '<script type="text/javascript">window.opener.parent.location.href="' . $redirect . '"; window.close();</script>';

		exit();
	}
}
