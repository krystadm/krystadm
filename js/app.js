
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

      // nav scroll transition

      $(function () {
        $(document).scroll(function () {
      	  var $nav = $("nav");
      	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      	});
      });

    // active links

      $( document ).ready(function() {
    var urlArray = window.location.pathname.split( '/' );
    var pagAtual =urlArray[urlArray.length -1];
    $("a[href*="+pagAtual+"]").css("color","#67E8A7");
  });
