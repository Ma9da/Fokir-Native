
let filterSelection = document.getElementsByClassName("filterSelection")
let allImages = document.getElementsByClassName('all')
TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    let delta = 300;
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
function injectCss() {
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
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