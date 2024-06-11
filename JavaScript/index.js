// Getting Current Date Year
const year = document.querySelector(".year");
const newDate = new Date().getFullYear();
year.textContent = newDate;

// toggling hamburger menu
const icon = document.querySelector("img");
const menu = document.querySelector(".menu");

function change() {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    icon.src = "images/X-icon.png";
  } else {
    icon.src = "images/Hamburger-Line.png";
  }
}

icon.addEventListener("click", change);
