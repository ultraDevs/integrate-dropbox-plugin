<?php
/**
 * REST API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Client;

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
			// 'files'         => Client::get_instance()->get_folder( $path ),
			// $items[] = array(
			// 	'id'       => $entry->getId(),
			// 	'name'     => $entry->getName(),
			// 	'path'     => $entry->getPathLower(),
			// 	'path_raw' => $entry->getPathDisplay(),
			// 	'thumbnail' => $thumbnail_loc,
			// 	'is_dir'   => $is_dir,
			// 	'is_file'  => ! $is_dir,
			// 	'can_preview' => $is_file ? Helper::can_generate_thumbnail( $path_info['extension'] ) : false,
			// 	'permission' => array(
			// 		'canDownload' => true,
			// 		'canDelete' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			// 		'canRename' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			// 		'canMove' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			// 		'canAdd' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			// 		'hasAccess' => empty( $sharing_info ) ? true : ! $sharing_info->hasAccess(),
			// 		'canShare' => true,
			// 	),
			// 	'ext'      => $is_file ? $path_info['extension'] : '',
			// 	'size'     => $is_file ? $entry->getSize() : '',
			// 	'created'  => $is_file ? $entry->getServerModified() : '',
			// 	'modified' => $is_file ? $entry->getServerModified() : '',
			// );
			'files' => [],
			'previous_path' => Helper::get_previous_path( $path ),
		);

		wp_send_json_success( $data );

	}
}
