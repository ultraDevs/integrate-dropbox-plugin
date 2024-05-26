<?php
/**
 * Class for handling Ajax
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */

namespace ultraDevs\EasyDropBoxIntegration;

use ultraDevs\EasyDropBoxIntegration\App\Account;
use ultraDevs\EasyDropBoxIntegration\App\API;
use ultraDevs\EasyDropBoxIntegration\App\App;
use ultraDevs\EasyDropBoxIntegration\App\Client;
use ultraDevs\EasyDropBoxIntegration\App\Shortcode_Builder;
use ultraDevs\EasyDropBoxIntegration\Helper;

/**
 * Manage All Ajax Request
 *
 * This class is for managing Ajax
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */
class Ajax {

	/**
	 * Ajax Actions
	 *
	 * @var array
	 */
	public $ajax_actions = [
		'file_preview'   => true,
		'thumbnail'      => false,
		'rename'         => false,
		'create_folder'  => false,
		'delete'         => false,
		'upload'         => false,
		'remove_account' => false,

		  // Shortcodes.
		'get_shortcodes'      => false,
		'get_shortcode'       => false,
		'create_shortcode'    => false,
		'update_shortcode'    => false,
		'delete_shortcode'    => false,
		'duplicate_shortcode' => false,
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
			add_action( 'wp_ajax_edbi_' . $action, array( $this, 'start_process' ) );
			if ( $nopriv ) {
				add_action( 'wp_ajax_nopriv_edbi_' . $action, array( $this, 'start_process' ) );
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
		
		// Remove the edbi_ prefix.
		$action = str_replace( 'edbi_', '', $action );

		// var_dump(  $action );

		if ( ! isset( $this->ajax_actions[ $action ] ) ) {
			wp_send_json_error( array( 'message' => __( 'Invalid Action', 'easy-dropbox-integration' ) ) );
		}

		$nonce = sanitize_text_field( $_REQUEST['nonce'] );
		if ( ! wp_verify_nonce( $nonce, 'edbi_ajax_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Nonce verification failed', 'easy-dropbox-integration' ) ) );
		}

		// Check if user has permission.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => __( 'You do not have permission to perform this action', 'easy-dropbox-integration' ) ) );
		}

		// Ignore shortcode ajax request.
		if ( strpos( $action, 'shortcode' ) !== false ) {
			$this->$action();
			return;
		}

		// $this->current_path = sanitize_text_field( $_REQUEST['path'] );
		$this->account_id = sanitize_text_field( $_REQUEST['account_id'] );

		// if ( empty( $this->current_path ) ) {
		// 	wp_send_json_error( array( 'message' => __( 'Path is required', 'easy-dropbox-integration' ) ) );
		// }

		if ( empty( $this->account_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Account ID is required', 'easy-dropbox-integration' ) ) );
		}

		$active_account = Account::get_active_account();

		if ( $this->account_id !== $active_account['id'] ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Account is not active.', 'easy-dropbox-integration' ),
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
				'message' => __( 'Failed to remove account!', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Account removed successfully!', 'easy-dropbox-integration' ),
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
			wp_send_json_error( array( 'message' => __( 'File is required', 'easy-dropbox-integration' ) ) );
		}

		$file = Client::get_instance( $this->account_id )->file_preview( $file );

		if ( !$file ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'File not found.', 'easy-dropbox-integration' ),
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
			wp_send_json_error( array( 'message' => __( 'Old Name is required', 'easy-dropbox-integration' ) ) );
		}


		if ( empty( $new_name ) ) {
			wp_send_json_error( array( 'message' => __( 'New name is required', 'easy-dropbox-integration' ) ) );
		}

		if ( $old_name === $new_name ) {
			wp_send_json_error( array( 'message' => __( 'Old name and new name can not be same', 'easy-dropbox-integration' ) ) );
		}

		$rename = API::get_instance( $this->account_id )->rename( $old_name, $new_name );

		if ( ! $rename) {
			wp_send_json_error( array(
				'message' => __( 'File/Folder not renamed', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Renamed Successfully', 'easy-dropbox-integration' ),
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
			wp_send_json_error( array( 'message' => __( 'Folder name is required', 'easy-dropbox-integration' ) ) );
		}

		$folder = API::get_instance( $this->account_id )->create_folder( $name, $path );

		if ( ! $folder) {
			wp_send_json_error( array(
				'message' => __( 'Failed to create Folder!', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Folder created successfully!', 'easy-dropbox-integration' ),
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
			wp_send_json_error( array( 'message' => __( 'Path is required', 'easy-dropbox-integration' ) ) );
		}


		$delete = API::get_instance( $this->account_id )->delete( $path );

		if ( ! $delete) {
			wp_send_json_error( array(
				'message' => __( 'Failed to delete!', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Deleted successfully!', 'easy-dropbox-integration' ),
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
		$file = edbi_sanitize_text_or_array_field( $_FILES['file'] );

		$file_name = $file['name'];

		$path = Helper::clean_path( $path . '/' . $file_name );


		$upload = API::get_instance( $this->account_id )->upload_file( $file['tmp_name'], $path );

		if ( ! $upload) {
			wp_send_json_error( array(
				'message' => __( 'Failed to upload!', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Uploaded successfully!', 'easy-dropbox-integration' ),
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
			wp_send_json_error( array( 'message' => __( 'File is required', 'easy-dropbox-integration' ) ) );
		}

		$thumbnail = Client::get_instance( $this->account_id )->get_thumbnail( $file );

		if ( !$thumbnail ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Thumbnail not found.', 'easy-dropbox-integration' ),
				),
				400
			);
		}

		return $thumbnail;
	}


	/**
	 * Get Shortcodes
	 *
	 * @since 1.0.0
	 */
	public function get_shortcodes() {
		$shortcodes = Shortcode_Builder::get_instance()->get_shortcodes();
		foreach( $shortcodes as $i => $shortcode ) {
			$shortcodes[$i]['config'] = wp_json_encode( unserialize( $shortcode['config'] ) );
		}

		wp_send_json_success( $shortcodes );
	}

	/**
	 * Get Shortcode
	 *
	 * @since 1.0.0
	 */
	public function get_shortcode() {
		$id = sanitize_text_field( $_POST['id'] );

		if ( empty( $id ) ) {
			wp_send_json_error( array( 'message' => __( 'ID is required', 'easy-dropbox-integration' ) ) );
		}

		$shortcode = Shortcode_Builder::get_instance()->get_shortcode( $id );
		$shortcode['config'] = wp_json_encode( unserialize( $shortcode['config'] ) );

		if ( !$shortcode ) {
			return new \WP_REST_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Shortcode not found.', 'easy-dropbox-integration' ),
				),
				400
			);
		}

		wp_send_json_success( $shortcode );
	}

	/**
	 * Create Shortcode
	 *
	 * @since 1.0.0
	 */
	public function create_shortcode() {
		$title = sanitize_text_field( $_POST['title'] );
		$config = sanitize_text_field( $_POST['config'] );

		if ( empty( $title ) ) {
			wp_send_json_error( array( 'message' => __( 'Title is required', 'easy-dropbox-integration' ) ) );
		}

		if ( empty( $config ) ) {
			wp_send_json_error( array( 'message' => __( 'Shortcode Config is required', 'easy-dropbox-integration' ) ) );
		}

		$base_64 = base64_decode( $config );
		$decoded_config = json_decode( $base_64, true );

		$create = Shortcode_Builder::get_instance()->add_shortcode( [
			'title'  => $title,
			'config' => serialize( $decoded_config ),
			'created_at' => current_time( 'mysql' ),
			'updated_at' => current_time( 'mysql' ),
		] );

		if ( ! $create) {
			wp_send_json_error( array(
				'message' => __( 'Failed to create Shortcode!', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Shortcode created successfully!', 'easy-dropbox-integration' ),
			'data'    => $create,
		]);
	}

	/**
	 * Update Shortcode
	 *
	 * @since 1.0.0
	 */
	public function update_shortcode() {
		$id = sanitize_text_field( $_POST['id'] );
		$title = sanitize_text_field( $_POST['title'] );
		$config = sanitize_text_field( $_POST['config'] );

		if ( empty( $id ) ) {
			wp_send_json_error( array( 'message' => __( 'ID is required', 'easy-dropbox-integration' ) ) );
		}

		if ( empty( $title ) ) {
			wp_send_json_error( array( 'message' => __( 'Title is required', 'easy-dropbox-integration' ) ) );
		}

		if ( empty( $config ) ) {
			wp_send_json_error( array( 'message' => __( 'Shortcode Config is required', 'easy-dropbox-integration' ) ) );
		}

		$base_64 = base64_decode( $config );
		$decoded_config = json_decode( $base_64, true );

		$update = Shortcode_Builder::get_instance()->update_shortcode( $id, [
			'title'  => $title,
			'config' => serialize( $decoded_config ),
			'updated_at' => current_time( 'mysql' ),
		]);

		if ( $update ) {
			return wp_send_json_success( [
				'message' => __( 'Shortcode updated successfully!', 'easy-dropbox-integration' ),
				'data'    => $update,
			]);
			
		}

		wp_send_json_error( array(
			'message' => __( 'Failed to update Shortcode!', 'easy-dropbox-integration' ),
		) );

		
	}

	/**
	 * Delete Shortcode
	 *
	 * @since 1.0.0
	 */
	public function delete_shortcode() {
		$id = sanitize_text_field( $_POST['id'] );

		if ( empty( $id ) ) {
			wp_send_json_error( array( 'message' => __( 'ID is required', 'easy-dropbox-integration' ) ) );
		}

		$delete = Shortcode_Builder::get_instance()->delete_shortcode( $id );

		wp_send_json_success( [
			'message' => __( 'Shortcode deleted successfully!', 'easy-dropbox-integration' ),
			'data'    => $delete,
		]);
		
	}

	/**
	 * Duplicate Shortcode
	 *
	 * @since 1.0.0
	 */
	public function duplicate_shortcode() {
		$id = sanitize_text_field( $_POST['id'] );

		if ( empty( $id ) ) {
			wp_send_json_error( array( 'message' => __( 'ID is required', 'easy-dropbox-integration' ) ) );
		}

		$duplicate = Shortcode_Builder::get_instance()->duplicate_shortcode( $id );

		if ( ! $duplicate) {
			wp_send_json_error( array(
				'message' => __( 'Failed to duplicate Shortcode!', 'easy-dropbox-integration' ),
			) );
		}

		wp_send_json_success( [
			'message' => __( 'Shortcode duplicated successfully!', 'easy-dropbox-integration' ),
			'data'    => $duplicate,
		]);
	}

}
