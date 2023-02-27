<?php
/**
 * REST API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\Admin\Dashboard;
use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\Helper;

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
		register_rest_route(
			$this->namespace,
			'/switch-account',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'switch_account' ),
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

		if ( ! $account_id ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account ID is required.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$accounts = Account::get_accounts();

		if ( ! isset( $accounts[ $account_id ] ) ) {
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
}