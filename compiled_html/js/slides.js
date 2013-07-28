click_caused_change = false;
hovering_over_slides = false;

function print(x){
    console.log(x);
}

$(function() {
    $('#slide-thumbs .slidethumb a').mouseup(function(e){
        e.preventDefault();
        click_caused_change  = true;
        var n = $(this).parent().parent().attr('data-person');
        go_to_slide(n);
    });

    $('#slides').mouseenter(function() {
        hovering_over_slides = true;
    }).mouseleave(function() {
        hovering_over_slides = false;
    });
    var interval = setInterval(auto_change_slide, 4000);
});

function go_to_slide(num) {
    var class_prefix = '.slide-item.person';
    var cls = class_prefix + num;
    var elt_clicked = $('#slide-thumbs .slidethumb:nth-child(' + num + ') a')

    if (!$(cls).hasClass('active')) {
        $('#slide-thumbs .slidethumb a').removeClass('active');
        elt_clicked.addClass('active');
        $('.slide-item.active').fadeOut().promise().done(function() {
            $(this).removeClass('active');
        });
        $(cls).fadeIn().addClass('active');
    }
}

function increment_slide() {
    var n = $('#slide-thumbs .slidethumb a.active').parent().parent().attr('data-person');
    go_to_slide((n % 4) + 1);
}

function auto_change_slide() {
    if (click_caused_change || hovering_over_slides) {
        click_caused_change = false;
        return;
    }

    else {
        click_caused_change = false;
        increment_slide();
    }
}
