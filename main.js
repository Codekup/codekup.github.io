
$(document).ready(function () {

    $('.header .container div').hover(function () {
        $(this).addClass('header-btn-highlight');
    }, function () {
        $(this).removeClass('header-btn-highlight');
    });

});
