$(document).ready(() => {
    $('.menu-btn').click(function(){
        event.preventDefault();
        $('.navbar').toggleClass('show');
    });
})

$('.navbar li a').click(function () {
    event.preventDefault();
    $('.navbar').removeClass('show');
})