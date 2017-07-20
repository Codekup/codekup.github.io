var continue_hidden = false;
var info_text_offset = 0;
var info_text_offseted = false;

$(document).ready(function () {
    var wh = window.innerHeight;
    var ww = window.innerWidth;
    var hh = $('#header').height();

    $('#main-title').css({'height': (wh - hh) + 'px'});
    $('#main-title .col-md-12').css({'height': ((wh - hh) * 0.92) + 'px'});
    $('#continue').css({'height': ((wh - hh) * 0.08) + 'px'});
    // $('#continue-support').css({'height': ((wh - hh) * 0.1) + 'px'});

    $info_text = $('#info-text');
    $info_text.css({'height': (wh * 0.2) + 'px'});
    info_text_offset = $info_text.offset().top;

    $('.scroll-div').css({'height': (wh * 0.8) + 'px'});

    var img_ratio = $('#badcode').height() / $('#badcode').width();
    $('#badcode').css({
        'width': (ww * 0.45) + 'px',
        'height': (img_ratio * ww * 0.45) + 'px'
    });
    $('#badcodecorrected').css({
        'width': (ww * 0.45) + 'px',
        'height': (img_ratio * ww * 0.45) + 'px'
    });
    $('#goodcode').css({
        'width': (ww * 0.45) + 'px',
        'height': (img_ratio * ww * 0.45) + 'px'
    });

    var top = wh * 0.6 - $('#badcode').height() / 2;
    var left = ww * 0.75 - $('#badcode').width() / 2;
    $('#badcode').css({
        'top': top + 'px',
        'left': left + 'px'
    });
    $('#badcodecorrected').css({
        'top': top + 'px',
        'left': left + 'px'
    });
    $('#goodcode').css({
        'top': top + 'px',
        'left': left + 'px'
    });

    $(window).scroll(function () {
        var distance = info_text_offset - $(document).scrollTop();

        if (distance <= 0) {
            if (!info_text_offseted) {
                $info_text.css({'position': 'fixed'});
                $('#main-title').after('<div style="height:' + (wh * 0.2) + 'px;"></div>');
                $('#badcode').css({'position': 'fixed'});
                info_text_offseted = true;
            }
        } else {
            if (info_text_offseted) {
                $('#main-title').next().remove();
                $info_text.css({'position': 'static'});
                $('#badcode').css({'position': 'static'});
                info_text_offseted = false;
            }
        }

        if (distance < (hh + (wh - hh) * 0.9)) {
            if (!continue_hidden) {
                $('#continue').hide();
                continue_hidden = true;
            }
        } else {
            if (continue_hidden) {
                $('#continue').show();
                continue_hidden = false;
            }
        }

        if (distance > -wh * 0.2) {
            $('#badcodecorrected').css({'opacity': 0});
            $('#goodcode').css({'opacity': 0});
        } else if (distance <= -wh * 0.2 && distance >= -wh * 0.6) {
            var opacity = (1 / (wh * 0.4)) * (distance + wh * 0.6);
            $('#badcodecorrected').css({'opacity': 1 - opacity});
        } else if (distance < -wh * 0.6 && distance > -wh) {
            $('#badcodecorrected').css({'opacity': 1});
            $('#goodcode').css({'opacity': 0});
        } else if (distance <= -wh && distance >= -wh * 1.4) {
            var opacity = (1 / (wh * 0.4)) * (distance + wh * 1.4);
            $('#badcodecorrected').css({'opacity': opacity});
            $('#goodcode').css({'opacity': 1 - opacity});
        } else {
            $('#badcodecorrected').css({'opacity': 0});
            $('#goodcode').css({'opacity': 1});
        }
    });
});
