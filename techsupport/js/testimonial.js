// JavaScript Document
 
  $(document).ready(function(){
  	"use strict";
	  $('.testimonial, .testimonial-v2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
  autoplay:true,

});

	});

  $(document).ready(function(){
  	"use strict";
	  $('.testimonial-v3').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
  autoplay:true,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

	});