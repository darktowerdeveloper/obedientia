// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    // pt-br
    // $("#formTel").mask("(999) 9999-9999");
    // world => a quantidade de caracteres aqui é referente ao maxlength permitido
    $("#formZipcode").mask("99999");

    $('#formValidate').validate({

        /* submit via ajax */
        // submitHandler: function(form) {				
        //     var sLoader = $('#submit-loader');			

        //     $.ajax({   	
        //         type: "POST",
        //         url: "inc/sendEmail.php",
        //         data: $(form).serialize(),

        //         beforeSend: function() { 
        //             sLoader.fadeIn(); 
        //         },
        //         success: function(msg) {
        //         // Message was sent
        //         if (msg == 'OK') {
        //             sLoader.fadeOut(); 
        //             $('#message-warning').hide();
        //             $('#contactForm').fadeOut();
        //             $('#message-success').fadeIn();   
        //         }
        //         // There was an error
        //         else {
        //             sLoader.fadeOut(); 
        //             $('#message-warning').html(msg);
        //             $('#message-warning').fadeIn();
        //         }
        //         },
        //         error: function() {
        //             sLoader.fadeOut(); 
        //             $('#message-warning').html("Something went wrong. Please try again.");
        //             $('#message-warning').fadeIn();
        //         }
        //     });    		
        // },

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