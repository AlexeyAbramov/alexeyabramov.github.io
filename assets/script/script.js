let scroll = false;
let prevSlide = 0;

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
      const duration = 800; // время в мс
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
});
