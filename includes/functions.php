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
