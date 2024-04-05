<?php
/**
 * API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use Kunnu\Dropbox\Models\FolderMetadata;
use ultraDevs\IntegrateDropbox\App\Traits\Singleton;
use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\App\File;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class API {
	use Singleton;

	/**
	 * Account ID.
	 *
	 * @var string
	 */
	public $account_id = null;

	/**
	 * DropBox API Client.
	 *
	 * @var object
	 */
	public $client = null;

	/**
	 * Constructor
	 *
	 * @param string $account_id Account ID.
	 */
	protected function __construct( $account_id = null ) {
		$this->account_id = is_null( $account_id ) ? Account::get_active_account()['id'] : $account_id;
		if ( ! is_null( $this->account_id ) ) {
			$this->client = Client::get_instance( $this->account_id )->get_client();
		}
	}

	/**
	 * Get File Data.
	 *
	 * @param string $file File.
	 * @param string $account_id Account ID.
	 * @param string $path Path.
	 *
	 * @return false|array $details Details.
	 */
	public function get_file( $file, $account_id = null, $path = null ) {

		if ( empty( $account_id ) ) {
			$account = $this->account_id;
		}

		// IF after all we still don't have an account, return false.
		if ( empty( $account ) ) {
			return false;
		}

		if ( empty( $path ) ) {
			$path = '/';
		} else {
			$path = Helper::clean_path( $path );
		}

		do_action( 'idb_log_event', $account_id, $file );

		try {
			$details = $this->client->getMetadata( $file );
			$file    = File::get_instance()->convert_api_data_to_file_data( $details );

			if ( $file->is_file() ) {
				return $file;
			}

		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );

			throw new \Exception( $e->getMessage() );
		}
	}

	/**
	 * Get Folder
	 *
	 * @param string $path Path.
	 * @param array  $params Params.
	 *
	 * @return false|array $items Items.
	 */
	public function get_folder( $path, $params = array( 'recursive' => false, 'hierarchical' => false ), $filter = [ 'name', 'asc' ]) {

		if ( false !== strpos( $path, '/' ) ) {
			$path = Helper::clean_path( $path );
		}

		if ( '/' === $path ) {
			$path = '';
		}

		$entries = array();

		// @TODO: Implement cache.
		// if ( ! INTEGRATE_DROPBOX_DEV_MODE && Helper::is_cached_folder( $path ) ) { 
		// 	$entries = Files::get_instance( $this->account_id )->get_files( $path );
		// } else {
			try {
				$folder_contents = Client::get_instance()->get_client()->listFolder( $path, array( 'recursive' => $params['recursive'] ) );
				$entries         = $folder_contents->getItems()->toArray();

				while ( $folder_contents->hasMoreItems() ) {
					$cursor          = $folder_contents->getCursor();
					$folder_contents = Client::get_instance()->get_client()->listFolderContinue( $cursor );
					$entries         = array_merge( $entries, $folder_contents->getItems()->toArray() );
				}

				// Files::get_instance( Account::get_active_account() )->set_files( $entries );

				// Helper::update_cached_folder( $path );

			} catch ( \Exception $e ) {
				error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );
				return false;
			}

			// dump( $entries );

			// $prevFolderPath = $entries->getPathDisplay();

			$children = array();

			if ( 0 < count( $entries ) ) {
				foreach ( $entries as $entry_data ) {
					$entry = new File( $entry_data );
					$relative_path = Helper::get_relative_path( $entry->get_path() );
					// dd( $entry->get_path() );
					$entry->set_path( $relative_path );
					$relative_path_display = Helper::get_relative_path( $entry->get_path_display() );
					$entry->set_path_display( $relative_path_display );

					$children[ $entry->get_id() ] = $entry;
				}
			}

			if ( count( $children ) > 0 ) {
				$children = Helper::sort_files( $children, $filter[0], $filter[1] );
			}

			// Recursive.
			if ( $params['recursive'] && $params['hierarchical'] ) {
				foreach ( $children as $id => $child ) {
					$relative_path = Helper::get_relative_path( $child->get_parent() );
					$parent_id = Helper::find_array_item_with_value( $children, 'path', $relative_path );
					// dump( $child );
					if ( false === $parent_id || $parent_id === $child->get_id() ) {
						$child->f = false;

						continue;
					}

					$parent = $children[ $parent_id ];
					$parents_childs = $parent->get_children();
					$parents_childs[ $child->get_id() ] = $child;
					$parent->set_children( $parents_childs );

					$child->f = true;
				}

				foreach ( $children as $id => $child ) {
					if ( $child->f ) {
						unset( $children[ $id ] );
					}
				}
			}

			if ( '' === $path ) {
				$folder_entry = File::get_instance();
				$folder_entry->set_id( 'DropBox' );
				$folder_entry->set_name( 'DropBox' );
				$folder_entry->set_path( '/' );
				$folder_entry->set_path_display( '/' );
				$folder_entry->set_is_dir( true );
				$folder_entry->set_children( $children );
			} else if ( ! $params['recursive'] || ! $params['hierarchical'] ) {
				$api_file = Client::get_instance()->get_client()->getMetaData( $path );
				$folder_entry = File::get_instance()->convert_api_data_to_file_data( $api_file );
				$folder_entry->set_children( $children );
			} else {
				$folder_entry = reset( $children );
			}

			// dump( $folder_entry );

			return $folder_entry;
		// }
	}

	/**
	 * Create Folder
	 *
	 * @param string $name Folder Name.
	 * @param string $folder_path Folder Path.
	 * @param array  $params Params.
	 *
	 * @return false|array $folder Folder.
	 */
	public function create_folder( $name, $folder_path, $params = [ 'auto_rename' => false ] ) {

		// @TODO: Add custom filters and actions. And need to work on Cache. 

		$name = sanitize_text_field( $name );

		$folder_path = Helper::clean_path( $folder_path . '/' . $name );

		try {
			$folder = Client::get_instance()->get_client()->createFolder( $folder_path, $params['auto_rename'] );
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );
			return false;
		}

		return $folder;
	}

	/**
	 * Rename File
	 *
	 * @param string $target Target File.
	 * @param string $new_name New Name.
	 * @param array  $params Params.
	 *
	 * @return false|array $file File.
	 */
	public function rename( $target, $new_name, $params = [ 'auto_rename' => false ] ) {
		
		$target = Helper::clean_path( $target );
		$new_name = Helper::clean_path( $new_name );
		
		try {
			$file = Client::get_instance()->get_client()->move( $target, $new_name, $params['auto_rename'] );
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );
			return $e->getMessage();
		}

		return $file;
	}

	// /**
	//  * Create Folder
	//  *
	//  * @param string $name Folder Name.
	//  * @param string $path Target Path.
	//  * @param array  $params Params.
	//  *
	//  * @return false|array $file File.
	//  */
	// public function create_folder( $name, $path, $params = [ 'auto_rename' => false ] ) {
		
	// 	$name = sanitize_text_field( $name );

	// 	$new_folder = Helper::clean_path( $path . '/' . $name );
		
	// 	try {
	// 		$file = Client::get_instance()->get_client()->createFolder( $new_folder, $params['auto_rename'] );
	// 	} catch ( \Exception $e ) {
	// 		error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );
	// 		return $e->getMessage();
	// 	}

	// 	return $file;
	// }
}
