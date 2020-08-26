/* Logic of the menu icon */

const inputCheckbox = document.querySelector("#menu-icon")
const bodyElement = document.querySelector("body")
const x = window.matchMedia("(max-width: 740px)")

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

/* Set classes and links of the menu*/

let path = window.location.pathname
const pageName = path.split("/").pop()
const mainMenu = document.querySelector("#main-menu")

for (let i=1; i < mainMenu.childNodes.length; i=i+2) {
    let listItem = mainMenu.childNodes[i]
    let listClass = listItem.getAttribute("class")
    let listLink = listItem.childNodes[0].getAttribute("href")
    // It is the index page
    if(pageName === "index.html" || pageName === ""){
        if (i == 1) {
            continue
        } else{
            listItem.childNodes[0].setAttribute("href", "pages/" + listLink)
        }    
    } else {
        if(listLink === pageName){
            listItem.setAttribute("class", listClass + "--active")
        } else if(i==1){
            listItem.childNodes[0].setAttribute("href", "../" + listLink)
            listItem.setAttribute("class", "main-menu__item")
        }
    }
}
