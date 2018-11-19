$(document).ready(function(){
  
  $('.header-top__toggle').click(function() {
    $('.header-top__nav').toggleClass('header-top__nav--opened');
  });

  $('.header-promo__slider').slick({
    autoplay: true,
    dots: true,
    arrows: false
	});
});
