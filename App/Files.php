<?php
/**
 * Files Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

/**
 * Files Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Files {

	/**
	 * Table Name
	 *
	 * @var string
	 */
	private $table;

	/**
	 * Instance - Singleton Pattern
	 *
	 * @var Files
	 */
	protected static $instance = null;

	/**
	 * Account ID.
	 *
	 * @var string
	 */
	private $account_id = null;

	/**
	 * Constructor
	 */
	public function __construct( $account_id = null ) {
		global $wpdb;

		$this->table = $wpdb->prefix . 'ud_idb_files';

		if ( empty( $account_id ) ) {
			$active_account = Account::get_active_account();
			if ( ! empty( $active_account ) ) {
				$account_id = $active_account['id'];
			}
		}

		$this->account_id = $account_id;
	}

	/**
	 * Get Instance
	 *
	 * @return Files
	 */
	public static function get_instance( $account_id = null ) {
		if ( null === self::$instance ) {
			self::$instance = new self( $account_id );
		}

		return self::$instance;
	}

	/**
	 * Get Table Name
	 *
	 * @return string
	 */
	public function get_table() {
		return $this->table;
	}

	/**
	 * Get Files By Parent ID
	 *
	 * @param string $parent_id Parent ID.
	 */
	public function get_files( $parent_id ) {
		global $wpdb;

		$result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$this->get_table()} WHERE parent_id = %s AND account_id = %s", $parent_id, $this->account_id ), ARRAY_A );

		$files = array();

		if ( ! empty( $result ) ) {
			foreach ( $result as $file ) {
				$files[] = unserialize( $file['data'] );
			}
		}

		return $files;
	}

	/**
	 * Set Files
	 *
	 * @param array $files Files.
	 * @param string $parent_id Parent ID.
	 */
	public function set_files( $file, $parent_id ) {
		global $wpdb;

		$table_name = $this->get_table();
		$name       = $file['name'];
		$mimetype   = $file['mime_type'];
		$data       = serialize( $file );

		return $wpdb->query(
			$wpdb->prepare(
				"INSERT INTO $table_name
				(parent_id, account_id, name, mimetype, data)
				VALUES (%d, %d, %s, %s, %s)",
				$parent_id,
				$this->account_id,
				$name,
				$mimetype,
				$data
			)
		);
	}

	/**
	 * Update Files
	 *
	 * @param array $data Data.
	 * @param array $where Where.
	 * @param array $format Format.
	 * @param array $where_format Where Format.
	 */
	public function update_files( $data, $where, $format = [], $where_format = [] ) {
		global $wpdb;

		return $wpdb->update( $this->get_table(), $data, $where, $format, $where_format );
	}

	/**
	 * Delete Files By Parent ID
	 *
	 * @param string $parent_id Parent ID.
	 */
	public function delete_files( $parent_id ) {
		global $wpdb;

		return $wpdb->delete( $this->get_table(), array( 'parent_id' => $parent_id ), array( '%s' ) );
	}

	/**
	 * Delete Files By Account ID
	 *
	 * @param string $account_id Account ID.
	 */
	public function delete_files_by_account() {
		global $wpdb;

		return $wpdb->delete( $this->get_table(), array( 'account_id' => $this->account_id ), array( '%s' ) );
	}

	/**
	 * Delete.
	 *
	 * @param array $where Where.
	 * @param array $where_format Where Format.
	 */
	public function delete( $where, $where_format = array()) {
		global $wpdb;

		return $wpdb->delete( $this->get_table(), $where, $where_format );
	}
}
