let scroll = false;
let prevSlide = 0;
const duration = 700; // время в мс

$(document).ready(function () {
  $(".main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    swipe: false,
  });

  $(".nav-header__item").click(function (e) {
    e.preventDefault();

    $(".nav-header__item")[prevSlide].classList.remove("active");
    $(this).addClass("active");

    headerItem = $(this).index();
    prevSlide = headerItem;
    $(".main").slick("slickGoTo", parseInt(headerItem));
  });

  $(".main").on("wheel", function (e) {
    e.preventDefault();
    if (!scroll) {
      scroll = true;
      $slider = $(this);
      setTimeout(function () {
        e.originalEvent.deltaY > 0
          ? $slider.slick("slickNext")
          : $slider.slick("slickPrev");
        addActiveClass($(".slick-current").index());
        scroll = false;
      }, duration);
    }
  });
  function addActiveClass(currentSlide) {
    $(".nav-header__item")[prevSlide].classList.remove("active");
    $(".nav-header__item")[currentSlide].classList.add("active");
    prevSlide = currentSlide;
  }

  // slide-work
  $('.slide-work').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slide-work_nav',
  });
  $('.slide-work_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide-work',
    centerMode: true,
    focusOnSelect: true,
    infinite: true
  });
});
