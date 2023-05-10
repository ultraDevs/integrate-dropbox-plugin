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
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_ajax_file_preview', array( $this, 'file_preview' ) );
		add_action( 'wp_ajax_nopriv_file_preview', array( $this, 'file_preview' ) );
	}

	/**
	 * File Preview
	 *
	 * @since 1.0.0
	 */
	public function file_preview() {
		$nonce = sanitize_text_field( $_POST['nonce'] );
		if ( ! wp_verify_nonce( $nonce, 'file_preview' ) ) {
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
}
