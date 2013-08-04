$(function() {
    $('input[type="text"]').focus(function() {
        $(this).parent().addClass('active');
    }).blur(function() {
        $(this).parent().removeClass('active');
    });
})
