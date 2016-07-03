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
		
		 $(".img").mouseenter(function(){
			$(this).addClass("hover");
		})
		// handle the mouseleave functionality
		.mouseleave(function(){
			$(this).removeClass("hover");
		});
		
		var setSize = function () {
			if($('.entreprenueurs-page-details .page-title .caption').length > 0){
				var $img = $('.entreprenueurs-page-details .page-title .img'),
				$caption = $('.entreprenueurs-page-details .page-title .caption');
			if($(window).width()> 990){
				$caption.height($img.height());
			}else{
				
				$caption.height('auto');
			}
				}
		};
		var teamSize = function () {
			if($('.team-pageCaption').length > 0){
				var $img = $('.team-member-image'),
				$caption = $('.team-pageCaption');	
				if($(window).width()> 1100){			
					$caption.height($img.height()-60);
				}else if($(window).width()> 765){							
					$caption.height($img.height()-40);
				}else{
					$caption.height('auto');
				}
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