jQuery( function( $ ) {
    var file_uploader;
    file_uploader = wp.media.frames.file_frame = wp.media({
        title: jQuery( this ).data( 'uploader_title' ),
        button: {
            text: jQuery( this ).data( 'uploader_button_text' ),
        },
        multiple: false  // Set to true to allow multiple files to be selected
        });

    console.log(file_uploader);
});