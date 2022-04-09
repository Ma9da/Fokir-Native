let navToggle = document.getElementsByClassName("navToggle")[0]
let navLinks = document.getElementsByClassName("navLinks")[0]
let navbar = document.getElementsByClassName("navbar")[0]
// toggle menu
navToggle.addEventListener("click", menuDown);
function menuDown() {
    navLinks.style.display === "flex" ? navLinks.style.display = "none" : navLinks.style.display = "flex"
}
window.onscroll = function () {
    const VERTICAL_SPACE = 200
    if (document.body.scrollTop >= VERTICAL_SPACE || document.documentElement.scrollTop >= VERTICAL_SPACE) {
        navbar.classList += " navColored";
        navbar.classList.remove("navTransparent");
    }
    else {
        navbar.classList += " navTransparent";
        navbar.classList.remove("navColored");
    }
}
