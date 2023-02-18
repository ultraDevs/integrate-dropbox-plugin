<?php

$state = strtr( $_GET['state'], '-_~', '+/=' );
$csrf_token = $state;
$url_state = null;
$split_pos = strpos( $state, '|' );

if ( false !== $split_pos ) {
	$csrf_token = substr( $state, 0, $split_pos );
	$url_state = substr( $state, $split_pos + 1 );
}

if ( base64_encode( base64_decode( $url_state ) ) === $url_state ) {
	$redirect_uri = base64_decode( $url_state );
} else {
	$redirect_uri = urldecode( $_GET['state'] );
}

$params = http_build_query( $_GET );
$url = $redirect_uri . '&' . $params;

header( 'Location: ' . $url );
exit;
