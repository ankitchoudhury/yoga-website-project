const menuEle = document.querySelector("#mobile-menu");

let isMenuOpen = false;

function toogleMenu() {
    if (isMenuOpen) {
        menuEle.style.display = "none";
        isMenuOpen = false
    }
    else {
        menuEle.style.display = "flex"
        isMenuOpen = true
    }
}
