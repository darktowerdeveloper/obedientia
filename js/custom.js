$( document ).ready(function() {
    console.log( "ready!" );
    
    $('#message-feedback').hide();

    $('#btnBuyEn').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    //$("#formZipcode").mask("99999");

    $('#formBuy').validate({

        /* submit via ajax */
        submitHandler: function(form) {
            
            $.ajax({   	
                url: "php/sendEmail.php",
                type: "POST",
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                data: $(form).serialize(),
			      success: function(msg) {
		               $('#message-title').hide();
		               //$('#formBuy').fadeOut();
		               $('#message-feedback').css("color", "#23b200");
		               $('#message-feedback').html("Success! We will contact you as soon as possible.");
		               $('#message-feedback').fadeIn();
			      },
			      error: function() {
		               $('#message-title').hide();
		               $('#message-feedback').css("color", "#FF0000");
    			       $('#message-feedback').html("Something went wrong. Please try again.");
    			       $('#message-feedback').fadeIn();
			      }
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
                number: true,
                minlength: 5
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