var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }

// day
var d = new Date ();
var day = d.getDay();

document.getElementById("greeting").innerHTML = day;

if ( day == 0){greeting = "HAPPY SUNDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

if ( day == 1){greeting = "HAPPY MONDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

if ( day == 2){greeting = "HAPPY TUESDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

if ( day == 3){greeting = "HAPPY WEDNESDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

if ( day == 4){greeting = "HAPPY THURSDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

if ( day == 5){greeting = "HAPPY FRIDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

if ( day == 6){greeting = "HAPPY SATURDAY AND WELCOME TO MY WEBSITE! :-)"};
document.getElementById("greeting").style.color = "#c3c3c3"
 document.getElementById("greeting").style.fontSize = "25px"
 document.getElementById("greeting").style.fontFamily = "monospace"

document.getElementById("greeting").innerHTML = greeting;
