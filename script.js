let navToggle = document.getElementsByClassName("navToggle")[0]
let navLinks = document.getElementsByClassName("navLinks")[0]
let navbar = document.getElementsByClassName("navbar")[0]
// toggle menu
navToggle.addEventListener("click", menuDown);
function menuDown() {
    navLinks.style.display === "flex" ? navLinks.style.display = "none" : navLinks.style.display = "flex"
}