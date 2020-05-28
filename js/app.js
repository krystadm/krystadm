
$('#myCarousel1', '#myCarousel2', '#myCarousel3', '#myCarousel4').carousel();

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if( $(this).attr("href")=="#myCarousel1", '#myCarousel2', '#myCarousel3', '#myCarousel4') return;//This is the exception
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
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
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
      })

      TweenMax.staggerFrom("#menu li a", 1, {
            delay: 0.4,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1);

      // nav animation ends



      new WOW().init();

      var stickyElements = document.getElementsByClassName('sticky');

      for (var i = stickyElements.length - 1; i >= 0; i--) {
          Stickyfill.add(stickyElements[i]);
      }
