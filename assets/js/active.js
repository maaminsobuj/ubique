
/*
------------------------------------------
   ------------------------------------------
Template Name: " "
Template URI: http://sobuj4u.com
Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
Author: Al Amin Sobuj
Author URI: http://sobuj4u.com
Version: 1.0
File Name : Active Js File
   ------------------------------------------
------------------------------------------
*/

(function ($) {
  "use strict";
  jQuery(document).ready(function($){

    // Toggle Button
    // const checkbox = document.querySelector('input[type="checkbox"]');
    // checkbox.addEventListener('change', () => {
    //     console.log("Toggle is now:", checkbox.checked ? "ON" : "OFF");
    // });

    // Hero Slider
    $('.hero-slider').slick({
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="arrow-btn arrow-btn__prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg></span>',
        nextArrow: '<span class="arrow-btn arrow-btn__next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg></span>',

    }).slickAnimation();

    // Testimonial Slider
    $('.testimonial__active').slick({
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,

        prevArrow: '<span class="arrow-btn arrow-btn__prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /> </svg></span>',

        nextArrow: '<span class="arrow-btn arrow-btn__next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg></span>',

    }).slickAnimation();

    $('.partnerLogo__active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          }
        ]
    });


  });

//   jQuery(window).load(function(){

//   });

}(jQuery));