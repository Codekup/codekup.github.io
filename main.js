
$(document).ready(function () {

    var w = window.innerWidth;
    var h = window.innerHeight;

    $('.main').css('width', w + 'px');
    $('.main').css('height', (h - $('.header').height()) + 'px');

    $('.header .container div').hover(function () {
        $(this).addClass('header-btn-highlight');
    }, function () {
        $(this).removeClass('header-btn-highlight');
    });

});
