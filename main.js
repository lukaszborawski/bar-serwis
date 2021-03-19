const burger = document.querySelector(".menu_button");
const menu = document.querySelector(".menu_list");

const handleClick = () => {
    menu.classList.toggle("menu_list--open");
}

burger.addEventListener("click", handleClick);
menu.addEventListener("click", handleClick);