let navToggle = document.getElementsByClassName("navToggle")[0]
let navLinks = document.getElementsByClassName("navLinks")[0]
let navbar = document.getElementsByClassName("navbar")[0]
let filterSelection = document.getElementsByClassName("filterSelection")
let allImages = document.getElementsByClassName('all')
// toggle menu
navToggle.addEventListener("click", menuDown);
function menuDown() {
    navLinks.style.display === "flex" ? navLinks.style.display = "none" : navLinks.style.display = "flex"
}
let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    let delta = 300 ;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(() => {
        this.tick()
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('txt-rotate')[0];
        let toRotate = elements.getAttribute('data-rotate');
        let period = elements.getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements, JSON.parse(toRotate), period);
    }
    injectCss()
};
function injectCss(){
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("clientCard");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSlide", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " activeSlide";
}
// items filtration
for (let i = 0; i < filterSelection.length; i++) {
    filterSelection[i].addEventListener("click", filterDisplay)
    filterSelection[i].addEventListener("click", addActive)
}
function filterDisplay(e) {
    for (let image of allImages) {
        image.classList.contains(e.currentTarget.innerText.replace(/\s+/g, "").toLowerCase())
            ?
            image.style.display = "flex"
            :
            image.style.display = "none"
    }
}
// active button
function addActive(e) {
    for (let i = 0; i < filterSelection.length; i++) {
        const item = filterSelection[i];
        item.classList.remove("active")
    }
    e.target.className += " active";
}