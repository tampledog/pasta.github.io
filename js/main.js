("use strict");

window.addEventListener("load", function () {
  let mainButton = document.querySelectorAll(".btn_main");
  let allButtons = document.querySelectorAll(".buttons");
  let videos = document.querySelectorAll(".video");
  let iconMenu = document.querySelector(".menu__icon");
  let menuBody = document.querySelector(".header__menu");
  let navLinks = document.querySelectorAll(".menu__link");

  // buttons
  for (i = 0; i < mainButton.length; i++) {
    mainButton[i].addEventListener("click", toggleItem, false);
  }
  function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < allButtons.length; i++) {
      allButtons[i].className = "buttons close";
    }
    if (itemClass == "buttons close") {
      this.parentNode.className = "buttons open";
    }
  }

  // slider
  if (document.querySelector(".products__list")) {
    new Splide(".products__list", {
      perMove: 1,
      rewind: true,
      type: "loop",
      // autoScroll: {
      //   speed: 0.5,
      // },
      perPage: 3,
      gap: "0rem",
      focus: "center",
      arrows: true,
      breakpoints: {
        760: {
          perPage: 1,
        },
      },
    }).mount();
  }

  // video block
  if (document.getElementById("videoFrame")) {
    const playButton = document.getElementById("playButton");
    const video = document.getElementById("videoFrame");

    video.addEventListener("click", function () {
      if (video.paused) {
        video.style.zIndex = "10";
        playButton.style.display = "none";
        video.setAttribute("controls", "true");
        video.setAttribute("autoplay", "true");
      } else {
      }
    });
  }

  // animation main cup
  if (document.querySelector(".hero__on")) {
    let turnOn = document.querySelector(".hero__on");
    let turnOff = document.querySelector(".hero__off");
    let fullCup = document.querySelector(".full-cup");
    let emptyCup = document.querySelector(".empty-cup");

    turnOn.addEventListener("click", function () {
      emptyCup.classList.add("off");
      fullCup.classList.add("on");
      turnOff.style.filter = "grayscale(100%)";
      turnOn.style.filter = "grayscale(0%)";
    });

    turnOff.addEventListener("click", function () {
      emptyCup.classList.remove("off");
      fullCup.classList.remove("on");
      turnOff.style.filter = "grayscale(0%)";
      turnOn.style.filter = "grayscale(100%)";
    });
  }

  // mobile menu
  iconMenu.addEventListener("click", function (e) {
    e.preventDefault();
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
  if (navLinks) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", function () {
        menuBody.classList.remove("_active");
        iconMenu.classList.remove("_active");
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  class Accordions {
    constructor(container) {
      this.container = container;
      this.active = undefined;
      this.accordions = container.querySelectorAll('.accordion');

      this.accordions.forEach((accordion) => {
        accordion.querySelector('.accordion__header').addEventListener('click', () => {
          if (this.active === accordion) {
            this.clearActive(this.active);
            return this.active = undefined;
          }

          if (this.active) {
            this.clearActive(this.active);
          }

          this.makeActive(accordion);
          this.active = accordion;
        });
      });
    }

    makeActive(acc) {
      acc.classList.add('active');
      acc.querySelector('.accordion__button').classList.add('active');

      const contentHeight = acc.querySelector('.accordion__inner').clientHeight;
      acc.querySelector('.accordion__info').style.height = `${contentHeight}px`;
    }

    clearActive(acc) {
      acc.classList.remove('active');
      acc.querySelector('.accordion__button').classList.remove('active');
      acc.querySelector('.accordion__info').style.height = `0px`;
    }
  }

  const accordionsContainers = document.querySelectorAll('.js-accordions');

  accordionsContainers.forEach((item) => {
    new Accordions(item);
  });
})
