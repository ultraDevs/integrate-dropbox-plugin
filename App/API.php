<?php
/**
 * API Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

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

		do_action( 'ud_idb_log_event', $account_id, $file );

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
	public function get_folder( $path, $params = array( 'recursive' => false, 'hierarchical' => false ) ) {

		if ( false !== strpos( $path, '/' ) ) {
			$path = Helper::clean_path( $path );
		}

		if ( '/' === $path ) {
			$path = '';
		}

		$items = array();

		if ( Helper::is_cached_folder( $path ) ) {
			$items = Files::get_instance( $this->account_id )->get_files( $path );
		} else {

			try {
				$folder_contents = Client::get_instance()->get_client()->listFolder( $path, array( 'recursive' => $params['recursive'] ) );
				$entries         = $folder_contents->getItems()->toArray();

				while ( $folder_contents->hasMoreItems() ) {
					$cursor          = $folder_contents->getCursor();
					$folder_contents = Client::get_instance()->get_client()->listFolderContinue( $cursor );
					$entries         = array_merge( $entries, $folder_contents->getItems()->toArray() );
				}
			} catch ( \Exception $e ) {
				error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );
				return false;
			}

			// $prevFolderPath = $entries->getPathDisplay();

			// extract data from $entries object.

			if ( 0 < count( $entries ) ) {
				foreach ( $entries as $entry ) {
					$is_dir = false;
					if ( $entry instanceof FolderMetadata ) {
						$is_dir = true;
					}

					$path_info    = Helper::get_path_info( $entry->getPathLower() );
					$is_file      = ! $is_dir;
					$sharing_info = $entry->getSharingInfo();

					$thumbnail_loc = '';
					if ( ! $is_dir && Helper::can_generate_thumbnail( $path_info['extension'] ) ) {
						$thumbnail     = new Thumbnail( $entry, 'large' );
						$thumbnail_loc = $thumbnail->generate_thumbnail();
					}

					$items[] = array(
						'id'          => $entry->getId(),
						'name'        => $entry->getName(),
						'path'        => $entry->getPathLower(),
						'path_raw'    => $entry->getPathDisplay(),
						'thumbnail'   => $thumbnail_loc,
						'is_dir'      => $is_dir,
						'is_file'     => ! $is_dir,
						'can_preview' => $is_file ? Helper::can_generate_thumbnail( $path_info['extension'] ) : false,
						'permission'  => array(
							'canDownload' => true,
							'canDelete'   => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'canRename'   => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'canMove'     => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'canAdd'      => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							// 'hasAccess' => empty( $sharing_info ) ? true : ! $sharing_info->hasAccess(),
							'canShare'    => true,
						),
						'ext'         => $is_file ? $path_info['extension'] : '',
						'size'        => $is_file ? $entry->getSize() : '',
						'created'     => $is_file ? $entry->getServerModified() : '',
						'modified'    => $is_file ? $entry->getServerModified() : '',
					);

					// if ( $is_dir && $params['hierarchical'] ) {
					// $children[ count( $children ) - 1 ]['children'] = self::get_folder( $entry->getPathLower(), $params );
					// } elseif ( $is_dir && ! $params['hierarchical'] ) {
					// $children[ count( $children ) - 1 ]['children'] = self::get_folder( $entry->getPathLower(), [ 'recursive' => false, 'hierarchical' => false ] );
					// } elseif ( $is_file ) {
					// $children[ count( $children ) - 1 ]['children'] = array();
					// } else {
					// $children[ count( $children ) - 1 ]['children'] = array();
					// }

					// // Recursive.
					// if ( $params['recursive'] ) {
					// $children = array_merge( $children, self::get_folder( $entry->getPathLower(), $params ) );
					// }
				}
			}

			// Move all folder to first in order to show folder first.
			$folders = array_filter(
				$items,
				function ( $item ) {
					return $item['is_dir'];
				}
			);

			$files = array_filter(
				$items,
				function ( $item ) {
					return ! $item['is_dir'];
				}
			);

			$items = array_merge( $folders, $files );

			Files::get_instance( $this->account_id )->set_files( $items );

			Helper::update_cached_folder( $path );
		}

		// @TODO : Recursive and Hierarchical.

		return $items;
	}
}
