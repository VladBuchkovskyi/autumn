"use strict";

var burger = document.querySelector(".burger");
burger.addEventListener("click", function (e) {
  burger.classList.toggle("opened_burger");
  document.querySelector(".menu ul").classList.toggle("opened_menu");
});