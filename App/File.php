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
	 * Constructor
	 */
	protected function __construct() {
	}

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

		// Set Size.
		$this->set_size( $this->is_dir() ? 0 : $file_data->size );

		// Set Last Edited.
		if ( isset( $file_data->client_modified ) ) {
			$this->set_last_edited( strtotime( $file_data->client_modified ) );
		}

		ud_vd( $path_info );


		return $this;

	}
}
