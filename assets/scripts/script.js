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
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        draggable: false
    });
});

/* Slider For Product Slider */

$(document).ready(function(){
    $('.article-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        arrows: true,
        speed: 1000,
        dots: false
    });
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

// Read More Description

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Развернуть описание";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть описание";
      moreText.style.display = "inline";
    }
  }
