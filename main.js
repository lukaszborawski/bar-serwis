const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");

const handleClick = () => {
    menu.classList.toggle("menu__list--open");
    burger.classList.toggle("burger--open");
}

burger.addEventListener("click", handleClick);
menu.addEventListener("click", handleClick);