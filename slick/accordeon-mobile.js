$(document).ready(function(){
//accordeon-mobile
    $(".accordeon-mobile").hide().prev().click(function() {
        $(".accordeon-mobile").slideUp();
        $(this).next().not(":visible").slideDown();
    });
});