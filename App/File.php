<?php
/**
 * File Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
namespace ultraDevs\IntegrateDropbox\App;

use ultraDevs\IntegrateDropbox\App\Traits\Singleton;
use ultraDevs\IntegrateDropbox\App\Account;
use ultraDevs\IntegrateDropbox\App\Client;
use ultraDevs\IntegrateDropbox\App\FileAbstract;
use ultraDevs\IntegrateDropbox\Helper;

/**
 * File Class
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class File extends FileAbstract {
	use Singleton;


	/**
	 * API Data to File Data
	 *
	 * @param object $file_data File Data.
	 *
	 * @return false|array $file File.
	 */
	public function convert_api_data_to_file_data( $file_data ) {
		$this->set_id( $file_data->id );
		$this->set_name( $file_data->name );

		if ( $file_data instanceof \Kunnu\Dropbox\Models\FolderMetadata ) {
			$this->set_is_dir( true );
		}

		$path_info = Helper::get_path_info( $file_data->path_lower );

		if ( $this->is_file() && isset( $path_info['extension'] ) ) {
			$this->set_extension( $path_info['extension'] );
		}

		// Set Mime Type.
		$this->set_mimetype_from_extension();

		// Set Base Name.
		if ( $this->is_file() ) {
			$this->set_basename( str_replace( '.' . $this->get_extension(), '', $this->get_name() ) );
		} else {
			$this->set_basename( $this->get_name() );
		}

		// Set Path.
		$this->set_path( $file_data->path_lower);

		// Set Parent Path.
		if ( ! empty ( $file_data->path_lower ) ) {
			$this->set_parent( $path_info['dirname'] );
		}

		// Set Path Display.
		$this->set_path_display( $path_info['dirname'] );

		// Set Size.
		$this->set_size( $this->is_dir() ? 0 : $file_data->getSize() );

		// Set Last Edited.
		if ( isset( $file_data->client_modified ) ) {
			$this->set_last_edited( strtotime( $file_data->client_modified ) );
		}


		// Set Save AS.
		// if ( $this->is_file() && ! is_null( $file_data->export_info ) ) {
		// 	$this->set_save_as( $file_data->getExportInfo()->getExportAs() );
		// }

		// Can file be previewed via Dropbox?
		if ( Helper::can_preview_by_cloud( $this->get_extension() ) ) {
			$this->set_can_preview_by_cloud( true );
		}

		// Get Info of Sharing.
		$sharing_info = $file_data->getSharingInfo();

		// Set Permission.
		$this->set_permissions( array(
			'canDownload' => true,
			'canDelete'   => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			'canRename'   => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			'canMove'     => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			'canAdd'      => empty( $sharing_info ) ? true : ! $sharing_info->isReadOnly(),
			'canShare'    => true,
			'canPreview'  => $this->can_preview_by_cloud,
		) );

		// Set Access.
		if ( $this->is_dir() ) {
			$this->set_access(
				empty( $sharing_info ) ? true : ! $sharing_info->hasAccess 
			);
		}

		// @TODO: Set Icon.
		$this->set_icon( '' );

		// Set Thumbnail.
		if (
			Helper::can_create_thumbnail( $this->get_extension() ) ||
			$this->is_file() &&
			isset( $file_data->media_info ) && ! is_null( $file_data->getMediaInfo() )
		) {
			$this->set_has_own_thumbnail( true );
		}

		return $this;

	}
}
