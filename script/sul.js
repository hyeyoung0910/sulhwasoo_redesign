var swiper = new Swiper(".mySwiper1", {
    speed: 800, 
    loop: true,
    autoplay: {
       
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".mySwiper1 .swiper-pagination",
        clickable: true,
    },
});


$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.wrap').addClass('bg');
        }
        else {
            $('.wrap').removeClass('bg');
        }
    });
});

//content3 best product   
AOS.init({
    duration: 1000,
});
 
// content 4 - product

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".con4 .swiper-button-next",
      prevEl: ".con4 .swiper-button-prev",
    },
  });




//content7 instagram-sns

(function ($) {
    $(function () { //on DOM ready 
        $(".slide1").simplyScroll({
            customClass: 's1',
            direction:	'forwards', 
            // 	'forwards' 'backward' 있음
            frameRate: 1000,
            speed: 1
        });
    });



})(jQuery);
