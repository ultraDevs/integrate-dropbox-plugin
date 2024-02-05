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
	public $children = [];
	
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
	public $save_as = [];
	
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
	public $permissions = [
		'canpreview' => false,
		'canadd'     => false,
		'candelete'  => false,
		'canrename'  => false,
		'canmove'     => false,
	];
	
	/**
	 * Thumbnails
	 *
	 * @var array
	 */
	public $thumbnails = [];
	
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
	public $additional_data = [];


	/**
	 * Get ID
	 *
	 * @return string
	 */
	public function getId(): string
	{
		return $this->id;
	}

	/**
	 * Set ID
	 *
	 * @param string $id
	 */
	public function setId(string $id): void
	{
		$this->id = $id;
	}

	/**
	 * Get Name
	 *
	 * @return string
	 */
	public function getName(): string
	{
		return $this->name;
	}

	/**
	 * Set Name
	 *
	 * @param string $name
	 */
	public function setName(string $name): void
	{
		$this->name = $name;
	}

	/**
	 * Get Path
	 *
	 * @return string
	 */
	public function getPath(): string
	{
		return $this->path;
	}

	/**
	 * Set Path
	 *
	 * @param string $path
	 */
	public function setPath(string $path): void
	{
		$this->path = $path;
	}

	/**
	 * @return array
	 */
	public function getChildren(): array
	{
		return $this->children;
	}

	/**
	 * @param array $children
	 */
	public function setChildren(array $children): void
	{
		$this->children = $children;
	}

	/**
	 * @return string
	 */
	public function getParent(): string
	{
		return $this->parent;
	}

	/**
	 * @param string $parent
	 */
	public function setParent(string $parent): void
	{
		$this->parent = $parent;
	}

	/**
	 * @return string
	 */
	public function getExtension(): string
	{
		return $this->extension;
	}

	/**
	 * @param string $extension
	 */
	public function setExtension(string $extension): void
	{
		$this->extension = $extension;
	}

	/**
	 * @return string
	 */
	public function getMimetype(): string
	{
		return $this->mimetype;
	}

	/**
	 * @param string $mimetype
	 */
	public function setMimetype(string $mimetype): void
	{
		$this->mimetype = $mimetype;
	}

	/**
	 * @return string
	 */
	public function getSize(): string
	{
		return $this->size;
	}

	/**
	 * @param string $size
	 */
	public function setSize(string $size): void
	{
		$this->size = $size;
	}

	/**
	 * @return string
	 */
	public function getLastEdited(): string
	{
		return $this->last_edited;
	}

	/**
	 * @param string $last_edited
	 */
	public function setLastEdited(string $last_edited): void
	{
		$this->last_edited = $last_edited;
	}

	/**
	 * @return string
	 */
	public function getLastModified(): string
	{
		return $this->last_modified;
	}

	/**
	 * @param string $last_modified
	 */
	public function setLastModified(string $last_modified): void
	{
		$this->last_modified = $last_modified;
	}

	/**
	 * @return bool
	 */
	public function isTrashed(): bool
	{
		return $this->trashed;
	}

	/**
	 * @param bool $trashed
	 */
	public function setTrashed(bool $trashed): void
	{
		$this->trashed = $trashed;
	}

	/**
	 * @return string
	 */
	public function getDescription(): string
	{
		return $this->description;
	}

	/**
	 * @param string $description
	 */
	public function setDescription(string $description): void
	{
		$this->description = $description;
	}

	/**
	 * @return bool
	 */
	public function isIsDir(): bool
	{
		return $this->is_dir;
	}

	/**
	 * @param bool $is_dir
	 */
	public function setIsDir(bool $is_dir): void
	{
		$this->is_dir = $is_dir;
	}

	/**
	 * @return string
	 */
	public function getPreviewLink(): string
	{
		return $this->preview_link;
	}

	/**
	 * @param string $preview_link
	 */
	public function setPreviewLink(string $preview_link): void
	{
		$this->preview_link = $preview_link;
	}

	/**
	 * @return string
	 */
	public function getDownloadLink(): string
	{
		return $this->download_link;
	}

	/**
	 * @param string $download_link
	 */
	public function setDownloadLink(string $download_link): void
	{
		$this->download_link = $download_link;
	}

	/**
	 * @return string
	 */
	public function getShareLink(): string
	{
		return $this->share_link;
	}

	/**
	 * @param string $share_link
	 */
	public function setShareLink(string $share_link): void
	{
		$this->share_link = $share_link;
	}

	/**
	 * @return array
	 */
	public function getSaveAs(): array
	{
		return $this->save_as;
	}

	/**
	 * @param array $save_as
	 */
	public function setSaveAs(array $save_as): void
	{
		$this->save_as = $save_as;
	}

	/**
	 * @return bool
	 */
	public function isCanPreviewByCloud(): bool
	{
		return $this->can_preview_by_cloud;
	}

	/**
	 * @param bool $can_preview_by_cloud
	 */
	public function setCanPreviewByCloud(bool $can_preview_by_cloud): void
	{
		$this->can_preview_by_cloud = $can_preview_by_cloud;
	}

	/**
	 * @return array|false[]
	 */
	public function getPermissions(): array
	{
		return $this->permissions;
	}

	/**
	 * @param array|false[] $permissions
	 */
	public function setPermissions(array $permissions): void
	{
		$this->permissions = $permissions;
	}

	/**
	 * @return array
	 */
	public function getThumbnails(): array
	{
		return $this->thumbnails;
	}

	/**
	 * @param array $thumbnails
	 */
	public function setThumbnails(array $thumbnails): void
	{
		$this->thumbnails = $thumbnails;
	}

	/**
	 * @return string
	 */
	public function getIcon(): string
	{
		return $this->icon;
	}

	/**
	 * @param string $icon
	 */
	public function setIcon(string $icon): void
	{
		$this->icon = $icon;
	}

	/**
	 * @return array
	 */
	public function getAdditionalData(): array
	{
		return $this->additional_data;
	}

	/**
	 * @param array $additional_data
	 */
	public function setAdditionalData(array $additional_data): void
	{
		$this->additional_data = $additional_data;
	}
	
	
}
