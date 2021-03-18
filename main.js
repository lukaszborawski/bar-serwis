const burger = document.querySelector(".menu_button");
const menu = document.querySelector(".menu_list");

burger.addEventListener("click", () => menu.classList.toggle("menu_list--open"));