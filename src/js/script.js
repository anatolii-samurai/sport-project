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
      $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
        $(this)
          .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
     });
     function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
              $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
          })
      });
  };

  toggleSlide('.catalogue-item__link');
  toggleSlide('.catalogue-item__back');
});
			