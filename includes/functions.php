<?php
/**
 * Functions here
 *
 * @package EasyDropBoxIntegration
 */

/**
 * Check if Pro Version Installed
 */
function udpb_has_pro() {
	return defined( 'EASY_DROPBOX_INTEGRATION_PRO_VERSION' );
}

/**
 * Get Settings
 *
 * @param string $key Key of the setting.
 * @param mixed $default Default value.
 * @return mixed
 */
function edbi_get_settings( $key = null, $default = null ) {
	$settings = get_option( 'easy_dropbox_integration_settings', array() );

	if ( ! isset( $settings['notificationEmail'] ) ) {
		$settings['notificationEmail'] = get_option( 'admin_email' );
	}

	if ( ! isset( $settings['emailReportRecipients'] ) ) {
		$settings['emailReportRecipients'] = get_option( 'admin_email' );
	}

	if ( empty( $settings ) && ! empty( $default ) ) {
		return $default;
	}

	if ( empty( $key ) && ! empty( $settings ) ) {
		return $settings;
	}

	return isset( $settings[ $key ] ) ? $settings[ $key ] : $default;
}

/**
 * Recursive sanitation for text or array
 * 
 * @param $array_or_string (array|string)
 * @since  0.1
 * @return mixed
 */
function edbi_sanitize_text_or_array_field( $array_or_string ) {
	// var_dump( $array_or_string );
    if( is_string( $array_or_string ) ) {
        $array_or_string = sanitize_text_field( $array_or_string );
    } elseif ( is_array( $array_or_string ) ) {
        foreach ( $array_or_string as $key => &$value ) {
            if ( is_array( $value ) ) {
                $value = edbi_sanitize_text_or_array_field($value);
            }
            else {
                $value = sanitize_text_field( $value );
				// $value = $value;
            }
        }
    }

    return $array_or_string;
}

function edbi_vd() {
	$args = func_get_args();
	echo '
		<style>
			pre {
				background: #f5f5f5;
				padding: 10px;
				border: 1px solid #ddd;
				margin: 10px 0;
				overflow: auto;
				padding-left: 200px;
				max-height: 700px;
				overflow-y: auto;
				position: fixed;
				bottom: 0;
				right: 0;
				z-index: 9999;
				left: 0;

			}
		</style>
	';
	foreach ( $args as $arg ) {
		echo '<pre>';
		__LINE__;
		__FILE__;
		var_dump( $arg );
		echo '</pre>';
	}
}
