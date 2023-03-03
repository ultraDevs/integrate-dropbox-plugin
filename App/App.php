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

		if ( Helper::is_cached_folder( $path ) ) {
			return Files::get_instance( $this->account_id)->get_files( $path );
		}

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


		$children = array();
		if ( 0 < count( $entries ) ) {
			foreach ( $entries as $entry ) {
				$is_dir = false;
				if ( $entry instanceof FolderMetadata) {
					$is_dir = true;
				}

				// Get Meta Data based on file or folder.

				// $meta_data = $is_dir ? $entry->getFolderInfo() : $entry->getFileInfo();

				// ud_vd( $entry );

				$path_info = Helper::get_path_info( $entry->getPathLower());
				$is_file = ! $is_dir;
				$preview_support = [ 'txt', 'pdf', 'ai', 'eps', 'odp', 'odt', 'doc', 'docx', 'docm', 'ppt', 'pps', 'ppsx', 'ppsm', 'pptx', 'pptm', 'xls', 'xlsx', 'xlsm', 'rtf', 'jpg', 'jpeg', 'gif', 'png', 'webp', 'mp4', 'm4v', 'ogg', 'ogv', 'webmv', 'mp3', 'm4a', 'ogg', 'oga', 'wav', 'flac', 'paper', 'gdoc', 'gsheet', 'gslides' ];
				$sharing_info = $entry->getSharingInfo();

				// // Get previous path from $entry->getPathLower() and add as previous path.
				// $previous_path = '';
				// if ( ! empty( $entry->getPathLower() ) ) {
				// 	// extract previous path from $entry->getPathLower().
				// 	$previous_path = Helper::get_previous_path( $entry->getPathLower() );
				// }

				$children[] = array(
					'id'       => $entry->getId(),
					'name'     => $entry->getName(),
					'path'     => $entry->getPathLower(),
					'path_raw' => $entry->getPathDisplay(),
					// 'previous_path' => $previous_path,
					'is_dir'   => $is_dir,
					'is_file'  => ! $is_dir,
					'can_preview' => $is_file ? in_array( $path_info['extension'], $preview_support ) : false,
					// 'parent_id' => ! empty( $sharing_info->getParentSharedFolderId() ) ? $sharing_info->getParentSharedFolderId() : '',
					'permission' => array(
						'canDownload' => true,
						'canDelete' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
						'canRename' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
						'canMove' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
						'canAdd' => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
						'hasAccess' => empty( $sharing_info ) ? true : ! $sharing_info->hasAccess(),
						'canShare' => true,
					),
					// 'is_image' => $is_file && in_array( $path_info['extension'], array( 'jpg', 'jpeg', 'png', 'gif' ) ),
					// 'is_video' => $is_file && in_array( $path_info['extension'], array( 'mp4', 'mov', 'avi', 'wmv', 'flv' ) ),
					// 'is_audio' => $is_file && in_array( $path_info['extension'], array( 'mp3', 'wav', 'ogg' ) ),
					// 'is_pdf'   => $is_file && in_array( $path_info['extension'], array( 'pdf' ) ),
					// 'is_doc'   => $is_file && in_array( $path_info['extension'], array( 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx' ) ),
					// 'is_zip'   => $is_file && in_array( $path_info['extension'], array( 'zip', 'rar', 'tar', 'gz', '7z' ) ),
					// 'is_code'  => $is_file && in_array( $path_info['extension'], array( 'php', 'js', 'css', 'html', 'htm', 'xml', 'json', 'txt' ) ),
					// 'is_other' => $is_file && ! in_array( $path_info['extension'], array( 'jpg', 'jpeg', 'png', 'gif', 'mp4', 'mov', 'avi', 'wmv', 'flv', 'mp3', 'wav', 'ogg', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar', 'tar', 'gz', '7z', 'php', 'js', 'css', 'html', 'htm', 'xml', 'json', 'txt' ) ),
					'ext'      => $is_file ? $path_info['extension'] : '',
					'size'     => $is_file ? $entry->getSize() : '',
					'created'  => $is_file ? $entry->getServerModified() : '',
					'modified' => $is_file ? $entry->getServerModified() : '',
					
					// 'parent'   => $is_file && $entry->getParentSharedFolderId(),
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

		Files::get_instance( $this->account_id)->set_files( $children );

		Helper::update_cached_folder( $path );

		// @TODO : Recursive and Hierarchical.

		return $children;
	}

}
