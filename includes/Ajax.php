<?php
/**
 * Class for handling Ajax
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\API;
use ultraDevs\IntegrateDropbox\App\App;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * Manage All Ajax Request
 *
 * This class is for managing Ajax
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Ajax {

	/**
	 * Ajax Actions
	 *
	 * @var array
	 */
	public $ajax_actions = [
		'file_preview' => false,
		'rename'       => false,
		'create_folder' => false,
		'delete' => false,
	];

	/**
	 * Current Path
	 *
	 * @var string
	 */
	public $current_path = '';

	/**
	 * Account ID
	 *
	 * @var string
	 */
	public $account_id = '';

	/**
	 * Constructor
	 */
	public function __construct() {
		foreach ( $this->ajax_actions as $action => $nopriv ) {
			add_action( 'wp_ajax_idb_' . $action, array( $this, 'start_process' ) );
			if ( $nopriv ) {
				add_action( 'wp_ajax_nopriv_idb_' . $action, array( $this, $action ) );
			}
		}
	}

	/**
	 * Start Process
	 *
	 * @return void
	 */
	public function start_process() {
		$action = sanitize_text_field( $_POST['action'] );
		
		// Remove the idb_ prefix.
		$action = str_replace( 'idb_', '', $action );

		// var_dump(  $action );

		if ( ! isset( $this->ajax_actions[ $action ] ) ) {
			wp_send_json_error( array( 'message' => __( 'Invalid Action', 'integrate-dropbox' ) ) );
		}

		$this->current_path = sanitize_text_field( $_POST['path'] );
		$this->account_id = sanitize_text_field( $_POST['account_id'] );

		$nonce = sanitize_text_field( $_POST['nonce'] );
		if ( ! wp_verify_nonce( $nonce, 'idb_ajax_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Nonce verification failed', 'integrate-dropbox' ) ) );
		}

		// if ( empty( $this->current_path ) ) {
		// 	wp_send_json_error( array( 'message' => __( 'Path is required', 'integrate-dropbox' ) ) );
		// }

		if ( empty( $this->account_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Account ID is required', 'integrate-dropbox' ) ) );
		}

		$active_account = Account::get_active_account();

		if ( $this->account_id !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'integrate-dropbox' ),
				),
				400
			);
		}

		$this->$action();
	}

	/**
	 * File Preview
	 *
	 * @since 1.0.0
	 */
	public function file_preview() {

		$file    = sanitize_text_field( $_POST['file'] );

		if ( empty( $file ) ) {
			wp_send_json_error( array( 'message' => __( 'File is required', 'integrate-dropbox' ) ) );
		}


		$file = Client::get_instance( $this->account_id )->file_preview( $file );

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

	/**
	 * Rename File
	 *
	 * @since 1.0.0
	 */
	public function rename() {

		$old_name    = sanitize_text_field( $_POST['old_name'] );
		$new_name   = sanitize_text_field( $_POST['new_name'] );

		if ( empty( $old_name ) ) {
			wp_send_json_error( array( 'message' => __( 'Old Name is required', 'integrate-dropbox' ) ) );
		}


		if ( empty( $new_name ) ) {
			wp_send_json_error( array( 'message' => __( 'New name is required', 'integrate-dropbox' ) ) );
		}

		if ( $old_name === $new_name ) {
			wp_send_json_error( array( 'message' => __( 'Old name and new name can not be same', 'integrate-dropbox' ) ) );
		}

		$rename = API::get_instance( $this->account_id )->rename( $old_name, $new_name );

		if ( ! $rename) {
			wp_send_json_error( array(
				'message' => __( 'File/Folder not renamed', 'integrate-dropbox' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Renamed Successfully', 'integrate-dropbox' ),
			'data'    => $rename,
		]);
	}

	/**
	 * Create Folder
	 *
	 * @since 1.0.0
	 */
	public function create_folder() {

		$path       = sanitize_text_field( $_POST['path'] );
		$name       = sanitize_text_field( $_POST['name'] );


		if ( empty( $name ) ) {
			wp_send_json_error( array( 'message' => __( 'Folder name is required', 'integrate-dropbox' ) ) );
		}

		$folder = API::get_instance( $this->account_id )->create_folder( $name, $path );

		if ( ! $folder) {
			wp_send_json_error( array(
				'message' => __( 'Failed to create Folder!', 'integrate-dropbox' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Folder created successfully!', 'integrate-dropbox' ),
			'data'    => $folder,
		]);
	}


	/**
	 * Delete File/Folder
	 *
	 * @since 1.0.0
	 */
	public function delete() {
		$path 	 = sanitize_text_field( $_POST['path'] );

		if ( empty( $path ) ) {
			wp_send_json_error( array( 'message' => __( 'Path is required', 'integrate-dropbox' ) ) );
		}


		$delete = API::get_instance( $this->account_id )->delete( $path );

		if ( ! $delete) {
			wp_send_json_error( array(
				'message' => __( 'Failed to delete!', 'integrate-dropbox' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Deleted successfully!', 'integrate-dropbox' ),
			'data'    => $delete,
		]);
	}
}
