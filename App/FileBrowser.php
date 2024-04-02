<?php
/**
 * File Browser Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Authorization;
use Kunnu\Dropbox\DropboxApp;
use Kunnu\Dropbox\Dropbox;
use Kunnu\Dropbox\Store\SessionPersistentDataStore;
use ultraDevs\IntegrateDropbox\App\Traits\Singleton;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * File Browser Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class FileBrowser {

	use Singleton;

	/**
	 * Folder.
	 */
	public $folder;

	/**
	 * Path
	 */
	public $path = '';

	/**
	 * Items.
	 */
	public $items;

	/**
	 * Do Search
	 */
	public $do_search = false;

	/**
	 * Parent Folders.
	 */
	public $parent_folders = [];


	/**
	 * Get File List.
	 */
	public function get_file_list( $path = '/',  $is_allowed = true, $recursive = false, $hierarchical = false ) {

		$this->path = $path;

		$this->folder = Client::get_instance()->get_folder( $path, $is_allowed, $recursive, $hierarchical );

		if ( false === $this->folder ) {
			return false;
		}

		return $this->render_files();
	}

	/**
	 * Render Files.
	 */
	public function render_files() {
		$this->items = $this->folder->children;

		$items = [];
		if ( ! empty( $this->items ) ) {
			foreach ( $this->items as $item ) {
				$items[] = [
					'id' => $item->id,
					'name' => $item->name,
					'path' => $item->path,
					'path_raw' => $item->path_display,
					'thumbnail' => '', // You need to set this value
					'is_dir' => $item->is_dir,
					'is_file' => !$item->is_dir,
					'can_preview' => $item->is_dir ? false : true, // Assuming directory cannot be previewed
					'permission' => [
						'canDownload' => $item->permissions['canDownload'],
						'canDelete' => $item->permissions['canDelete'],
						'canRename' => $item->permissions['canRename'],
						'canMove' => $item->permissions['canMove'],
						'canAdd' => $item->permissions['canAdd'],
						'hasAccess' => $item->has_access,
						'canShare' => $item->permissions['canShare'],
					],
					'ext' =>!$item->is_dir ? $item->extension : '',
					'size' =>!$item->is_dir ? $item->size : '',
					'created' =>!$item->is_dir ? $item->last_modified : '',
					'modified' =>!$item->is_dir ? $item->last_modified : ''
				];

			}
		}

		// Move all folder to first in order to show folder first.
		// $folders = array_filter( $items, function( $item ) {
		// 	return $item['is_dir'];
		// } );

		// $files = array_filter( $items, function( $item ) {
		// 	return ! $item['is_dir'];
		// } );

		// $items = array_merge( $folders, $files );

		// Files::get_instance( Account::get_active_account() )->set_files( $items );

		// Helper::update_cached_folder( $this->path );

		return $items;
	}
}
