let filterSelection = document.getElementsByClassName("filterSelection")
let allImages = document.getElementsByClassName('all')
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