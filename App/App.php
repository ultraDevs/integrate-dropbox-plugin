<?php
/**
 * App Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

if ( ! session_id() ) {
	session_start();
}

use Kunnu\Dropbox\Models\FileMetadata;
use Kunnu\Dropbox\Models\FolderMetadata;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\Helper;
use ultraDevs\IntegrateDropbox\App\Files;
use ultraDevs\IntegrateDropbox\App\Traits\Singleton;

/**
 * App Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class App {

	use Singleton;

	/**
	 * DropBox API Client.
	 *
	 * @var object
	 */
	public $client;

	/**
	 * DropBox API Service.
	 *
	 * @var object
	 */
	public $service;
	
	/**
	 * DropBox API Account ID.
	 *
	 * @var string
	 */
	public $account_id = null;

	/**
	 * Constructor
	 */
	public function __construct( $account_id = null ) {
		if ( empty( $account_id ) && ! empty( Account::get_active_account( 'id' ) ) ) {
			$account_id = Account::get_active_account( 'id' );
		}

		$this->account_id = $account_id;

		// add_filter( 'ud_idb_root_id', array( 'ultraDevs\IntegrateDropbox\App\Account', 'get_root_id' ), 10, 1 );
	}

	/**
	 * Process Authorization
	 *
	 * @return void
	 */
	public function process_authorization() {
		$redirect = admin_url( 'admin.php?page=integrate-dropbox' );

		if ( ! empty( $_REQUEST['state'] ) ) {
			$state      = strtr( $_REQUEST['state'], '-_~', '+/=' );
			$url_state  = null;
			$split_pos  = strpos( $state, '|' );

			if ( false !== $split_pos ) {
				$url_state = substr( $state, $split_pos + 1 );
			}

			$redirect_to = base64_decode( $url_state );

			if ( false === strpos( $redirect_to, 'integrate-dropbox' ) ) {
				return false;
			}
		} else {
			echo '<script type="text/javascript">window.opener.parent.location.href="' . $redirect . '"; window.close();</script>';
		}

		// @ TODO - 

		if ( isset( $_REQUEST['code'] ) ) {
			$client = new Client();
			$client->create_access_token();
		}

		echo '<script type="text/javascript">window.opener.parent.location.href="' . $redirect . '"; window.close();</script>';

		exit();
	}

	/**
	 * Get Folder
	 *
	 * @param string $path Path.
	 * @param array  $params Params.
	 *
	 * @return void
	 */
	public function get_folder( $path, $params = [ 'recursive' => false, 'hierarchical' => false ] ) {

		if ( false !== strpos( $path, '/' ) ) {
			$path = Helper::clean_path( $path );
		}

		if ( '/' === $path ) {
			$path = '';
		}

		$items = array();

		if ( Helper::is_cached_folder( $this->account_id, $path ) ) {
			$items = Files::get_instance( $this->account_id )->get_files( $path );
		} else {
			try {
				$folder_contents = Client::get_instance()->get_client()->listFolder( $path, ['recursive' => $params['recursive'] ] );
				$entries         = $folder_contents->getItems()->toArray();

				while ( $folder_contents->hasMoreItems() ) {
					$cursor = $folder_contents->getCursor();
					$folder_contents = Client::get_instance()->get_client()->listFolderContinue( $cursor );
					$entries = array_merge( $entries, $folder_contents->getItems()->toArray() );
				}
			} catch ( \Exception $e ) {
				error_log( INTEGRATE_DROPBOX_ERROR . sprintf( __( 'Error : %s', 'integrate-dropbox' ), $e->getMessage() ) );
				return false;
			}

			// $prevFolderPath = $entries->getPathDisplay();

			// extract data from $entries object.

			// ud_vd( $entries );


			if ( 0 < count( $entries ) ) {
				foreach ( $entries as $entry ) {
					$is_dir = false;
					if ( $entry instanceof FolderMetadata) {
						$is_dir = true;
					}

					$path_info = Helper::get_path_info( $entry->getPathLower());
					$is_file = ! $is_dir;
					$sharing_info = $entry->getSharingInfo();

					$thumbnail_loc = '';
					if ( !$is_dir && Helper::can_generate_thumbnail( $path_info['extension'] ) ) {
						$thumbnail = new Thumbnail( $entry, 'large' );
						$thumbnail_loc = $thumbnail->generate_thumbnail();
					}

					$items[] = array(
						'id'       => $entry->getId(),
						'name'     => $entry->getName(),
						'path'     => $entry->getPathLower(),
						'path_raw' => $entry->getPathDisplay(),
						'thumbnail' => $thumbnail_loc,
						'is_dir'   => $is_dir,
						'is_file'  => ! $is_dir,
						'can_preview' => $is_file ? Helper::can_generate_thumbnail( $path_info['extension'] ) : false,
						'permission' => array(
							'canDownload' => true,
							'canDelete' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'canRename' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'canMove' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'canAdd' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
							'hasAccess' => empty( $sharing_info ) ? true : ! $sharing_info->hasAccess(),
							'canShare' => true,
						),
						'ext'      => $is_file ? $path_info['extension'] : '',
						'size'     => $is_file ? $entry->getSize() : '',
						'created'  => $is_file ? $entry->getServerModified() : '',
						'modified' => $is_file ? $entry->getServerModified() : '',
					);

					// if ( $is_dir && $params['hierarchical'] ) {
					// 	$children[ count( $children ) - 1 ]['children'] = self::get_folder( $entry->getPathLower(), $params );
					// } elseif ( $is_dir && ! $params['hierarchical'] ) {
					// 	$children[ count( $children ) - 1 ]['children'] = self::get_folder( $entry->getPathLower(), [ 'recursive' => false, 'hierarchical' => false ] );
					// } elseif ( $is_file ) {
					// 	$children[ count( $children ) - 1 ]['children'] = array();
					// } else {
					// 	$children[ count( $children ) - 1 ]['children'] = array();
					// }

					// // Recursive.
					// if ( $params['recursive'] ) {
					// 	$children = array_merge( $children, self::get_folder( $entry->getPathLower(), $params ) );
					// }
				}
			}

			// Move all folder to first in order to show folder first.
			$folders = array_filter( $items, function( $item ) {
				return $item['is_dir'];
			} );

			$files = array_filter( $items, function( $item ) {
				return ! $item['is_dir'];
			} );

			$items = array_merge( $folders, $files );

			Files::get_instance( $this->account_id )->set_files( $items );

			Helper::update_cached_folder( $this->account_id, $path );
		}

		// @TODO : Recursive and Hierarchical.

		return $items;
	}

}
