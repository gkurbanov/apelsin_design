/* Slider For Product Gallery */
$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        draggable: false
    });
    $('.slider-nav').slick({
        slidesToShow: 20,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        draggable: false
    });
});