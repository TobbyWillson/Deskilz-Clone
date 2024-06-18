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

if (dayOfWeek === 0 && time >= 20) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">We are closed, check back on Monday by 10AM</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek === 0 && time < 14) {
  lists[1].innerHTML = `<li>
            <i class="fas fa-clock"></i>
            <span class="weekend">Opening hour is 2PM</span>
          </li>`;

  lists[2].textContent = "";
} else if (dayOfWeek > 0 && dayOfWeek < 6 && time >= 20) {
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
const satClose = document.querySelector(".sat-close-time");
const sunOpen = document.querySelector(".sun-open-time");
const sunMonOpen = document.querySelector(".sunMon-open");
const good = document.querySelector(".goody");
const cardIcons = document.querySelectorAll(".card .icon");

// Add to cart
function timeCheck() {
  cardIcons.forEach((item) => {
    item.addEventListener("click", () => {
      if (dayOfWeek > 0 && dayOfWeek <= 6 && time < 10) {
        setTimeout(() => openTime.classList.add("show"), 2000);
        setTimeout(() => openTime.classList.remove("show"), 4000);
      } else if (dayOfWeek > 0 && dayOfWeek <= 6 && time >= 20) {
        setTimeout(() => closeTime.classList.add("show"), 2000);
        setTimeout(() => closeTime.classList.remove("show"), 4000);
      } else if (dayOfWeek === 6 && time >= 20) {
        setTimeout(() => satClose.classList.add("show"), 2000);
        setTimeout(() => satClose.classList.remove("show"), 4000);
      } else if (dayOfWeek === 0 && time < 14) {
        setTimeout(() => sunOpen.classList.add("show"), 2000);
        setTimeout(() => sunOpen.classList.remove("show"), 4000);
      } else if (dayOfWeek === 0 && time >= 20) {
        setTimeout(() => sunMonOpen.classList.add("show"), 2000);
        setTimeout(() => sunMonOpen.classList.remove("show"), 4000);
      } else {
        console.log("all good");
      }
    });
  });
}

timeCheck();

////////////// Original/////////////////////////

const cartItemNo = document.querySelector(".cart .item-no p");
const cart = document.querySelector(".cart");

let totalCount = 0;

function addItem() {
  cardIcons.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parentEl = item.parentElement;
      const title = parentEl.querySelector(".food-title h4");
      const minus = parentEl.querySelector(".card .minus");
      const minusPa = parentEl.querySelector(".card .minus p");
      const minusIcon = parentEl.querySelector(".minus .ic-bg i");
      const itemAddPa = document.querySelector(".item-add p");
      const plusIcon = parentEl.querySelector(".card .icon i");

      let count = parseInt(minusPa.textContent) || 0;
      if (dayOfWeek > 0 && dayOfWeek <= 6 && time >= 10 && time < 20) {
        count++;

        setTimeout(() => (minusPa.textContent = `${count}`), 800);
        setTimeout(() => minus.classList.add("show"), 800);

        totalCount++;

        setTimeout(() => cart.classList.add("show"), 800);
        setTimeout(() => (cartItemNo.textContent = `${totalCount}`), 800);

        itemAddPa.textContent = `1 ${title.textContent} added to cart`;
        plusIcon.classList.add("fa-spinner");
        plusIcon.classList.add("fa-spin");
        setTimeout(() => plusIcon.classList.remove("fa-spinner"), 800);
        setTimeout(() => plusIcon.classList.remove("fa-spin"), 800);

        setTimeout(() => itemAdd.classList.add("show"), 2000);
        setTimeout(() => itemAdd.classList.remove("show"), 3500);
      } else if (dayOfWeek > 0 && dayOfWeek <= 6 && time >= 20) {
        cart.classList.remove("show");
        setTimeout(() => closeTime.classList.add("show"), 2000);
        setTimeout(() => closeTime.classList.remove("show"), 4000);
      } else if (dayOfWeek === 6 && time >= 20) {
        cart.classList.remove("show");
        setTimeout(() => satClose.classList.add("show"), 2000);
        setTimeout(() => satClose.classList.remove("show"), 4000);
      } else if (dayOfWeek === 0 && time >= 20) {
        cart.classList.remove("show");
        setTimeout(() => sunMonOpen.classList.add("show"), 2000);
        setTimeout(() => sunMonOpen.classList.remove("show"), 4000);
      } else if (dayOfWeek === 0 && time < 14) {
        cart.classList.remove("show");
        setTimeout(() => sunOpen.classList.add("show"), 2000);
        setTimeout(() => sunOpen.classList.remove("show"), 4000);
      } else if (dayOfWeek === 0 && time >= 14 && time < 20) {
        count++;

        setTimeout(() => (minusPa.textContent = `${count}`), 800);
        setTimeout(() => minus.classList.add("show"), 800);

        totalCount++;

        setTimeout(() => cart.classList.add("show"), 800);
        setTimeout(() => (cartItemNo.textContent = `${totalCount}`), 800);

        itemAddPa.textContent = `1 ${title.textContent} added to cart`;
        plusIcon.classList.add("fa-spinner");
        plusIcon.classList.add("fa-spin");
        setTimeout(() => plusIcon.classList.remove("fa-spinner"), 800);
        setTimeout(() => plusIcon.classList.remove("fa-spin"), 800);

        setTimeout(() => itemAdd.classList.add("show"), 2000);
        setTimeout(() => itemAdd.classList.remove("show"), 3500);
      } else {
        console.log("Tada");
      }

      if (count === 1) {
        minusIcon.classList.remove("fa-minus");
        minusIcon.classList.add("fa-trash");
      } else {
        setTimeout(() => minusIcon.classList.remove("fa-trash"), 800);
        setTimeout(() => minusIcon.classList.add("fa-minus"), 800);
      }
    });
  });
}
addItem();

const minus = document.querySelectorAll(".card .minus");
function removeItem() {
  minus.forEach((event) => {
    event.addEventListener("click", () => {
      const parentEl = event.parentElement;
      const title = parentEl.querySelector(".food-title h4");
      const cardMinus = parentEl.querySelector(".card .minus");
      const minusPa = parentEl.querySelector(".card .minus p");
      const minusIcon = parentEl.querySelector(".minus .ic-bg i");
      const itemRemovePa = document.querySelector(".item-remove p");
      const plusIcon = parentEl.querySelector(".card .icon i");

      let count = parseInt(minusPa.textContent) || 0;

      count--;

      totalCount--;

      setTimeout(() => (minusPa.textContent = `${count}`), 800);
      setTimeout(() => (cartItemNo.textContent = `${totalCount}`), 800);

      itemRemovePa.textContent = `1 ${title.textContent} removed from cart`;
      setTimeout(() => itemRemove.classList.add("show"), 2000);
      setTimeout(() => itemRemove.classList.remove("show"), 4000);

      if (count === 0) {
        cardMinus.classList.remove("show");
      }

      if (totalCount === 0) {
        cart.classList.remove("show");
      }

      if (count === 1) {
        setTimeout(() => minusIcon.classList.remove("fa-minus"), 800);
        minusIcon.classList.add("fa-trash");
      } else {
        minusIcon.classList.remove("fa-trash");
        minusIcon.classList.add("fa-minus");
      }
    });
  });
}

removeItem();
