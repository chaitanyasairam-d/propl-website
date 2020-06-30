(function($) {
    'use strict';
    $(window).on('load', function() {
        $('#loader').delay(200).fadeOut('slow', function() {
            $(this).remove();
        });

    }); // $(window).on end
    // var offset = $('.target').offset();
    // if (offset) {
    //   var scrollto = offset.top - 50; // fixed_top_bar_height = 50px
    //   $('html, body').animate({
    //     scrollTop: scrollto
    //   }, 0);

    // }
    /**************************
     * Loader initialization
     ***************************/
    var bounceVars = {
        y: -150,
        ease: Sine.easeOut
    };

    var shadowVars = {
        transformOrigin: 'center',
        scale: .75,
        autoAlpha: .25,
        ease: Sine.easeOut
    };

    var flattenVars = {
        transformOrigin: 'bottom',
        scaleY: .7,
        repeat: 1,
        yoyo: true,
        ease: Circ.easeOut
    };

    var bounce = new TimelineMax({
            repeat: 1,
            yoyo: true
        }),
        master = new TimelineMax({
            repeat: -1
        });

    bounce
        .to('#ball', 1, bounceVars)
        .to('#shadow', 1, shadowVars, 0)

    master
        .add(bounce)
        .to('#ball', .1, flattenVars)
        .timeScale(2);

    /***************************************
     *    To show and hide the Technologies 
     ***************************************/
    $('.tech_list').hide();
    $('#all').fadeIn('slow');
    $('.btn-tech').first().addClass('btn-tech-active');

    $(".btn-tech").click(function(e) {
        e.preventDefault();
        $('.tech_list').hide();
        $('.btn-tech').removeClass('btn-tech-active');
        var $id = $(this).attr('id');
        $('#' + $id).addClass('btn-tech-active');
        $('#' + $(this).data('rel')).fadeIn('slow');
    });
    /******************************************
     *    To hilight the label on input focus
     ******************************************/
    $("form :input").focus(function() {
        $("label[for='" + this.id + "']").addClass("labelfocus");
    }).blur(function() {
        $("label").removeClass("labelfocus");
    });

    /**********************************************
     *  navbar fixed after 200px scroll 
     **********************************************/

    /************************************************
     * Smooth scroll initialize
     ***********************************************/

    $('a[href^="#"]').click(function(event) {

        // The id of the section we want to go to.
        var id = $(this).attr("href");

        // An offset to push the content down from the top.

        var offset = 109;
        let screenWidth = $(window).width();
        if (screenWidth >= 375 && screenWidth < 1000) {
            offset = 90;
        } else if (screenWidth <= 360) {
            offset = 60;
        }

        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({
            scrollTop: target
        }, 500);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });
    /******************************************
     *  Ajax for form submit
     ******************************************/
    $('.btn-contact').click(function(e) {
        let name = $('#name').val(),
            email = $('#email').val(),
            phone = $('#number').val(),
            message = $('#message').val();
        if (!name || !email || !phone || !message) {
            Swal.fire({
                type: 'error',
                text: 'Please Check Your Entries!',
            })
        } else {
            $.ajax({
                type: "GET",
                url: "https://devapi.blueskyinvent.com/app1/em/mail",
                data: {
                    name,
                    email,
                    phone,
                    message
                },
                dataType: "json",
                success: function(data) {
                    swal.fire("Thanks for contacting us!", "We will be in touch with you shortly.", "success");
                },
                error: function(textStatus, errorThrown) {
                    Success = false; //doesnt goes here
                }
            });
            e.preventDefault();
            $(this).get(0).reset();
        }

    });

    /**
     * mobile view navbar dropdown toggle
     * 
     */
    $("#experienceBtn ul").hide();
    $("#capabilityBtn ul").hide();
    $("#strategyBtn ul").hide();
    
    $("#strategyBtn").click(function(){
      $("#strategyBtn ul").toggle();
      $("#experienceBtn ul").hide();
      $("#capabilityBtn ul").hide();
      console.log("startegy clicked")
    });
    $("#experienceBtn").click(function(){
      $("#strategyBtn ul").hide();
      $("#capabilityBtn ul").hide();
      $("#experienceBtn ul").toggle();
      console.log("experiencee clicked")
    });
    $("#capabilityBtn").click(function(){
      $("#strategyBtn ul").hide();
      $("#experienceBtn ul").hide();
      $("#capabilityBtn ul").toggle();
      console.log("capability clicked")
    });

})(jQuery);