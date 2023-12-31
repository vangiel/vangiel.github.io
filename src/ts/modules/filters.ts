/* Projects searchaer */

export function myFilter() {
    // Declare variables
    let a, i, txtValue;

    let input:HTMLInputElement = document.getElementById('filter') as HTMLInputElement;

    input.addEventListener("keyup", () => {
        let filter: string = input.value.toUpperCase();
        let ul: HTMLUListElement = document.getElementById("menu") as HTMLUListElement;
        let li: HTMLCollectionOf<HTMLElement> = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

}