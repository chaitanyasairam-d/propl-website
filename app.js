$(function () {
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
  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus');
  // });

  $('#exampleModal').on('show.bs.modal', function (e) {
    $('body').addClass("example-open");
  }).on('hide.bs.modal', function (e) {
    $('body').removeClass("example-open");
    $('#success').hide();
  })
  $('#success').hide();
  $("#error").hide();
  $("#spinner").hide();
  $('#submit-btn').click(function () {
    submitForm();
  });
  function submitForm() {
    let name = $('#user_name').val();
    let email = $('#user_email').val();
    let message = $('#user_message').val();
    if (!name.length || !email.length || !message.length) {
      $("#error").show();
      return;
    }
    $('#submit-btn').prop('disabled', true);
    $("#spinner").show();
    let data = {
      service_id: "gmail",
      template_id: "template_i2YiDv4m",
      user_id: "user_o1SY3Yz3mI8GWtJeuZhIQ",
      template_params: {
        "from_name": name,
        "reply_to": email,
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
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });