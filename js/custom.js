$( document ).ready(function() {

    $('#btnBuyEn').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $("#formZipcode").mask("99999");

    $('#formBuy').validate({
        submitHandler: function(form) {
            $.ajax({   	
                url: "php/sendEmail.php",
                type: "POST",
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                data: $(form).serialize(),
            });    		
        },
        rules:{
            formName: {
                required: true,
                minlength: 7
            },
            formEmail: {
                required: true,
                email: true
            },
            formAdress: {
                required: true,
                minlength: 20
            },
            formCountry: {
                required: true,
                minlength: 5
            },
            formText: {
                required: true,
                minlength: 20
            },
            formZipcode: {
                required: true,
                number: true
            }
        }
    });
});