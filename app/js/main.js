/*Slider*/
if (document.querySelector(".courses__slides") != null) {
  new Swiper(".courses__slides", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
    spaceBetween: 40,

    breakpoints: {
      1200: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });
}

if (document.querySelector(".reviews__slides") != null) {
  new Swiper(".reviews__slides", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}

let init = false;
let groupSlides = document.querySelector(".group__items");
let tutorialSlides = document.querySelector(".tutorial__items");
let screen = window.matchMedia("(max-width:768px)");

function swiperCard() {
  if (window.innerWidth <= 768 || screen.matches) {
    if (!init) {
      groupSlides.classList.add("swiper-wrapper");
      tutorialSlides.classList.add("swiper-wrapper");
      init = true;
      swiper = new Swiper(".group__slides", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      swiper2 = new Swiper(".tutorial__slides", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    groupSlides.classList.remove("swiper-wrapper");
    tutorialSlides.classList.remove("swiper-wrapper");
    swiper.destroy();
    swiper2.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

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

/*Burger-menu*/
let burger = document.querySelector(".burger__menu");
let burgerMenu = document.querySelector(".header__menu");
let burgerClose = document.querySelector(".burger__close");

burger.addEventListener("click", () => {
  burgerMenu.classList.add("active");
  burgerClose.classList.add("active");
  document.body.style.overflow = "hidden";
});
burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  burgerClose.classList.remove("active");
  document.body.style.overflow = "auto";
});
