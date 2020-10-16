
$('#myCarousel1').carousel({
  interval: false,
});




      // navigation starts here
      $("#toggle").click(function() {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $("#resize ul li a").click(function() {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $(".close-btn").click(function() {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      // navigation ends here

      // nav animation

      TweenMax.from("#brand", 1, {
            delay: 0.4,
            y: -10,
            opacity: 0,
            ease: Expo.easeInOut
      })

      TweenMax.staggerFrom("#menu li a", 1, {
            delay: 0.4,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1);

      // nav animation ends

    // active links

      $( document ).ready(function() {
    var urlArray = window.location.pathname.split( '/' );
    var pagAtual =urlArray[urlArray.length -1];
    $("a[href*="+pagAtual+"]").css("color","#67E8A7");
  });


  // Trigger CSS animations on scroll.

jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 700 ) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};

  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

// back to top

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
