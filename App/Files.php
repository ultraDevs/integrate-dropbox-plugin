<?php
/**
 * Files Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Traits\Singleton;

/**
 * Files Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Files {

	use Singleton;

	/**
	 * Table Name
	 *
	 * @var string
	 */
	private $table;

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

		$this->table = $wpdb->prefix . 'idb_files';

		if ( empty( $account_id ) ) {
			$active_account = Account::get_active_account();
			if ( ! empty( $active_account ) ) {
				$account_id = $active_account['id'];
			}
		}

		$this->account_id = $account_id;
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
	 * @param string $path Path.
	 */
	public function get_files( $path ) {
		global $wpdb;

		if ( empty( $path ) ) {
			$path = 'files_dir';
		}

		$result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$this->get_table()} WHERE path = %s AND account_id = %s", $path, $this->account_id ), ARRAY_A );

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
	 */
	public function set_files( $files ) {
		if ( ! empty( $files ) ) {
			foreach ( $files as $file ) {
				$this->insert_file( $file );
			}
		}
	}

	/**
	 * Insert File
	 *
	 * @param array $data Data.
	 */
	public function insert_file( $file ) {
		global $wpdb;
		$file = new File( $file );
		$dirname    = pathinfo( $file->get_path(), PATHINFO_DIRNAME );
		$table_name = $this->get_table();
		$id         = $file->get_id();
		$name       = $file->get_name();
		$mimetype   = $file->get_extension();
		$path       = '/' === $dirname ? 'files_dir' : $dirname;
		$data       = serialize( $file );

		return $wpdb->query(
			$wpdb->prepare(
				"INSERT INTO $table_name
				(id, `path`, account_id, name, mimetype, data)
				VALUES (%s, %s, %s, %s, %s, %s)",
				$id,
				$path,
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
	public function update_files( $data, $where, $format = array(), $where_format = array() ) {
		global $wpdb;

		return $wpdb->update( $this->get_table(), $data, $where, $format, $where_format );
	}

	/**
	 * Delete Files By Path
	 *
	 * @param string $path Path.
	 */
	public function delete_files( $path ) {
		global $wpdb;

		if ( empty( $path ) ) {
			$path = 'files_dir';
		}

		return $wpdb->delete( $this->get_table(), array( 'path' => $path ), array( '%s' ) );
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
	public function delete( $where, $where_format = array() ) {
		global $wpdb;

		return $wpdb->delete( $this->get_table(), $where, $where_format );
	}
}
