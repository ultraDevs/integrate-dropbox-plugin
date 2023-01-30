( function( $ ) {
	var settings = $('.ud-stickylist-panel').attr('data-settings');
	settings = JSON.parse(settings);

	var position = settings.position || 'left',
		containerWidth = settings.width || 300,
		animSpeed = 500,
		easing = "";
	
	var opener = $('.ud-ud-id-opener, .ud-ud-id-opener-menu'),
		content = $('.ud-ud-id-content'),
		overlay = $('.ud-ud-id-overlay'),
		openIcon = opener.find('.ud-ud-id-pi-o'),
		hideIcon = opener.find('.ud-ud-id-pi-h');
		
	overlay.on( 'click', function(e) {
		e.preventDefault();
		$( this ).fadeOut( animSpeed );
		opener.removeClass('ud-ud-id-opener-open');
		openIcon.show();
		hideIcon.hide();
		var animationO = {};
		animationO[position] = -containerWidth + 'px';

		content.animate( animationO, animSpeed, easing );

		animationO[position] = '0px';
		opener.animate( animationO, animSpeed, easing );
	});
	
	opener.on( 'click', function(e) {
		e.preventDefault();
		var animationO = {};
		if ( $( this ).hasClass('ud-ud-id-opener-open') ) {

			$( '.ud-ud-id-overlay' ).fadeOut( animSpeed );
			$(this).removeClass('ud-ud-id-opener-open');
			openIcon.show();
			hideIcon.hide();
			animationO[position] = '0px';
			$( this ).animate( animationO, animSpeed, easing );
			animationO[position] = -containerWidth + 'px';
			content.animate( animationO, animSpeed, easing );
			
		} else {
			$( '.ud-ud-id-overlay' ).fadeIn( animSpeed );
			$( this ).addClass('ud-ud-id-opener-open');
			openIcon.hide();
			hideIcon.show();
			animationO[position] = containerWidth + 'px';
			$( this ).animate( animationO, animSpeed, easing );
			animationO[position] = '0px';
			content.animate( animationO, animSpeed, easing );
		}
	});
		
})( jQuery );