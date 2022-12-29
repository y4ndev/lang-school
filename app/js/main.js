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

if (
  document.querySelector(".group__slides") != null &&
  document.querySelector(".tutorial__slides") != null
) {
  swiperCard();
  window.addEventListener("resize", swiperCard);
}

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

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});

/*Filter-menu*/
if (document.querySelector(".filter") != null) {
  let filter = document.querySelector(".select__btn");
  let filterMenu = document.querySelector(".filter");
  let filterFind = document.querySelector(".filter__form-btn");

  filter.addEventListener("click", () => {
    filter.classList.toggle("active");
    filterMenu.classList.toggle("active");
    filterFind.classList.remove("active");
  });

  filterFind.addEventListener("click", () => {
    filterMenu.classList.remove("active");
  });
}

/*Tabs-filter*/

let selectBtn = document.querySelectorAll("[data-select]");
let catalogItem = document.querySelectorAll("[data-type]");

selectBtn.forEach((item) => {
  item.addEventListener("click", function (e) {
    selectBtn.forEach((elem) => {
      elem.classList.remove("active");
      this.classList.add("active");
    });
    let data = e.target.getAttribute("data-select");
    catalogItem.forEach((item) => {
      if (item.getAttribute("data-type") === data) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});
