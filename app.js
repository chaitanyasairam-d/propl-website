
var nodeArray = [
  document.querySelector('#test'),
  document.querySelector('#we-believe'),
  document.querySelector('#clients'),
  document.querySelector('#testimonials') //testimonials
];
var slideUp = {
  distance: '100%',
  origin: 'bottom',
  opacity: 0.3,
  easing: 'cubic-bezier(0.12, 0, 0.39, 0)',
  delay:500,
  duration: 1250
};
ScrollReveal().reveal(nodeArray,slideUp);
//sal();
$(function () {

        $('.close-btn').on('click',()=>{
          $('#overlay').hide(200);
          $("#experienceBtn ul").hide();
          $("#capabilityBtn ul").hide();
          $("#strategyBtn ul").hide();
        })
        $('#overlay-button').on('click',()=>{
          $('#overlay').show(200);
        })
        $('#contact-us-btn').on('click',()=>{
          $('#overlay').hide();
          $("#experienceBtn ul").hide();
          $("#capabilityBtn ul").hide();
          $("#strategyBtn ul").hide();
        })
    $(window).scroll(function () {
      var $scroll = $(this).scrollTop()
      $nav = $('#home-navbar .navbar');
      // set distance user needs to scroll before we start fadeIn
      if ($scroll > 90) { //For dynamic effect use $nav.height() instead of '100'
      $nav.removeClass('nav-bg');
        $nav.addClass('navbar-bg-onscroll').slideDown('slow');
        $('#home-navbar .navbar-brand img').attr('src','./assets/icons/Propl - dark -  logo.svg')
        $('#home-navbar .dropdown-btn span').removeClass('home-dropdown-icon')
        $('#home-navbar .dropdown-btn span').addClass('dropdown-icon')
      } else {
        $nav.addClass('nav-bg');
        $nav.removeClass('navbar-bg-onscroll').slideDown('slow');
        $('#home-navbar .dropdown-btn span').removeClass('dropdown-icon')
        $('#home-navbar .dropdown-btn span').addClass('home-dropdown-icon')
        $('#home-navbar .navbar-brand img').attr('src','./assets/icons/Propl - logo.svg')
      }
      
      $mobileNav = $('header:nth-child(1)');
      $homeMobileNav = $('.home-mobile-nav');
      $mobileFixedNav = $('.mobile-navbar-fixed');
      // set distance user needs to scroll before we start fadeIn
      if ($scroll > 80) { //For dynamic effect use $nav.height() instead of '100'
      $homeMobileNav.attr('id','mobile-navbar-fixed');
      $('.home-mobile-nav .navbar-brand img').attr('src','./assets/icons/Propl - dark -  logo.svg')
      $('.home-mobile-nav .mobile-menu #overlay-button img').attr('src','./assets/icons/hamburger - Dark.svg');
    } else {
      $homeMobileNav.attr('id','mobile-navbar');
      $('.home-mobile-nav .navbar-brand img').attr('src','./assets/icons/Propl - logo.svg')
      $('.home-mobile-nav #overlay-button img').attr('src','./assets/icons/hamburger.svg');
      
    }
    });


  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true,
    autoheight: true,
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

  $("#strategyBtn").click(function () {
    $("#strategyBtn ul").toggle(500);
    $("#experienceBtn ul").hide();
    $("#capabilityBtn ul").hide();
    console.log("startegy clicked")
  });
  $("#experienceBtn").click(function () {
    $("#strategyBtn ul").hide();
    $("#capabilityBtn ul").hide();
    $("#experienceBtn ul").toggle(500);
    console.log("experiencee clicked")
  });
  $("#capabilityBtn").click(function () {
    $("#strategyBtn ul").hide();
    $("#experienceBtn ul").hide();
    $("#capabilityBtn ul").toggle(500);
    console.log("capability clicked")
  });
  $('#success').hide()
  var href = window.location.href;
  if (href.includes('contact')) {
    $('#exampleModal').modal('show');
  }
  $('#exampleModal').on('show.bs.modal', function (e) {
    $('body').addClass("example-open");
  }).on('hide.bs.modal', function (e) {
    $('body').removeClass("example-open");
    $("#error").hide();
    $("#error_email").hide();
    $('#m-content').removeClass('orange-background');
    $('#info-submit').show();
    $('#submit-btn').prop('disabled', false);
    $('#success').hide();
    $("#spinner").hide();
    $('#user_name').val('')
    $('#user_email').val('')
    $('#user_message').val('')
    $('#error').removeClass('mt-0');
    $('#submit-btn').removeClass('mt-2');
  })
  $('#success').hide();
  $("#error").hide();
  $("#error_email").hide();
  $("#spinner").hide();
  $('#submit-btn').click(function () {
    submitForm();
  });
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  function submitForm() {
    let name = $('#user_name').val();
    let email = $('#user_email').val();
    let message = $('#user_message').val();
    var mail = isEmail(email)
    if (!mail && email.length) {
      $("#error_email").show();
      $('#error_email').addClass('mt-0');
      $('#submit-btn').addClass('mt-2');
      $("#error").hide();
      return;
    }
    if (!name.length || !email.length || !message.length) {
      $("#error_email").hide();
      $('#error').addClass('mt-0');
      $("#error").show();
      $('#submit-btn').addClass('mt-2');
      return;
    }
    $("#error_email").hide();
    $("#error").hide();
    $('#error').removeClass('mt-0');
    $('#submit-btn').removeClass('mt-2');
    $('#submit-btn').prop('disabled', true);
    $("#spinner").show();
    var service_id = "default_service";
    var template_id = "template_SrRZ0fEy"; //prod server
    var user_id = "user_8Uba2Fxf8q0A8BvlOjV5N";//prod server
    //var template_id = "template_i2YiDv4m"; //testing server
    //var user_id = "user_o1SY3Yz3mI8GWtJeuZhIQ"; //testing server
    let data = {
      service_id, 
      template_id,
      user_id,
      template_params: {
        "from_name": name,
        "from_email": email,
        "message": message
      }
    };
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      $('#m-content').addClass('orange-background').show();
      $('#info-submit').hide();
      $('#submit-btn').prop('disabled', true);
      $('#success').show();
      $("#spinner").hide();
    }).fail(function (error) {
      alert('Oops... ' + JSON.stringify(error));
      $('#submit-btn').prop('disabled', true);
      $("#spinner").hide();
    });
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});