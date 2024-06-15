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
            <span class="weekend">We are closed, check back on Monday by 10AM</span>
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
            <span class="weekend">We are closed, check back tomorrow by 10AM</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek === 6 && time >= 20) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">We are closed, check back tomorrow by 2PM</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek <= 6 && time < 10) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">Opening hour is 10AM</span>
          </li>`;

  lists[2].textContent = "";
} else {
  console.log();
}

// alerts, warnings & popup messages
const itemRemove = document.querySelector(".item-remove");
const itemAdd = document.querySelector(".item-add");
const openTime = document.querySelector(".open-time");
const closeTime = document.querySelector(".close-time");
const satClose = document.querySelector("sat-close-time");
const sundayOpen = document.querySelector("sunday-open-time");
const sunMonOpen = document.querySelector(".sunMon-open");
const good = document.querySelector(".goody");
const cardIcons = document.querySelectorAll(".card .icon");

// Add to cart
function plusClick() {
  cardIcons.forEach((item) => {
    item.addEventListener("click", () => {
      if (dayOfWeek <= 6 && time < 10) {
        setTimeout(() => openTime.classList.add("show"), 500);
        setTimeout(() => openTime.classList.remove("show"), 3000);
      } else if (dayOfWeek <= 6 && time >= 10 && time <= 20) {
        setTimeout(() => good.classList.add("show"), 500);
        setTimeout(() => good.classList.remove("show"), 3000);
      } else if (dayOfWeek <= 6 && time >= 20) {
        setTimeout(() => closeTime.classList.add("show"), 500);
        setTimeout(() => closeTime.classList.remove("show"), 3000);
      } else if (dayOfWeek === 6 && time >= 20) {
        setTimeout(() => satClose.classList.add("show"), 500);
        setTimeout(() => satClose.classList.remove("show"), 3000);
      } else if (dayOfWeek === 7 && time < 14) {
        setTimeout(() => sundayOpen.classList.add("show"), 500);
        setTimeout(() => sundayOpen.classList.remove("show"), 3000);
      } else if (dayOfWeek === 7 && time >= 14) {
        setTimeout(() => sunMonOpen.classList.add("show"), 500);
        setTimeout(() => sunMonOpen.classList.remove("show"), 3000);
      } else {
        console.log("crryy");
      }
    });
  });
}

plusClick();

// Cart Items count
let count = [];

const minus = document.querySelectorAll(".card .minus");
const minusPa = document.querySelectorAll(".card .minus p");
const minusIcon = document.querySelectorAll(".minus .ic-bg i");
const cartItemNo = document.querySelector(".cart .item-no p");
const cart = document.querySelector(".cart");

function addItem() {
  cardIcons.forEach((item) => {
    item.addEventListener("click", () => {
      if (dayOfWeek <= 6 && (time > 10 || time < 20)) {
        count.push(1);

        minus.forEach((item) => {
          item.classList.add("show");
        });
        minusPa.forEach((item) => {
          item.textContent = `${count.length}`;
        });

        cart.classList.add("show");
        cartItemNo.textContent = `${count.length}`;

        setTimeout(() => itemAdd.classList.add("show"), 500);
        setTimeout(() => itemAdd.classList.remove("show"), 3500);
      } else if (dayOfWeek === 7 && (time > 14 || time < 20)) {
        count.push(1);
        // alert("1 item added");

        minus.forEach((item) => {
          item.classList.add("show");
        });
        minusPa.forEach((item) => {
          item.textContent = `${count.length}`;
        });

        cart.classList.add("show");
        cartItemNo.textContent = `${count.length}`;
        setTimeout(() => itemAdd.classList.add("show"), 500);
        setTimeout(() => itemAdd.classList.remove("show"), 3000);
      } else {
        console.log("Tada");
      }

      if (count.length === 1) {
        minusIcon.forEach((item) => {
          item.classList.remove("fa-minus");
          item.classList.add("fa-trash");
        });
      } else {
        minusIcon.forEach((item) => {
          item.classList.remove("fa-trash");
          item.classList.add("fa-minus");
        });
      }
    });
  });
}

addItem();

function removeItem() {
  minus.forEach((event) => {
    event.addEventListener("click", () => {
      count.pop();

      minusPa.forEach((item) => {
        item.textContent = `${count.length}`;
        cartItemNo.textContent = `${count.length}`;

        setTimeout(() => itemRemove.classList.add("show"), 500);
        setTimeout(() => itemRemove.classList.remove("show"), 3000);
      });
      if (count.length === 0) {
        minus.forEach((item) => {
          item.classList.remove("show");
          cart.classList.remove("show");
        });
      }

      if (count.length === 1) {
        minusIcon.forEach((item) => {
          item.classList.remove("fa-minus");
          item.classList.add("fa-trash");
        });
      } else {
        minusIcon.forEach((item) => {
          item.classList.remove("fa-trash");
          item.classList.add("fa-minus");
        });
      }
    });
  });
}

removeItem();

// testing testing
// setTimeout(() => {
//   minus.forEach((item) => {
//     item.classList.add("show");
//   });
// }, 2000);

// setTimeout(() => {
//   minus.forEach((item) => {
//     item.classList.remove("show");
//   });
// }, 5000);
