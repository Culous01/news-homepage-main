let toggleBar = document.getElementById("menu").addEventListener("click", clickIt);
let myLinks = document.getElementById("navlink");
let canceltag = document.getElementById("menu-close").addEventListener("click", cancelIt);


function clickIt() {
    myLinks.style.position = "absolute"
    myLinks.style.top = "0"
    myLinks.style.transform = ".8s ease-in-"
}

function cancelIt() {
    myLinks.style.position = "absolute"
    myLinks.style.top = "-50rem"
}
