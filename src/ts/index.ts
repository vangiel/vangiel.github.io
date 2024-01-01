import {addMenuEventListener} from './modules/checkboxMenu'
import publications from "./modules/publications";

addMenuEventListener("#menu-icon")

let page_path: string = window.location.href

if(page_path.split("/").pop() === "publications.html"){
    let pubManager: publications = new publications('../../publications.json')
    await pubManager.getJSON();
    pubManager.printHTML();
    pubManager.collapseBtn();
}

