$(function (){

    var animateArray = ['animate__bounce', 'animate__flash', 'animate__pulse', 
    'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 'animate__headShake', 'animate__swing', 'animate__tada',
    'animate__wobble', 'animate__jello', 'animate__heartBeat']
    var randomClass = Math.round(Math.random()*12)-1;

    $('#happy-birthday').addClass('animate__animated ' + animateArray[randomClass]);

    $('#birthday').pickadate();
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
      // check/uncheck all boxex
      $('#check-all').on('click', function(){
        $('.form-check-input').is(':checked')? $('.form-check-input').prop('checked', false):
           $('.form-check-input').prop('checked', true);           
   })
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    //change color of happy birthday on mouseover
    $('.form-check-label').on('mouseover', function(){
        $('h1').css('color', this.id);
    })
    $('.form-check-label').on('mouseout', function(){
        $('h1').css('color', 'slategray');
    })
    // toast if no balloons are checked
    $('#submit').on('click', function(){
        if ($(".form-check-input:checked").length == 0){
            $('#toast').toast({ autohide: false }).toast('show');
        }
    })
})