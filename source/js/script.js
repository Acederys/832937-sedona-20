var navMain = document.querySelector(".header__nav");
var navToggle = document.querySelector(".header__menu-svg");
var navClosed = document.querySelector(".header__nav-close");

navMain.classList.remove("header__nav--opened");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header__nav--none")) {
    navMain.classList.remove("header__nav--none");
    navMain.classList.add("header__nav--opened");
  }
});

navClosed.addEventListener("click", function () {
  if (navMain.classList.contains("header__nav--opened")) {
    navMain.classList.remove("header__nav--opened");
    navMain.classList.add("header__nav--none");
  }
});
