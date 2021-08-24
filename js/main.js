$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
    });


    $('.btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });


    $("#menu, #myNav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });


});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const btnSendForm = document.querySelector('.form_btn');

btnSendForm.addEventListener('click', () => {

})