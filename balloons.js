$(function(){
    $("#toast").toast("hide");
    $('#birthday').pickadate({ format: 'mmmm, d' });
     // uncheck all checkboxes (FireFox)
     $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    $("#red").hover(function(){
    $("#testRed").css("color", "red");
    });
    $("#blue").hover(function(){
        $("#testBlue").css("color", "blue");
        });
        $("#green").hover(function(){
            $("#testGreen").css("color", "green");
            });
            var rando = Math.floor((Math.random() * 3) + 1);
            // alert(rando);
            if(rando == 1){
                $('#animateTest').removeClass().addClass('animate__animated animate__headShake');
                $('#animateTest').addClass('animate__animated animate__headShake');
            }
            if(rando == 2){
                $('#animateTest').removeClass().addClass('animate__animated animate__wobble');
                $('#animateTest').addClass('animate__animated animate__wobble');
            }
            if(rando == 3){
                $('#animateTest').removeClass().addClass('animate__animated animate__tada');
                $('#animateTest').addClass('animate__animated animate__tada');
            }
            $("#submit").click(function(){
                if(!$("#red").prop('checked') == true && (!$("#blue").prop('checked') == true && (!$("#green").prop('checked') == true))){
                    $('#toast').toast({ autohide: false }).toast('show');
                }
            });
            $("#checker").click(function(){
                if(!$("#red").prop('checked') == true && (!$("#blue").prop('checked') == true && (!$("#green").prop('checked') == true))){
                    $( "#red" ).prop( "checked", true );
                    $( "#blue" ).prop( "checked", true );
                    $( "#green" ).prop( "checked", true );
                }
               else{
                $( "#red" ).prop( "checked", false);
                $( "#blue" ).prop( "checked", false);
                $( "#green" ).prop( "checked", false);
               }
            });
            
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__ bounceInDown'):
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
});