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
	public function get_file_list() {
		$this->folder = Client::get_instance()->get_folder( null, true );

		if ( false === $this->folder ) {
			return false;
		}

		$this->render_files();
	}
}
