//sliders

$('.slider-for-projects').slick({ 
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true
});

$('.slider-for-employee').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
});

//accordeon
$(document).ready(function(){
    $(".accordeon p").hide().prev().click(function() {
        $(".accordeon p").slideUp();
        $(this).next().not(":visible").slideDown();
    });
});
