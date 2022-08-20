$(document).ready(function(){
  $(".carousel-price").owlCarousel({
    center: true,
    items:1
  });
  $(".carousel-about").owlCarousel({
    items:2,
    margin: 10,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      }
  }
  });
  $('.next').click(() => $(".carousel-about").trigger('next.owl.carousel'))

  $('.prev').click(() => $(".carousel-about").trigger('prev.owl.carousel'))

  $('.next').click(() => $(".carousel-price").trigger('next.owl.carousel'))

  $('.prev').click(() => $(".carousel-price").trigger('prev.owl.carousel'))
});

