// hamburger
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const handleClick = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("bar-active");
};

hamburger.addEventListener("click", handleClick);
