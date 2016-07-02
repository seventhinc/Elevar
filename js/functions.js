/**
 * Author : Rayees
 * Website : www.welogix.com
 * for : www.seventhinc.com
 * client : Elevar
 */

(function ($) {



	var $body, $window, $sidebar, adminbarOffset, top = false,
		bottom = false,
		windowWidth, windowHeight, lastWindowPos = 0,
		topOffset = 0,
		bodyHeight, sidebarHeight, resizeTimer,
		secondary, button;


	$(window).scroll(function () {
		if ($(window).scrollTop() < 50) {
			$('header').removeClass('onScroll');
		} else {
			$('header').addClass('onScroll');
		}
	});

	$(document).ready(function () {
		$body = $(document.body);
		$window = $(window);
		var setSize = function () {
			if($(window).width()> 990){
				$('.entreprenueurs-page-details .page-title .caption').insertAfter('.page-title .img');
				var $img = $('.entreprenueurs-page-details .page-title .img'),
				$caption = $('.entreprenueurs-page-details .page-title .caption');
				$caption.height($img.height());
			}else{
				$caption.height('auto');
				$('.entreprenueurs-page-details .page-title .caption').insertAfter('.page-content .social');
			}
		};
		var teamSize = function () {
			if($(window).width()> 1100){
				var $img = $('.team-member-image')?$('.team-member-image'):$('.team-member'),
				$caption = $('.team-pageCaption');				
				$caption.height($img.height()-60);
			}else if($(window).width()> 765){
				var $img = $('.team-member-image'),
				$caption = $('.team-pageCaption');				
				$caption.height($img.height()-40);
			}else{
				$caption.height('auto');
			}
		};

		$(window).resize(setSize); //set the function to resize
		$(window).resize(teamSize); //set the function to resize
		setSize(); //call the function now
		teamSize(); //call the function now
		

	});

	$('.navbar-toggle').on('click', function () {
		$('.navbar-header').toggleClass('open');
	});


})(jQuery);