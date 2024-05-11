<?php
/**
 * File Browser Class
 *
 * @package DropboxIntegrator
 * @since 1.0.0
 */

namespace ultraDevs\DropboxIntegrator\App;

use ultraDevs\DropboxIntegrator\App\Account;
use ultraDevs\DropboxIntegrator\App\Authorization;
use Kunnu\Dropbox\DropboxApp;
use Kunnu\Dropbox\Dropbox;
use Kunnu\Dropbox\Store\SessionPersistentDataStore;
use ultraDevs\DropboxIntegrator\App\Traits\Singleton;
use ultraDevs\DropboxIntegrator\Helper;

/**
 * File Browser Class
 *
 * @package DropboxIntegrator
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
	public function get_file_list( $path = '/',  $is_allowed = true, $recursive = false, $hierarchical = false, $filter = [ 'name', 'asc' ] ) {

		$this->path = $path;

		$this->folder = Client::get_instance()->get_folder( $path, $is_allowed, $recursive, $hierarchical, $filter );

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
					'name' => $item->get_name(),
					'path' => $item->get_path(),
					'path_raw' => $item->get_path_display(),
					'thumbnail' => $item->has_own_thumbnail() ? $item->get_thumbnail() : '',
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
					'edited' =>!$item->is_dir ? $item->last_edited : ''
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
