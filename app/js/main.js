$(function () {

    $('.client__members-wrapper').slick({
        infinite: false
    });

    $('.questions__tabs-wrapper .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.questions__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.questions__tabs-wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.header__burger').on('click', function(){
        $('.header__nav-menu').slideToggle();
    })
});

var acc = document.getElementsByClassName("questions__accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};
