var navMain = document.querySelector(".header__nav");
var navToggle = document.querySelector(".header__menu-svg");
var navClosed = document.querySelector(".header__nav-close");

navMain.classList.remove("header__nav-opened");
navClosed.classList.remove("header__nav-opened");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header__nav-none")) {
    navMain.classList.remove("header__nav--none");
    navMain.classList.add("header__nav-opened");
    navClosed.classList.add("header__nav-opened");
  }
});

navClosed.addEventListener("click", function () {
  if (navMain.classList.contains("header__nav-opened")) {
    navMain.classList.remove("header__nav-opened");
    navMain.classList.add("header__nav-none");
    navClosed.classList.remove("header__nav-opened");
    navClosed.classList.add("header__nav--none");
  }
});

// var formMain = document.querySelector(".review__btn");
// var popupToggle = document.querySelector(".popup__positive");

// formMain.addEventListener("click", function () {
//   if (popupToggle.classList.contains("popup__positive-off")) {
//     popupToggle.classList.remove("popup__positive-off");
//     popupToggle.classList.add("popup__positive--on");
//   }
// });

// popupToggle.addEventListener("click", function () {
//   if (popupToggle.classList.contains("popup__positive--on")) {
//     navMain.classList.remove("popup__positive--on");
//     navMain.classList.add("popup__positive-off");
//   }
// });
