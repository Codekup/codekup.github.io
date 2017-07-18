var continue_hidden = false;
var info_text_offset = 0;
var info_text_offseted = false;

$(document).ready(function () {
    var wh = window.innerHeight;
    var hh = $('#header').height();

    $('#main-title').css({'height': ((wh - hh) * 0.9) + 'px'});
    $('#continue').css({'height': ((wh - hh) * 0.1) + 'px'});
    $('#continue-support').css({'height': ((wh - hh) * 0.1) + 'px'});

    $info_text = $('#info-text');
    $info_text.css({'height': (wh * 0.2) + 'px'});
    info_text_offset = $info_text.offset().top;

    $('.scroll-div').css({'height': (wh * 0.8) + 'px'});

    $(window).scroll(function () {
        var distance = info_text_offset - $(document).scrollTop();

        if (distance <= 0) {
            if (!info_text_offseted) {
                $info_text.css({
                    'position': 'fixed'
                });
                $('#main-title').after('<div style="height:' + (wh * 0.2) + 'px;"></div>');
                info_text_offseted = true;
            }
        } else {
            if (info_text_offseted) {
                $('#main-title').next().remove();
                $info_text.css({
                    'position': 'static'
                });
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
    });
});
