<?php
/**
 * Class for handling Ajax
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\App\App;

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
		'rename' 	   => false,
	];

	/**
	 * Current Path
	 *
	 * @var string
	 */
	public $current_path = '';

	/**
	 * Current Account ID
	 *
	 * @var string
	 */
	public $current_account_id = '';

	/**
	 * Constructor
	 */
	public function __construct() {
		foreach ( $this->ajax_actions as $action => $nopriv ) {
			add_action( 'wp_ajax_' . $action, array( $this, $action ) );
			if ( $nopriv ) {
				add_action( 'wp_ajax_nopriv_' . $action, array( $this, $action ) );
			}
		}
	}

	/**
	 * File Preview
	 *
	 * @since 1.0.0
	 */
	public function file_preview() {
		$nonce = sanitize_text_field( $_POST['nonce'] );
		if ( ! wp_verify_nonce( $nonce, 'idb_ajax_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Nonce verification failed', 'integrate-dropbox' ) ) );
		}

		$file_id    = sanitize_text_field( $_POST['file_id'] );
		$account_id = sanitize_text_field( $_POST['account_id'] );

		if ( empty( $file_id ) ) {
			wp_send_json_error( array( 'message' => __( 'File ID is required', 'integrate-dropbox' ) ) );
		}

		if ( empty( $account_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Account ID is required', 'integrate-dropbox' ) ) );
		}

		$app  = App::get_instance( $account_id );
		$file = $app->get_file_by_id( $file_id );
		if ( empty( $file ) ) {
			wp_send_json_error( array( 'message' => __( 'File not found', 'integrate-dropbox' ) ) );
		}

		$preview = $app->get_file_preview( $file_id );
	}

	/**
	 * Rename File
	 *
	 * @since 1.0.0
	 */
	public function rename() {
		$nonce = sanitize_text_field( $_POST['nonce'] );
		if ( ! wp_verify_nonce( $nonce, 'idb_ajax_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Nonce verification failed', 'integrate-dropbox' ) ) );
		}

		$file_id    = sanitize_text_field( $_POST['file_id'] );
		$account_id = sanitize_text_field( $_POST['account_id'] );
		$new_name   = sanitize_text_field( $_POST['new_name'] );

		if ( empty( $file_id ) ) {
			wp_send_json_error( array( 'message' => __( 'File ID is required', 'integrate-dropbox' ) ) );
		}

		if ( empty( $account_id ) ) {
			wp_send_json_error( array( 'message' => __( 'Account ID is required', 'integrate-dropbox' ) ) );
		}

		if ( empty( $new_name ) ) {
			wp_send_json_error( array( 'message' => __( 'New name is required', 'integrate-dropbox' ) ) );
		}

		$app = App::get_instance( $account_id );
		$rename = $app->rename_file( $file_id, $new_name );

		wp_send_json_success( $rename );
	}
}
