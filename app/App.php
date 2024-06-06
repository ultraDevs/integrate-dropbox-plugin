<?php
/**
 * App Class
 *
 * @package IDBWP
 * @since 1.0.0
 */

namespace ultraDevs\IDBWP\App;

use Kunnu\Dropbox\Models\FileMetadata;
use Kunnu\Dropbox\Models\FolderMetadata;
use ultraDevs\IDBWP\App\Client;
use ultraDevs\IDBWP\Helper;
use ultraDevs\IDBWP\App\Files;
use ultraDevs\IDBWP\App\Traits\Singleton;

/**
 * App Class
 *
 * @package IDBWP
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

		// add_filter( 'idbwp_root_id', array( 'ultraDevs\IDBWP\App\Account', 'get_root_id' ), 10, 1 );
	}

	/**
	 * Process Authorization
	 *
	 * @return void
	 */
	public function process_authorization() {

		$nonce = isset( $_GET['nonce'] ) ? sanitize_text_field( wp_unslash( $_GET['nonce'] ) ) : null;

		if ( ! wp_verify_nonce( $nonce, 'idbwp_authorization' ) ) {
			error_log( IDBWP_NAME . ' - Authorization nonce verification failed.' );
			return false;
		}

		$redirect = admin_url( 'admin.php?page=integrate-dropbox-wp' );

		if ( ! empty( $_REQUEST['state'] ) ) {
			$state     = strtr( sanitize_text_field( $_REQUEST['state'] ), '-_~', '+/=' );
			$url_state = null;
			$split_pos = strpos( $state, '|' );

			if ( false !== $split_pos ) {
				$url_state = substr( $state, $split_pos + 1 );
			}

			$redirect_to = base64_decode( $url_state );

			if ( false === strpos( $redirect_to, 'integrate-dropbox-wp' ) ) {
				return false;
			}
		} else {
			add_action(
				'admin_print_scripts',
				function() use ( $redirect ) {
					echo "<script type='text/javascript'>\n";
					echo "window.opener.parent.location.href='" . esc_url( $redirect ) . "';\n";
					echo "window.close();\n";
					echo '</script>';
				}
			);

			echo '<script type="text/javascript">console.log("hola 1");</script>';
		}

		// @ TODO -

		if ( isset( $_REQUEST['code'] ) ) {
			$client = new Client();
			$client->create_access_token();
		}

		add_action(
			'admin_print_scripts',
			function() use ( $redirect ) {
				echo "<script type='text/javascript'>\n";
				echo "window.opener.parent.location.href='" . esc_url( $redirect ) . "';\n";
				echo "window.close();\n";
				echo '</script>';
			}
		);

		add_action(
			'admin_print_scripts',
			function() {
				echo '<script type="text/javascript">console.log("hola 2");</script>';
			}
		);

		if ( ! did_action( 'admin_print_scripts' ) ) {
			do_action( 'admin_print_scripts' );
		}


		exit();
	}
}
