import {addMenuEventListener} from './modules/checkboxMenu'
import Publications from "./modules/publications";

addMenuEventListener("#menu-icon")

if(window.location.href.split("/").pop() === "publications.html"){
    let pubManager: Publications = new Publications('../../publications.json')

    pubManager.pubJSON()
}

