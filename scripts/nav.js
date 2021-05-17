let myNav  = document.querySelectorAll(".nav > li");

for(let i=0; i<myNav.length; i++) {
    myNav[i].addEventListener("click", function() {
        document.querySelector(".nav > .active").classList.remove("active");
        myNav[i].classList.add("active");
    })
}