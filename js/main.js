$(function () {
  "use strict";

  var $window = $(window),
  $body = $('body');

  jQuery(document).ready(function($){

      //Preloader
      $('.spinner').fadeOut(); 
      $('.preloader').delay(350).fadeOut(500);
      $body.delay(350).css({'overflow':'visible'}); 

//Background-image flickering solution for mobile
var bg = jQuery("#home");
function resizeBackground() {
  bg.height(jQuery(window).height() + 60);
}
resizeBackground();

//Parallax
$(function(){
  $('body').stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
  });
});

//Type js
var element = $(".element");
$(function() {
  element.typed({
    strings: ["Full Stack Web Developer", "Human Resources Professional", "Life-Long Learner"],
    typeSpeed: 100,
    loop: true,
  });
});

//Wow js
new WOW().init(); 

//Active Scroll
$(document).on("scroll", onScroll);
function onScroll(event){
  var scrollPos = $(document).scrollTop() + 80;
  $('.nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
} 

//Smooth Scroll
$(".nav a,#home a,#quote a,[href='#body']").on('click', function(event) {
  if (this.hash !== ""){
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  }
});

//Progress Bar
var startSkills = $('.single-skill');
startSkills.waypoint(function () {
  $(this).each(function () {
    var data = $(this).data('percent');
    $(this).find('.skill-bar-overlay').animate({
      width: data + "%"
    }, 1500);

    $(this).find('span').addClass('show').animate({
      width: data + (-20) + "%"
    }, 1500);
  });
}, {
  triggerOnce: true,
  offset: 'bottom-in-view'
});

//Magnific Popup
$('#parent').magnificPopup({
  delegate: 'a.gallery',
  type: 'image',
  closeOnContentClick: true,
  gallery: {enabled: true}
});

//Mixitup
$('#parent').mixItUp();

//Hoverdir
if ( jQuery().hoverdir ) {
  jQuery( '.da-thumbs li' ).each( function() {
    jQuery( this ).hoverdir();
  });
}

//Counter
$('.counter').counterUp({
  delay: 1,
  time: 400
});

//Contact form
var validator=$("#form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
    },
    subject: "required",
    message: "required",
  },

  messages: {
    name: "Please enter your name",
    email: "Please enter a valid email address",
    subject: "Please enter a subject",
    message: "Please enter your message"
  }
});
$(".send-btn").on("click touchstart", function () {
  $("#form").css("color", "#ac4b49");
});

//Google Map
var myCenter = new google.maps.LatLng(38.967524,-95.235927);
function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:13,
    scrollwheel:false,
    draggable:true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
  var marker = new google.maps.Marker({
    position:myCenter,
    icon: 'images/star-icon.png',
  });
  marker.setMap(map);
  marker.setAnimation(google.maps.Animation.BOUNCE);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Scroll-to-up
$('#scroll-up').hide();
$window.on("scroll", function () {
  if ($window.scrollTop() > 300) {
    $('#scroll-up').fadeIn();
  } else {
    $('#scroll-up').fadeOut();
  }
  //Scroll NavBar
  if ($window.scrollTop() > 160) {
    $('nav').addClass("scroll");
  } else {
            //remove the background property
            $('nav').removeClass("scroll");
          }
        });
$('#scroll-up').on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

}(jQuery));
});

/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Velocity - Personal Portfolio Template
 Version         : 2.0 
 Author          : bootWeb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb
===========================================================================
*/
