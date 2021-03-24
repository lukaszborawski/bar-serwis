const burger = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__list");

const handleClick = () => {
    menu.classList.toggle("menu__list--open");
}

burger.addEventListener("click", handleClick);
menu.addEventListener("click", handleClick);