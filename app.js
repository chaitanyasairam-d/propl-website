$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: true,
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
      $("#experienceBtn ul").hide();
      $("#capabilityBtn ul").hide();
      $("#strategyBtn ul").hide();
      
      $("#strategyBtn").click(function(){
        $("#strategyBtn ul").toggle(500);
        $("#experienceBtn ul").hide();
        $("#capabilityBtn ul").hide();
        console.log("startegy clicked")
      });
      $("#experienceBtn").click(function(){
        $("#strategyBtn ul").hide();
        $("#capabilityBtn ul").hide();
        $("#experienceBtn ul").toggle(500);
        console.log("experiencee clicked")
      });
      $("#capabilityBtn").click(function(){
        $("#strategyBtn ul").hide();
        $("#experienceBtn ul").hide();
        $("#capabilityBtn ul").toggle(500);
        console.log("capability clicked")
      });
});