new Swiper(".courses__slides", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  direction: "horizontal",
  loop: true,
  slidesPerGroup: 3,
  slidesPerView: 3,
  spaceBetween: 40,
});

new Swiper(".reviews__slides", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
});

console.log("hello");
