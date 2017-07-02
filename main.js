$(document).ready(function () {
    var wh = window.innerHeight;
    var hh = $('#header').height();
    $('#main-title').css('height', (wh - hh) + 'px');
});
