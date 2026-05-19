const boxes = document.querySelectorAll(".boxtop");
const boxleft = document.querySelectorAll(".boxleft");
const boxrigth = document.querySelectorAll(".boxrigth")
const boxbottom = document.querySelectorAll(".boxbottom")
function showElement(selector, className) {

    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {

        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 300) {
            element.classList.add(className);
        }

    });

}

function vu() {

    showElement(".boxtop", "boxtopvu");
    showElement(".boxleft", "boxleftvu");
    showElement(".boxrigth", "boxrigthvu");
    showElement(".boxbottom", "boxbottomvu");

}

window.addEventListener("scroll", vu);

vu();
var imgcrud = document.getElementById("imgcrud")
var imgecom = document.getElementById("imgecom")

var divmenu = document.getElementById("menu-nav")

function ChangeImg() {
    if (innerWidth > 680) {
        CloseDiv()
    }
    if (innerWidth < 681) {
        imgecom.src = "les images/mobilecom.PNG"
        imgcrud.src = "les images/mobilcrud.PNG"
    }
    else if (innerWidth < 1000) {
        imgcrud.src = "les images/tabletcrud.PNG"
        imgecom.src = "les images/tabletecom.PNG"
    }
    else {
        imgcrud.src = "les images/deskcrud.PNG"
        imgecom.src = "les images/desecom.PNG"
    }

}
ChangeImg()
onresize = ChangeImg

var a = document.querySelectorAll(".menu-nav a")
var btn = document.getElementById("btn")
btn.onclick = function () {
    divmenu.style.left = "0"
}
a.forEach(elment => {
    elment.onclick = function () {
        CloseDiv()
    }
})


function CloseDiv() {
    divmenu.style.left = "100%"
}
