$(document).ready(() => {
    $('.menu-btn').click(function(e){
        e.preventDefault();
        $('.navbar').toggleClass('show');
    });
})

$('.navbar li a').click(function (e) {
    e.preventDefault();
    $('.navbar').removeClass('show');
})