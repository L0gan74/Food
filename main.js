var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
  }
});

var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
  },
});
