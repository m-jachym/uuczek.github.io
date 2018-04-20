$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('header').addClass('black');
    }
    else {
        $('header').removeClass('black');
    }
})
$(document).ready(function(){
    $('.menu').click(function(){
        $('header ul').toggleClass('active');
    })
})
$(document).ready(function(){
    $('.menu').click(function(){
        $('header img').toggleClass('nodisp');
    })
})