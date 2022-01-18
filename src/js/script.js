$(document).ready(function(){
  $('.carausel__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></img></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="../icons/right.png"></img></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows:false
        }
      },
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
			