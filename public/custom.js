$(document).ready(function(){
  $('#product-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#product-image-slider-nav'
  });
  $('#product-image-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#product-image-slider',
    dots: false,
    focusOnSelect: true
  });
});