
window.onscroll = function() {navOnScroll();};
const navbar = document.getElementById("navbar");

let highlightSections = true;
let scrollTimer = -1;

function scrollFinished() {
    highlightSections = true;
    console.log("true");
}

function navOnScroll() {

    const MOBILE_OFFSET = window.pageYOffset;
    const WINDOWS_OFFSET = window.pageYOffset + 80;
    let innerH = window.innerHeight;
    let innerW = window.innerWidth;

    let offset = innerW <= 767 ? MOBILE_OFFSET : WINDOWS_OFFSET;
    console.log(offset);

    if (offset >= innerH) {
        navbar.classList.remove("navbar2");
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("navbar2");
    }

    // updating the nav activation on scroll
    
    let sec2 = document.getElementById("sec2").offsetTop - 200;
    let sec3 = document.getElementById("sec3").offsetTop - 200;
    let sec4 = document.getElementById("sec4").offsetTop - 450;
    
    let nav=[];
    for(let i=1; i<=4; i++) { nav[i] = document.getElementById("nav-item-"+i); }
   
    if(highlightSections) {
        if (offset <= sec2) { activate(1); }
        else if (offset <= sec3) { activate(2); }
        else if (offset <= sec4) { activate(3); }
        else { activate(4); }
        console.log("ture");
    }
    
    function activate(navItem) {
        for(i = 1; i <= 4; i++) {
            if(i == navItem) {
                nav[i].classList.add("active");
            } else {
                nav[i].classList.remove("active");
            }
        }
    }

    if(scrollTimer !== -1) {clearTimeout(scrollTimer);}
    scrollTimer = window.setTimeout('scrollFinished()', 300);
}



// updating the nav activation on click
let myNav  = document.querySelectorAll(".nav > li");

for(let i=0; i<myNav.length; i++) {
    myNav[i].addEventListener("click", function() {
        document.querySelector(".nav > .active").classList.remove("active");
        myNav[i].classList.add("active");
        highlightSections = false;
        console.log("false");
    })
}

/*  End  */