<?php
/**
 * Functions here
 *
 * @package IntegrateDropbox
 */

/**
 * Check if Pro Version Installed
 */
function udpb_has_pro() {
	return defined( 'INTEGRATE_DROPBOX_PRO_VERSION' );
}

/**
 * Get Settings
 *
 * @param string $key Key of the setting.
 * @param mixed $default Default value.
 * @return mixed
 */
function ud_idb_get_settings( $key = null, $default = null ) {
	$settings = get_option( 'ud_integrate_dropbox_settings', array() );

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
	foreach ( $args as $arg ) {
		echo '<pre>';
		var_dump( $arg );
		echo '</pre>';
	}
}
