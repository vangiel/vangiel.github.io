/* Logic of the menu icon */

let inputCheckbox = document.querySelector("#menu-icon")
let bodyElement = document.querySelector("body")
let x = window.matchMedia("(max-width: 740px)")

function mediaQuery(x){
    if(x.matches && inputCheckbox.checked == true){
        bodyElement.style.overflowY = "hidden"
    } else{
        inputCheckbox.checked = false
    }
}

mediaQuery(x)
x.addListener(mediaQuery)
inputCheckbox.addEventListener('change', (event) => {
    if (event.target.checked){
        bodyElement.style.overflowY = "hidden"
    } else {
        bodyElement.style.overflowY = "auto"
    }
})