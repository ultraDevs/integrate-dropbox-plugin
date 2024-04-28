<?php
/**
 * API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use Kunnu\Dropbox\Models\FolderMetadata;
use Kunnu\Dropbox\Models\SharedLinkSettings;
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
	 * @param string $id ID.
	 * @param array  $params Params.
	 *
	 * @return false|array $details Details.
	 */
	public function get_file( $id, $params = [
		'include_media_info' => true,
	] ) {

		if ( empty( $id ) ) {
			$id = '';
		} else {
			// $id = Helper::clean_path( $id );
		}

		// do_action( 'idb_log_event', $account_id, $file );


		try {
			$file_data = $this->client->getMetadata( $id, $params );

		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() )
			);

			throw new \Exception( esc_html( $e->getMessage() ) ); 
		}

		$file = (new File())->convert_api_data_to_file_data( $file_data );

		// if ( $file->is_file() && $file->has_own_thumbnail() ) {
		// 	$file->set_thumbnail( $this->get_thumbnail( $file->get_path() ) );
		// }

		return $file;
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

		$path = Helper::clean_path( $path );

		if ( '/' === $path ) {
			$path = '';
		}

		$entries = array();


		// @TODO: Implement cache.
		// if ( Helper::is_cached_folder( $path ) ) {
		// 	$children = Files::get_instance( $this->account_id )->get_files( $path );
		// } else {
			try {
				$folder_contents = Client::get_instance()->get_client()->listFolder( $path, array( 'recursive' => $params['recursive'] ) );
				$entries         = $folder_contents->getItems()->toArray();

				while ( $folder_contents->hasMoreItems() ) {
					$cursor          = $folder_contents->getCursor();
					$folder_contents = Client::get_instance()->get_client()->listFolderContinue( $cursor );
					$entries         = array_merge( $entries, $folder_contents->getItems()->toArray() );
				}

			} catch ( \Exception $e ) {
				error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
					/* translators: %s: Error Message */
					__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() )
				);
				return false;
			}


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

			// Files::get_instance( $this->account_id )->set_files( $path === '' ? 'files_dir' : $path , $children );

			// Helper::update_cached_folder( $path === '' ? 'files_dir' : $path );
		// }

		// var_dump( $children );

		// @TODO: Need to work on sorting later.
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
			$folder_entry = new File();
			$folder_entry->set_id( 'DropBox' );
			$folder_entry->set_name( 'DropBox' );
			$folder_entry->set_path( '/' );
			$folder_entry->set_path_display( '/' );
			$folder_entry->set_is_dir( true );
			$folder_entry->set_children( $children );
		} else if ( ! $params['recursive'] || ! $params['hierarchical'] ) {
			$api_file = Client::get_instance()->get_client()->getMetaData( $path );
			$file_class = new File();
			$folder_entry = $file_class->convert_api_data_to_file_data( $api_file );
			$folder_entry->set_children( $children );
		} else {
			$folder_entry = reset( $children );
		}

		return $folder_entry;
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
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
			));
			return false;
		}

		return $folder;
	}

	public function get_preview( $id, $params = [] ) {
		do_action( 'idb_api_before_file_preview', $this->account_id, $id, $params );

		$params = apply_filters( 'idb_file_preview_params', $params );

		try {
			$preview = Client::get_instance()->get_client()->preview( $id );
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
			));
			return false;
		}

		do_action( 'idb_api_after_file_preview', $this->account_id, $id, $params );

		return $preview;
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
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
			));
			return $e->getMessage();
		}

		return $file;
	}

	
	/**
	 * Delete
	 *
	 * @param string $target Target.
	 *
	 * @return false|array $file File.
	 */
	public function delete( $target ) {
		$target = Helper::clean_path( $target );

		try {
			$file = Client::get_instance()->get_client()->delete( $target );
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
			));
			return $e->getMessage();
		}

		return $file;
	}

	/**
	 * Copy Folder
	 *
	 * @param string $target Target.
	 *
	 * @return false|array $file File.
	 */
	public function copy( $target ) {
		$target = Helper::clean_path( $target );

		try {
			$file = Client::get_instance()->get_client()->delete( $target );
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
			));
			return $e->getMessage();
		}

		return $file;
	}
	
	/**
	 * Upload File
	 *
	 * @param string $file File.
	 * @param string $path Path.
	 * @param array  $params Params.
	 *
	 * @return false|array $file File.
	 */
	public function upload_file( $file, $path, $params = [] ) {
		$path = Helper::clean_path( $path );

		$params = array_merge( $params, [
			'mode' => 'add',
			'autorename' => true,
		]);

		try {
			$file = Client::get_instance()->get_client()->upload( $file, $path, $params );
			// dump( $file );
			// $file = new File( $file );
		} catch ( \Exception $e ) {
			error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
				/* translators: %s: Error Message */
				__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
			));
			return $e->getMessage();
		}

		return $file;
	}

	public function create_shared_link( $id, $params = [] ) {
		// $path = Helper::clean_path( $path );

		$default_shared_link_params = apply_filters(
			'idb_default_shared_link_params',
			[
				'audience' => 'public',
				'access' => 'viewer',
				'expires' => null,
				'require_password' => null,
				'link_password' => null,
			]
		);

		$params = array_merge( $default_shared_link_params, $params );

		$settings = new SharedLinkSettings( $params );

		try {
			$link = Client::get_instance()->get_client()->createSharedLinkWithSettings( $id, $settings );
		} catch ( \Exception $e ) {
			// $decode_error = json_decode( $e->getMessage() );

			if ( strpos( $e->getMessage(), 'shared_link_already_exists' ) !== false ) {
				$link = Client::get_instance()->get_client()->listSharedLinks( $id )->getData()['links'];

				// $link = $link[0];
			} else {
				error_log( INTEGRATE_DROPBOX_ERROR . sprintf(
					/* translators: %s: Error Message */
					__( 'Error : %s', 'integrate-dropbox' ), $e->getMessage()
				));
				return $e->getMessage();
			}
		}

		return [
			$link
		];
	}
}
