// Getting Current Date Year
const year = document.querySelector(".year");
const newDate = new Date().getFullYear();
year.textContent = newDate;

// toggling hamburger menu
const hamBtn = document.querySelector(".ham-btn");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon");

function change() {
  menu.classList.toggle("show");
  icon.classList.toggle("fa-times");
}

hamBtn.addEventListener("click", change);

// toggling more-tabs on and off
const moreTab = document.querySelector(".more-tab");
const otherTabs = document.querySelector(".other-tabs");
const arrow = document.querySelector(".arrow");

moreTab.addEventListener("click", () => {
  otherTabs.classList.toggle("show");
  arrow.classList.toggle("fa-angle-up");
});

// Checking for the date
const day = new Date();
const dayOfWeek = day.getDay();
const time = day.getHours();

const lists = document.querySelectorAll(".location li");

if (dayOfWeek === 7 && time >= 20) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">We are closed, check back on Monday</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek === 7 && time < 14) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">Opening hour is 2PM</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek <= 6 && time >= 20) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">We are closed, check back tomorrow</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek <= 6 && time < 8) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">Opening hour is 8AM</span>
          </li>`;

  lists[2].textContent = "";
} else {
  console.log();
}

// Add to cart
const cardIcons = document.querySelectorAll(".card .icon");

cardIcons.forEach((item) => {
  item.addEventListener("click", () => {
    if (dayOfWeek === 7 && time >= 20) {
      alert("Check back on Monday");
    } else if (dayOfWeek === 7 && time < 14) {
      alert("Opening hour is 2PM");
    } else if (dayOfWeek <= 6 && time < 8) {
      alert("Opening hour is 8AM");
    } else if (dayOfWeek <= 6 && time >= 20) {
      alert("We are closed, check back tomorrow");
    } else {
      alert("1 more item added to cart");
    }
  });
});
