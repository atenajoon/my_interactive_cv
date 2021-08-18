// updating the nav activation on scroll
const NAV_SECTION_COUNT = document.querySelectorAll("section");
const SECTION_LENGTHS = [200, 200, 450, null];
sec = [];

let nav = [];
for (let i = 1; i <= NAV_SECTION_COUNT.length; i++) {
  nav[i] = document.getElementById("nav-item-" + i);
}

if (highlightSections) {
  for (var i = 2; i <= SECTION_COUNT.length; i++) {
    sec[i] =
      document.getElementById("sec" + i).offsetTop - SECTION_LENGTHS[i - 1];
  }

  if (offset <= sec[2]) {
    activate(1);
  } else if (offset <= sec[3]) {
    activate(2);
  } else if (offset <= sec[4]) {
    activate(3);
  } else {
    activate(4);
  }
}

function activate(navItem) {
  for (i = 1; i <= 4; i++) {
    if (i == navItem) {
      nav[i].classList.add("active");
    } else {
      nav[i].classList.remove("active");
    }
  }
}

if (scrollTimer !== -1) {
  clearTimeout(scrollTimer);
}
scrollTimer = window.setTimeout("scrollFinished()", 300);

// updating the nav activation on click
let myNav = document.querySelectorAll(".nav > li");

for (let i = 0; i < myNav.length; i++) {
  myNav[i].addEventListener("click", function () {
    document.querySelector(".nav > .active").classList.remove("active");
    myNav[i].classList.add("active");
    highlightSections = false;
  });
}
