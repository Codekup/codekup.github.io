var info_text_offset = 0;
var info_text_offseted = false;

$(document).ready(function () {
    var wh = window.innerHeight;
    var hh = $('#header').height();
    $('#main-title').css({'height': (wh - hh) + 'px'});

    $info_text = $('#info-text');
    $info_text.css({'height': (wh * 0.25) + 'px'});
    info_text_offset = $info_text.offset().top;

    $('.scroll-div').css({'height': (wh * 0.75) + 'px'});

    $(window).scroll(function () {
        var distance = info_text_offset - $(document).scrollTop();
        if (distance <= 0) {
            if (!info_text_offseted) {
                $info_text.css({
                    'position': 'fixed'
                });
                $('#main-title').after('<div style="height:' + (wh * 0.25) + 'px;"></div>');
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
    });
});
