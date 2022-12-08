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

/*---Animation---*/
AOS.init();

/*---Accordion---*/
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".faq__item");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const content = self.querySelector(".faq__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
