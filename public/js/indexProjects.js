const menuIcon = document.getElementById("menu-icon");
const bodyElement = document.getElementsByTagName("body")[0];

menuIcon.addEventListener("change", function() {
    if (menuIcon.checked === true && window.matchMedia("(max-width: 740px)").matches) {
        bodyElement.setAttribute("style", "height: 100dvh;");
        bodyElement.setAttribute("style", "overflow: hidden;");
    }
    else{
        bodyElement.removeAttribute("style")
    }
});

window.addEventListener("resize", (event) =>{
    if(window.matchMedia("(min-width: 980px)").matches){
        menuIcon.checked = false
    }
    if(window.matchMedia("(max-width: 740px)").matches){
        if (menuIcon.checked === true){
            bodyElement.setAttribute("style", "height: 100dvh;");
            bodyElement.setAttribute("style", "overflow: hidden;");
        }
        else{
            bodyElement.removeAttribute("style")
        }
    }
    else{
        bodyElement.removeAttribute("style")
    }
});