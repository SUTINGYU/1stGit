
jQuery(document).ready(function($) {

	 $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

// $("#showModal").click(function() {
//   $(".modal").addClass("is-active");  
// });

// $(".modal-close").click(function() {
//    $(".modal").removeClass("is-active");
// });
// import Typed from 'typed.js';

// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }

// var typed = new Typed(".element", options);

$("#typed").typed({
    strings: ["a programmer.", "a singer.", "a dancer.", "Yuting."],
    typeSpeed: 50,
    callback: function(){
        lift();

    }
});
function lift(){
    $(".head-text").addClass("lift-text");
}
