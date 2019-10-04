// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $('#btnBuyEn').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        // var attr = $(this).attr('data-margin');
        // var margin = 70;
        // if (typeof attr !== typeof undefined && attr !== false) {
        //     // Element has this attribute
        //     margin = $(this).attr('data-margin');
        // }
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                // scrollTop: target.offset().top - margin
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // pt-br
    // $("#formTel").mask("(999) 9999-9999");
    // world => a quantidade de caracteres aqui é referente ao maxlength permitido
    $("#formZipcode").mask("99999");

    $('#formBuy').validate({

        /* submit via ajax */
        submitHandler: function(form) {
            $.ajax({   	
                type: "POST",
                url: "php/sendEmail.php",
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
        },
        // messages:{
        //     formName:{
        //         required: 'This field is required.',
        //         number: 'Numbers only in this field.',
        //         min: 'Order quantity is 15 or more.'
        //     }
        // }
    });
});