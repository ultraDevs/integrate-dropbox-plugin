<?php
/**
 * File Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
namespace ultraDevs\IntegrateDropbox\App;

/**
 * Abstract File Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
abstract class FileAbstract {

	/**
	 * File ID.
	 *
	 * @var string
	 */
	public $id;

	/**
	 * File Name.
	 *
	 * @var string
	 */
	public $name;

	/**
	 * File Path.
	 *
	 * @var string
	 */
	public $path;

	/**
	 * Children.
	 *
	 * @var array
	 */
	public $children = array();

	/**
	 * Parent.
	 *
	 * @var string
	 */
	public $parent;

	/**
	 * Extension.
	 *
	 * @var string
	 */
	public $extension;

	/**
	 * Mimetype.
	 *
	 * @var string
	 */
	public $mimetype;

	/**
	 * Size.
	 *
	 * @var string
	 */
	public $size;

	/**
	 * Last Edited.
	 *
	 * @var string
	 */
	public $last_edited;

	/**
	 * Last Modified.
	 *
	 * @var string
	 */
	public $last_modified;

	/**
	 * Trashed.
	 *
	 * @var boolean
	 */
	public $trashed = false;

	/**
	 * Description.
	 *
	 * @var string
	 */
	public $description;

	/**
	 * Is Directory.
	 *
	 * @var boolean
	 */
	public $is_dir = false;

	/**
	 * Preview Link.
	 *
	 * @var string
	 */
	public $preview_link;

	/**
	 * Download Link.
	 *
	 * @var string
	 */
	public $download_link;

	/**
	 * Share Link.
	 *
	 * @var string
	 */
	public $share_link;

	/**
	 * Save AS.
	 *
	 * @var array
	 */
	public $save_as = array();

	/**
	 * Can Preview By Cloud.
	 *
	 * @var boolean
	 */
	public $can_preview_by_cloud = false;

	/**
	 * Permissions.
	 *
	 * @var array
	 */
	public $permissions = array(
		'canpreview' => false,
		'canadd'     => false,
		'candelete'  => false,
		'canrename'  => false,
		'canmove'    => false,
	);

	/**
	 * Thumbnails
	 *
	 * @var array
	 */
	public $thumbnails = array();

	/**
	 * Icon.
	 *
	 * @var string
	 */
	public $icon;

	/**
	 * Additional Data.
	 *
	 * @var array
	 */
	public $additional_data = array();

	// Generate wp phpcs based getter and setter methods.

	/**
	 * Get ID
	 *
	 * @return string
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * Set ID
	 *
	 * @param string $id File ID.
	 * @return void
	 */
	public function set_id( $id ) {
		$this->id = $id;
	}

	/**
	 * Get Name
	 *
	 * @return string
	 */
	public function get_name() {
		return $this->name;
	}

	/**
	 * Set Name
	 *
	 * @param string $name File Name.
	 * @return void
	 */
	public function set_name( $name ) {
		$this->name = $name;
	}

	/**
	 * Get Path
	 *
	 * @return string
	 */
	public function get_path() {
		return $this->path;
	}

	/**
	 * Set Path
	 *
	 * @param string $path File Path.
	 * @return void
	 */
	public function set_path( $path ) {
		$this->path = $path;
	}

	/**
	 * Get Children
	 *
	 * @return array
	 */
	public function get_children() {
		return $this->children;
	}

	/**
	 * Set Children
	 *
	 * @param array $children Children.
	 * @return void
	 */
	public function set_children( $children ) {
		$this->children = $children;
	}

	/**
	 * Get Parent
	 *
	 * @return string
	 */
	public function get_parent() {
		return $this->parent;
	}

	/**
	 * Set Parent
	 *
	 * @param string $parent Parent.
	 * @return void
	 */
	public function set_parent( $parent ) {
		$this->parent = $parent;
	}

	/**
	 * Get Extension
	 *
	 * @return string
	 */
	public function get_extension() {
		return $this->extension;
	}

	/**
	 * Set Extension
	 *
	 * @param string $extension Extension.
	 * @return void
	 */
	public function set_extension( $extension ) {
		$this->extension = $extension;
	}

	/**
	 * Get Mimetype
	 *
	 * @return string
	 */
	public function get_mimetype() {
		return $this->mimetype;
	}

	/**
	 * Set Mimetype
	 *
	 * @param string $mimetype Mimetype.
	 * @return void
	 */
	public function set_mimetype( $mimetype ) {
		$this->mimetype = $mimetype;
	}

	/**
	 * Get Size
	 *
	 * @return string
	 */
	public function get_size() {
		return $this->size;
	}

	/**
	 * Set Size
	 *
	 * @param string $size Size.
	 * @return void
	 */
	public function set_size( $size ) {
		$this->size = $size;
	}

	/**
	 * Get Last Edited
	 *
	 * @return string
	 */
	public function get_last_edited() {
		return $this->last_edited;
	}

	/**
	 * Set Last Edited
	 *
	 * @param string $last_edited Last Edited.
	 * @return void
	 */
	public function set_last_edited( $last_edited ) {
		$this->last_edited = $last_edited;
	}

	/**
	 * Get Last Modified
	 *
	 * @return string
	 */
	public function get_last_modified() {
		return $this->last_modified;
	}

	/**
	 * Set Last Modified
	 *
	 * @param string $last_modified Last Modified.
	 * @return void
	 */
	public function set_last_modified( $last_modified ) {
		$this->last_modified = $last_modified;
	}

	/**
	 * Get Trashed
	 *
	 * @return boolean
	 */
	public function get_trashed() {
		return $this->trashed;
	}

	/**
	 * Set Trashed
	 *
	 * @param boolean $trashed Trashed.
	 * @return void
	 */
	public function set_trashed( $trashed ) {
		$this->trashed = $trashed;
	}

	/**
	 * Get Description
	 *
	 * @return string
	 */
	public function get_description() {
		return $this->description;
	}

	/**
	 * Set Description
	 *
	 * @param string $description Description.
	 * @return void
	 */
	public function set_description( $description ) {
		$this->description = $description;
	}

	/**
	 * Get Is Dir
	 *
	 * @return boolean
	 */
	public function get_is_dir() {
		return $this->is_dir;
	}

	/**
	 * Set Is Dir
	 *
	 * @param boolean $is_dir Is Directory.
	 * @return void
	 */
	public function set_is_dir( $is_dir ) {
		$this->is_dir = $is_dir;
	}

	/**
	 * Get Preview Link
	 *
	 * @return string
	 */
	public function get_preview_link() {
		return $this->preview_link;
	}

	/**
	 * Set Preview Link
	 *
	 * @param string $preview_link Preview Link.
	 * @return void
	 */
	public function set_preview_link( $preview_link ) {
		$this->preview_link = $preview_link;
	}

	/**
	 * Get Download Link
	 *
	 * @return string
	 */
	public function get_download_link() {
		return $this->download_link;
	}

	/**
	 * Set Download Link
	 *
	 * @param string $download_link Download Link.
	 * @return void
	 */
	public function set_download_link( $download_link ) {
		$this->download_link = $download_link;
	}

	/**
	 * Get Share Link
	 *
	 * @return string
	 */
	public function get_share_link() {
		return $this->share_link;
	}

	/**
	 * Set Share Link
	 *
	 * @param string $share_link Share Link.
	 * @return void
	 */
	public function set_share_link( $share_link ) {
		$this->share_link = $share_link;
	}

	/**
	 * Get Save As
	 *
	 * @return array
	 */
	public function get_save_as() {
		return $this->save_as;
	}

	/**
	 * Set Save As
	 *
	 * @param array $save_as Save As.
	 * @return void
	 */
	public function set_save_as( $save_as ) {
		$this->save_as = $save_as;
	}

	/**
	 * Get Can Preview By Cloud
	 *
	 * @return boolean
	 */
	public function get_can_preview_by_cloud() {
		return $this->can_preview_by_cloud;
	}

	/**
	 * Set Can Preview By Cloud
	 *
	 * @param boolean $can_preview_by_cloud Can Preview By Cloud.
	 * @return void
	 */
	public function set_can_preview_by_cloud( $can_preview_by_cloud ) {
		$this->can_preview_by_cloud = $can_preview_by_cloud;
	}

	/**
	 * Get Permissions
	 *
	 * @return array
	 */
	public function get_permissions() {
		return $this->permissions;
	}

	/**
	 * Set Permissions
	 *
	 * @param array $permissions Permissions.
	 * @return void
	 */
	public function set_permissions( $permissions ) {
		$this->permissions = $permissions;
	}

	/**
	 * Get Thumbnails
	 *
	 * @return array
	 */
	public function get_thumbnails() {
		return $this->thumbnails;
	}

	/**
	 * Set Thumbnails
	 *
	 * @param array $thumbnails Thumbnails.
	 * @return void
	 */
	public function set_thumbnails( $thumbnails ) {
		$this->thumbnails = $thumbnails;
	}

	/**
	 * Get Icon
	 *
	 * @return string
	 */
	public function get_icon() {
		return $this->icon;
	}

	/**
	 * Set Icon
	 *
	 * @param string $icon Icon.
	 * @return void
	 */
	public function set_icon( $icon ) {
		$this->icon = $icon;
	}

	/**
	 * Get Additional Data
	 *
	 * @return array
	 */
	public function get_additional_data() {
		return $this->additional_data;
	}

	/**
	 * Set Additional Data
	 *
	 * @param array $additional_data Additional Data.
	 * @return void
	 */
	public function set_additional_data( $additional_data ) {
		$this->additional_data = $additional_data;
	}
}
