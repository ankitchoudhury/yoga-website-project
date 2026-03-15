const menuEle = document.getElementById("mobile-menu");

let isMenuOpen = false;

function toogleMenu() {
    // if (isMenuOpen) {
    //     menuEle.style.display = "none";
    //     isMenuOpen = false
    // }
    // else {
    //     menuEle.style.display = "flex"
    //     isMenuOpen = true
    // }


    //  jo upar he wese kar sakte he kam line me likhne ki proffesional way niche he check

    isMenuOpen = !isMenuOpen;
    menuEle.style.display = isMenuOpen ? "flex" : "none"
}

const darkModeEle = document.getElementById("darkmode");

const iconEle = document.getElementById("darkmode-icon");

darkModeEle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        iconEle.src = "img/sun.png"
    }
    else{
        iconEle.src = "img/moon-icon.png"
    }
});

