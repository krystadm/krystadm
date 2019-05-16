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

 // slide

 (function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
