var continue_hidden = false;
var info_text_offset = 0;
var info_text_offseted = false;
var corrected_offset = 0;

$(document).ready(function () {
    var wh = window.innerHeight;
    var ww = window.innerWidth;

    var hh = $('#header').height();
    $('#main-title').css({'height': ((wh - hh) * 0.9) + 'px'});
    $('#continue').css({'height': ((wh - hh) * 0.1) + 'px'});
    $('#continue-support').css({'height': ((wh - hh) * 0.1) + 'px'});

    $info_text = $('#info-text');
    $info_text.css({'height': (wh * 0.2) + 'px'});
    info_text_offset = $info_text.offset().top;
    corrected_offset = $('#correted').offset().top;

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
        var info_distance = info_text_offset - $(document).scrollTop();
        var corrected_distance = corrected_offset - $(document).scrollTop();

        if (info_distance <= 0) {
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

        if (info_distance < (hh + (wh - hh) * 0.9)) {
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

        if (corrected_distance) {
            
        }
    });
});
