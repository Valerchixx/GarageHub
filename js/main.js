$(document).ready(function(){
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 2,
        margin: 20,
        responsive:{
            540:{
                items: 1,
                nav:true
            }
        }
    });
    $('.next').click(() => owl.trigger('next.owl.carousel'))

    $('.prev').click(() => owl.trigger('prev.owl.carousel'))

  });

