$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        // autoplay: true,
        // autoplayTimeout: 20000,
        //autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: true,
          },
          1000: {
            items: 1,
            nav: true,
            //loop: false,
          },
        },
      });

});