//sliders - desctop

$('.slider-for-projects').slick({ 
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }
    ]
});


$('.slider-for-employee').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }
    ]
});

//sliders - mobile

$('.slider-for-mobile').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
});



//accordeon-desctop
$(document).ready(function(){
    $(".accordeon p").not(':first').hide();
    $(".accordeon h3").click(function() {
        $(".accordeon p").slideUp();
        $(this).next().not(":visible").slideDown();
    });
//accordeon-mobile
    $(".accordeon-mobile").not(':first').hide();
    $(".grid-item div").click(function() {
        $(".accordeon-mobile").slideUp();
        $(this).next().not(":visible").slideDown();
    });
});

