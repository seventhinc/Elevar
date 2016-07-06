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

		$(".img").mouseenter(function () {
				$(this).addClass("hover");
			})
			// handle the mouseleave functionality
			.mouseleave(function () {
				$(this).removeClass("hover");
			});
if($('#numberSlider').length > 0){
		$('#numberSlider').bxSlider({
			auto:true,
			mode:'vertical',
			infiniteLoop:true,
			responsive:true,
			touchEnabled: true,
			controls:false,
			pager:false
		});
	}
		$("#contactForm").submit(function () {
			var formValid = false,
				nameValid = false,
				emailValid = false,
				messageValid = false,
				name = $('#name').val(),
				email = $('#email').val(),
				organization = $('#organization').val(),
				message = $('#message').val(),
				nameReg = /^[a-zA-Z ]+$/,
				emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if(nameReg.test(name)){
				nameValid= true;
				$('.name .validationError').hide();
			}else{
				$('.name .validationError').text('Please enter a valid Name').show();
			}
			
			if(emailReg.test(email)){
				emailValid= true;
				$('.email .validationError').hide();
			}else{
				$('.email .validationError').text('Please enter a valid email address').show();
			}
			if(message != ''){
				messageValid= true;
				$('.message .validationError').hide();
			}else{
				$('.message .validationError').show();
			}
			
			if(nameValid && emailValid && messageValid){
				formValid = true
			}else{
				formValid = false
				return false;
			}
			
			if (formValid) {
				var url = "contact.php?" + "name=" + name + "&message=" + message + "&email=" + email + "&organization=" + organization;
				$.ajax({
					type: "POST",
					url: url,
					contentType: false,
					processData: false,
					beforeSend: function () {
						$('#contactForm').find('.message').html('<img src="images/loading.gif" alt="loading">');
					},
					success: function (data) {
						$('#contactForm').find('.message').html('Your message has been sent successfully.');
						$("#contactForm")[0].reset();
					}
				});
			}
			return false; // avoid to execute the actual submit of the form.
		});


		var setSize = function () {
			if ($('.entreprenueurs-page-details .page-title .caption').length > 0) {
				var $img = $('.entreprenueurs-page-details .page-title .img'),
					$caption = $('.entreprenueurs-page-details .page-title .caption');
				if ($(window).width() > 990) {
					$caption.height($img.height());
				} else {

					$caption.height('auto');
				}
			}
		};
		var teamSize = function () {
			if ($('.team-pageCaption').length > 0) {
				var $img = $('.team-member-image'),
					$caption = $('.team-pageCaption');
				if ($(window).width() > 1100) {
					$caption.height($img.height() - 60);
				} else if ($(window).width() > 765) {
					$caption.height($img.height() - 40);
				} else {
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