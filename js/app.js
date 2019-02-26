var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }

// header
$(document).ready(function(){

  var showHeaderAt = 150;

  var win = $(window),
      body = $('body');

  // Show the fixed header only on larger screen devices

  if(win.width() > 400){

    // When we scroll more than 150px down, we set the
    // "fixed" class on the body element.

    win.on('scroll', function(e){

      if(win.scrollTop() > showHeaderAt) {
        body.addClass('fixed');
      }
      else {
        body.removeClass('fixed');
      }
    });

  }

});
