/**
 * Created by Daniel on 30/01/2017.
 */

var valueSkill = document.getElementsByClassName("skill__porcentage");

for(var i=0; i<valueSkill.length; i++){
     valueSkill[i].firstElementChild.style.width= valueSkill[i].firstElementChild.innerHTML;
}
