<?php
/**
 * REST API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\API;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\App\FileBrowser;

/**
 * Manage REST API Requests
 *
 * This class is for managing REST API
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class REST_API {

	/**
	 * Namespace
	 *
	 * @var string
	 */
	private $namespace = 'idb/v1';

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_api' ) );
	}

	/**
	 * Register API
	 *
	 * @return void
	 */
	public function register_api() {

		// Switch Account.
		register_rest_route(
			$this->namespace,
			'/switch-account',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'switch_account' ),
				'permission_callback' => '__return_true',
			)
		);

		// Get Files.
		register_rest_route(
			$this->namespace,
			'/get-files',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'get_files' ),
				'permission_callback' => '__return_true',
			)
		);

		// Create Folder.
		register_rest_route(
			$this->namespace,
			'/create-folder',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'create_folder' ),
				'permission_callback' => '__return_true',
			)
		);

		// Rename.
		register_rest_route(
			$this->namespace,
			'/rename',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'rename' ),
				'permission_callback' => '__return_true',
			)
		);

		// File Preview.
		register_rest_route(
			$this->namespace,
			'/file-preview',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'file_preview' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Switch Account
	 *
	 * @param \WP_REST_Request $request Request.
	 *
	 * @return \WP_REST_Response
	 */
	public function switch_account( $request ) {
		$account_id = $request->get_param( 'id' );

		if ( !$account_id ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account ID is required.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$accounts = Account::get_accounts();

		if ( !isset( $accounts[$account_id] ) ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account not found.', 'integrate-dropbox' ),
				),
				400
			);
		}

		Account::set_active_account( $account_id );

		return new \WP_REST_Response(
			array(
				'status'  => 'success',
				'message' => __( 'Account switched successfully.', 'integrate-dropbox' ),
			),
			200
		);
	}

	/**
	 * Get Files
	 *
	 * @param \WP_REST_Request $request Request.
	 *
	 * @return \WP_REST_Response
	 */
	public function get_files( $request ) {
		$accountId = $request->get_param( 'accountId' );
		$path = $request->get_param( 'path' );

		$filter = $request->get_param( 'filter' );

		$order_by = $filter['by'];
		$direction = $filter['direction'];

		if ( !$accountId ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account ID is required.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$account = Account::get_accounts( $accountId );

		if ( !$account ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account not found.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$active_account = Account::get_active_account();

		if ( $accountId !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$data = array(
			'breadcrumbs'   => Helper::get_breadcrumbs( $path ),
			'files'         => FileBrowser::get_instance()->get_file_list( $path, true, false, false, [ $order_by, $direction ] ),
			'previous_path' => Helper::get_previous_path( $path ),
		);

		wp_send_json_success( $data );

	}

	/**
	 * Create Folder
	 *
	 * @param \WP_REST_Request $request Request.
	 *
	 * @return \WP_REST_Response
	 */
	public function create_folder( $request ) {
		$accountId = $request->get_param( 'accountId' );
		$path = $request->get_param( 'path' );
		$folderName = $request->get_param( 'folderName' );

		if ( !$accountId ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account ID is required.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$account = Account::get_accounts( $accountId );

		if ( !$account ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account not found.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$active_account = Account::get_active_account();

		if ( $accountId !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$folder = Client::get_instance( $accountId )->create_folder( $path, $folderName );

		if ( !$folder ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Folder not created.', 'integrate-dropbox' ),
				),
				400
			);
		}

		wp_send_json_success( $folder );
	}

	/**
	 * Rename
	 *
	 * @param \WP_REST_Request $request Request.
	 *
	 * @return \WP_REST_Response
	 */
	public function rename( $request ) {
		$accountId = $request->get_param( 'accountId' );
		$target = $request->get_param( 'target' );
		$name = $request->get_param( 'name' );

		if ( !$accountId ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account ID is required.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$account = Account::get_accounts( $accountId );

		if ( !$account ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account not found.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$active_account = Account::get_active_account();

		if ( $accountId !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$rename = API::get_instance( $accountId )->rename( $target, $name );

		if ( !$rename ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'File/Folder not renamed.', 'integrate-dropbox' ),
					'reason'  => $rename,
				),
				400
			);
		}

		wp_send_json_success( $rename );
	}

	/**
	 * File Preview
	 *
	 * @param \WP_REST_Request $request Request.
	 *
	 * @return \WP_REST_Response
	 */
	public function file_preview( $request ) {
		$accountId = $request->get_param( 'accountId' );
		$path = $request->get_param( 'path' );

		if ( !$accountId ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account ID is required.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$account = Account::get_accounts( $accountId );

		if ( !$account ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account not found.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$active_account = Account::get_active_account();

		if ( $accountId !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$file = Client::get_instance( $accountId )->file_preview( $path );

		if ( !$file ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'File not found.', 'integrate-dropbox' ),
				),
				400
			);
		}

		wp_send_json_success( $file );
	}
}
