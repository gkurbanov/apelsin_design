$(document).ready(function () {
    /* Slider For Product Gallery */
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        waitForAnimate: false,
        asNavFor: '.slider-nav',
        draggable: false
    });
    $('.slider-nav').slick({
        slidesToShow: 100,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: false,
        infinite: false,
        waitForAnimate: false,
        draggable: false
    });

    /* Slider For Product Slider */
    $('.article-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        arrows: true,
        speed: 1000,
        dots: false
    });

    /* Slider For Banner Slider */
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        autoplay: false,
        speed: 1000,
        adaptiveHeight: false,
        dots: false
    });

    /* Slider For Banner Slider */
    $('.popular-product').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        autoplay: false,
        speed: 1000,
        adaptiveHeight: false,
        draggable: false,
        dots: false
    });

    /* Home Page Slider */
    $('.home-page-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      autoplay: false,
      speed: 1000,
      adaptiveHeight: false,
      draggable: true,
      dots: true
  });

    // ReadMore.Js
    $('.description-subtitle').readmore({
        speed: 300,
        collapsedHeight: 50,
        moreLink: '<a href="#">Развернуть описание</a>',
        lessLink: '<a href="#">Скрыть описание</a>',
        heightMargin: 16
    });
});


/* Input Only Number */

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

/* RangeSlider */
$(function () {
    $("#filter__range").slider({
        min: 0,
        max: 12000000,
        step: 100000,
        values: [5000, 12000000],
        range: true,
        stop: function (event, ui) {
            $("input#priceMin").val($("#filter__range").slider("values", 0));
            $("input#priceMax").val($("#filter__range").slider("values", 1));

            $('.price-range-min.value').html($("#filter__range").slider("values", 0));
            $('.price-range-max.value').html($("#filter__range").slider("values", 1));
        },
        slide: function (event, ui) {
            $("input#priceMin").val($("#filter__range").slider("values", 0));
            $("input#priceMax").val($("#filter__range").slider("values", 1));

            $('.price-range-min.value').html($("#filter__range").slider("values", 0));
            $('.price-range-max.value').html($("#filter__range").slider("values", 1));
        }
    });

    $("input#priceMin").on('change', function () {
        var value1 = $("input#priceMin").val();
        var value2 = $("input#priceMax").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#priceMin").val(value1);
            $('.price-range-min.value').html(value1);
        }
        $("#filter__range").slider("values", 0, value1);
        $('.price-range-min.value').html(value1);
    });

    $("input#priceMax").on('change', function () {
        var value1 = $("input#priceMin").val();
        var value2 = $("input#priceMax").val();
        if (value2 > 20000) {
            value2 = 20000;
            $("input#priceMax").val(35000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#priceMax").val(value2);
            $('.price-range-max.value').html(value2);
        }
        $("#filter__range").slider("values", 1, value2);
        $('.price-range-max.value').html(value2);
    });

    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1) + '</span>');
});

/* Language Select */

     

/* CheckAllCheckBox */

$(document).ready(function () {
  $('#checkboxSelectAll').click(function () {
      $('.checkboxSelectProduct').prop('checked', this.checked);
  });

  $('.checkboxSelectProduct').change(function () {
      var check = ($('.checkboxSelectProduct').filter(":checked").length == $('.checkboxSelectProduct').length);
      $('#checkboxSelectAll').prop("checked", check);
  });
});

/* CalculateProduct */

// -----------------for-Shopping-cart-------------
$(document).ready(function(){
  update_amounts();
  $('.qty, .shoping-cart__products__select-product__discounted-price').on('keyup keypress blur change', function(e) {
    update_amounts();
  });
});
function update_amounts(){
var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
    var qty = $(this).find('.qty').val();
      var price = $(this).find('.shoping-cart__products__select-product__discounted-price').val();
      var amount = (qty*price)
      sum+=amount;
      $(this).find('.amount').text(''+amount);
    });
$('.total').text(sum);
}

//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
var $n = $(this)
  .parent(".shoping-cart__products__select-product__price__button-container")
  .find(".qty");
$n.val(Number($n.val())+1 );
update_amounts();
});

var decrementQty = minusBtn.click(function() {
  var $n = $(this)
  .parent(".shoping-cart__products__select-product__price__button-container")
  .find(".qty");
var QtyVal = Number($n.val());
if (QtyVal > 0) {
  $n.val(QtyVal-1);
}
update_amounts();
});


// Read More Specification

const button = document.querySelector('#btn-specification-readmore');
const hiddenItems = document.querySelectorAll('.hidden-item');
let isHidden = true;
button.addEventListener('click', () => {
    button.textContent = isHidden
        ? 'Скрыть характеристики'
        : 'Развернуть характеристики';

    isHidden = !isHidden;
    hiddenItems.forEach(item => item.classList.toggle('hidden'));
});


/* Fixed Block Scroll */

var $win = $(window),
    $fixed = $(".fixed-elem"),
    limit = 700;

function tgl(state) {
    $fixed.toggleClass("fixed-elem-hidden", state);
}

$win.on("scroll", function () {
    var top = $win.scrollTop();

    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});

/* Favorite Heart */

var shapeClick = document.getElementById("shape").addEventListener("click", changeColor);
var clicks = 0;
function changeColor(){
  if (shape.style.fill == "red")
  {
    shape.style.fill = "#fff";
  }
  else {
    shape.style.fill = "red";
  }
}