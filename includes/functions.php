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
	$settings = get_option( 'easy_dropbox_intregration_settings', array() );

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


function ud_vd() {
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
