/* Logic of the menu icon */

export function addMenuEventListener(buttonID: string): void{
    const bodyElement: HTMLBodyElement = document.querySelector("body");
    const inputCheckbox: HTMLInputElement = document.querySelector(buttonID);
    inputCheckbox.addEventListener('change', (): void => {
        if (inputCheckbox.checked) {
            bodyElement.style.overflow = "hidden";
        }
        else {
            bodyElement.style.overflow = "auto";
        }
    });
}
