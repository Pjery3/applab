$(function(){

    $('.client__members-wrapper').slick({
        infinite: false
    });
    
    $('.wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
});