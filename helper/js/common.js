$(document).ready(function () {
    /* Calculator */
    $('.calculator').on('change', 'input', function () {
        var strategy = $('.strategy').find('input:checked').val();
        var term = $('.term').find('input:checked').val();
        var package = $('.package').find('input:checked').val();

        var percent, investment, returntotal, returnsumm;

        switch(strategy) {
            case 'start':
                break;
            case 'optim':
                break;
            case 'super':
                break;
        }
        switch(term) {
            case '12mnth':
                break;
            case '18mnth':
                break;
            case '24mnth':
                break;
        }
        switch(package) {
            case '2500':
                investment = '$2500';
                break;
            case '5000':
                investment = '$5000';
                break;
            case '15000':
                investment = '$15000';
                break;
            case '25000':
                investment = '$25000';
                break;
            case '50000':
                investment = '$50000';
                break;
        }

        // Insert new value
        $('.calc-result').find('.percent span').html(percent);
        $('.calc-result').find('.investment span').html(investment);
        $('.calc-result').find('.return-total span').html(returntotal);
        $('.calc-result').find('.return-summ span').html(returnsumm);

    });

    /* Graph animations */
    $(window).scroll(function() {
        show_graph();
    });
    show_graph();

    /* Validate forms */
    $('.contact-form.message').on('submit', function() {
        var valid = true;
        var fld_name = $(this).find('input[name="name"]');
        var fld_email = $(this).find('input[name="email"]');
        var fld_subject = $(this).find('input[name="subject"]');
        var fld_message = $(this).find('textarea[name="message"]');
        var email_pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if($.trim(fld_name.val()).length == 0) {
            fld_name.addClass('error-fld');
            $('.name-error').show().text('Поле не может быть пустым!');
            valid = false;
        }
        if($.trim(fld_email.val()).length == 0) {
            fld_email.addClass('error-fld');
            $('.email-error').show().text('Поле не может быть пустым!');
            valid = false;
        } else if(!email_pattern.test(fld_email.val())) {
            fld_email.addClass('error-fld');
            $('.email-error').show().text('Введите действительный email!');
            valid = false;
        }
        if($.trim(fld_subject.val()).length == 0) {
            fld_subject.addClass('error-fld');
            $('.subject-error').show().text('Поле не может быть пустым!');
            valid = false;
        }
        if($.trim(fld_message.val()).length == 0) {
            fld_message.addClass('error-fld');
            $('.message-error').show().text('Поле не может быть пустым!');
            valid = false;
        }

        return valid;
    });
    $('.contact-form.subscribe').on('submit', function() {
        var valid = true;
        var fld_subscribe = $(this).find('input[name="subscribe"]');
        var email_pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if($.trim(fld_subscribe.val()).length == 0) {
            fld_subscribe.addClass('error-fld');
            $('.subscribe-error').show().text('Поле не может быть пустым!');
            valid = false;
        } else if(!email_pattern.test(fld_subscribe.val())) {
            fld_subscribe.addClass('error-fld');
            $('.subscribe-error').show().text('Введите действительный email!');
            valid = false;
        }

        return valid;
    });

    $('input, textarea').on('focus', function() {
        $(this).removeClass('error-fld');
        $(this).parents('li').find('.error-msg').hide();
    });

    /* Slider from tab ICO */
    $("#slider_ico").owlCarousel({
        loop: false,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            768:{
                items: 2,
                nav: false
            },
            992:{
                items: 3,
                nav: true
            }
        }
    });
});
var gr1_load = true;
var gr2_load = true;

function show_graph() {
    if(come(".graph1") && gr1_load) {
        var gr1_iframe = $(".graph1").find('iframe');
        gr1_iframe.attr("src", gr1_iframe.data("src"));
        gr1_load = false;
    }
    if(come(".graph2") && gr2_load) {
        var gr2_iframe = $(".graph2").find('iframe');
        gr2_iframe.attr("src", gr2_iframe.data("src"));
        gr2_load = false;
    }
}

function come(elem) {
    var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).outerHeight();

    return (((elemBottom <= docViewBottom) && (elemBottom >= docViewTop)) || ((elemTop <= docViewBottom) && (elemTop >= docViewTop)));
}

function cons(msg) {
    console.log(msg);
}