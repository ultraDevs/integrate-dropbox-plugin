<?php
/**
 * Class for handling Ajax
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */

namespace ultraDevs\DropboxIntegrator;

use ultraDevs\DropboxIntegrator\App\Account;
use ultraDevs\DropboxIntegrator\App\API;
use ultraDevs\DropboxIntegrator\App\App;
use ultraDevs\DropboxIntegrator\App\Client;
use ultraDevs\DropboxIntegrator\Helper;

/**
 * Manage All Ajax Request
 *
 * This class is for managing Ajax
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */
class Ajax {

	/**
	 * Ajax Actions
	 *
	 * @var array
	 */
	public $ajax_actions = [
		'file_preview' => true,
		'thumbnail'    => false,
		'rename'       => false,
		'create_folder' => false,
		'delete' => false,
		'upload' => false,
		'remove_account' => false,
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
		$action = sanitize_text_field( $_REQUEST['action'] );
		
		// Remove the idb_ prefix.
		$action = str_replace( 'idb_', '', $action );

		// var_dump(  $action );

		if ( ! isset( $this->ajax_actions[ $action ] ) ) {
			wp_send_json_error( array( 'message' => __( 'Invalid Action', 'easy-dropbox-integrator' ) ) );
		}

		$nonce = sanitize_text_field( $_REQUEST['nonce'] );
		if ( ! wp_verify_nonce( $nonce, 'idb_ajax_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Nonce verification failed', 'easy-dropbox-integrator' ) ) );
		}

		// $this->current_path = sanitize_text_field( $_REQUEST['path'] );
		$this->account_id = sanitize_text_field( $_REQUEST['account_id'] );

		// if ( empty( $this->current_path ) ) {
		// 	wp_send_json_error( array( 'message' => __( 'Path is required', 'easy-dropbox-integrator' ) ) );
		// }

		if ( empty( $this->account_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Account ID is required', 'easy-dropbox-integrator' ) ) );
		}

		$active_account = Account::get_active_account();

		if ( $this->account_id !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'easy-dropbox-integrator' ),
				),
				400
			);
		}

		$this->$action();
	}

	/**
	 * Remove Account
	 *
	 * @since 1.0.0
	 */
	public function remove_account() {

		$remove = Account::delete_account( $this->account_id );

		if ( ! $remove ) {
			wp_send_json_error( array(
				'message' => __( 'Failed to remove account!', 'easy-dropbox-integrator' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Account removed successfully!', 'easy-dropbox-integrator' ),
			'data'    => $remove,
		]);
	}

	/**
	 * File Preview
	 *
	 * @since 1.0.0
	 */
	public function file_preview() {

		$file    = sanitize_text_field( $_REQUEST['file'] );

		if ( empty( $file ) ) {
			wp_send_json_error( array( 'message' => __( 'File is required', 'easy-dropbox-integrator' ) ) );
		}

		$file = Client::get_instance( $this->account_id )->file_preview( $file );

		if ( !$file ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'File not found.', 'easy-dropbox-integrator' ),
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
			wp_send_json_error( array( 'message' => __( 'Old Name is required', 'easy-dropbox-integrator' ) ) );
		}


		if ( empty( $new_name ) ) {
			wp_send_json_error( array( 'message' => __( 'New name is required', 'easy-dropbox-integrator' ) ) );
		}

		if ( $old_name === $new_name ) {
			wp_send_json_error( array( 'message' => __( 'Old name and new name can not be same', 'easy-dropbox-integrator' ) ) );
		}

		$rename = API::get_instance( $this->account_id )->rename( $old_name, $new_name );

		if ( ! $rename) {
			wp_send_json_error( array(
				'message' => __( 'File/Folder not renamed', 'easy-dropbox-integrator' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Renamed Successfully', 'easy-dropbox-integrator' ),
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
			wp_send_json_error( array( 'message' => __( 'Folder name is required', 'easy-dropbox-integrator' ) ) );
		}

		$folder = API::get_instance( $this->account_id )->create_folder( $name, $path );

		if ( ! $folder) {
			wp_send_json_error( array(
				'message' => __( 'Failed to create Folder!', 'easy-dropbox-integrator' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Folder created successfully!', 'easy-dropbox-integrator' ),
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
			wp_send_json_error( array( 'message' => __( 'Path is required', 'easy-dropbox-integrator' ) ) );
		}


		$delete = API::get_instance( $this->account_id )->delete( $path );

		if ( ! $delete) {
			wp_send_json_error( array(
				'message' => __( 'Failed to delete!', 'easy-dropbox-integrator' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Deleted successfully!', 'easy-dropbox-integrator' ),
			'data'    => $delete,
		]);
	}

	/**
	 * Upload File
	 *
	 * @since 1.0.0
	 */
	public function upload() {
		$path 	 = sanitize_text_field( $_POST['path'] );
		$file = $_FILES['file'];

		$file_name = $file['name'];

		$path = Helper::clean_path( $path . '/' . $file_name );


		$upload = API::get_instance( $this->account_id )->upload_file( $file['tmp_name'], $path );

		if ( ! $upload) {
			wp_send_json_error( array(
				'message' => __( 'Failed to upload!', 'easy-dropbox-integrator' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Uploaded successfully!', 'easy-dropbox-integrator' ),
			'data'    => $upload,
		]);
	}

	/**
	 * Thumbnail
	 *
	 * @since 1.0.0
	 */
	public function thumbnail() {
		$file    = sanitize_text_field( $_POST['file'] );

		if ( empty( $file ) ) {
			wp_send_json_error( array( 'message' => __( 'File is required', 'easy-dropbox-integrator' ) ) );
		}

		$thumbnail = Client::get_instance( $this->account_id )->get_thumbnail( $file );

		if ( !$thumbnail ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Thumbnail not found.', 'easy-dropbox-integrator' ),
				),
				400
			);
		}

		return $thumbnail;
	}
}
