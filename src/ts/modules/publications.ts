

export default class Publications {
    readonly json_path: string;
    private readonly myInit: RequestInit;
    private readonly myRequest: Request;

    data: Array<Object>;

    constructor(path: string) {
        this.json_path = path;

        this.myInit = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "cors",
            cache: "default"
        };

        this.myRequest = new Request(this.json_path, this.myInit);

    }

     private async readJSON() {
        try{
            const response: Response = await fetch(this.myRequest);
            return await response.json();
        } catch (exception){
            console.log(`ERROR received from ${this.json_path}: ${exception}\n`);
        }
    }

    printHTML(): void {
        this.readJSON().then((data): void => {
                return data
            }).then((data: Array<Object>) =>{
                this.data = data;
        });

        console.log(this.data)
    }
}


// let myInit: RequestInit = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     mode: "cors",
//     cache: "default",
// };
//
// let myRequest :Request = new Request("../../publications.json", myInit);
//
// const request = async () => {
//     const response = await fetch(myRequest);
//     const data = await response.json();
//     printHTML(data);
//     collapseBtn();
// };
//
// request();
//
// function printHTML(data) {
//     for (let i = 0; i < data.length; i++) {
//         /* Set important variables */
//         let pubContainer = document.getElementById("publications"); // Global container
//
//         let publication = document.createElement("div"); // Publication container
//         publication.setAttribute("class", "publication");
//         publication.setAttribute("data-year", data[i].year);
//
//         let pubMain = document.createElement("div"); // Publication main content
//         pubMain.setAttribute("class", "pubmain");
//
//         let pubDetails = document.createElement("div"); // Publication details
//         pubDetails.setAttribute("class", "pubdetails");
//
//         /* Preprocess some elements of data */
//         // Preprocess title
//         let pubTitle = `<span>${data[i].year}</span> ${data[i].title}`;
//
//         // Preprocess authors
//         var authors = "";
//         var author;
//         for (let a = 0; a < data[i].author.length; a++) {
//             author = data[i].author[a];
//             if (data[i].author.length === 1) {
//                 authors += `<strong>${author}</strong>`;
//                 break;
//             }
//             if (a === data[i].author.length - 1) {
//                 authors = authors.slice(0, -2);
//                 if (author === "Daniel Rodriguez-Criado") {
//                     authors += ` and <strong>${author}</strong>`;
//                 } else {
//                     authors += " and " + author;
//                 }
//             } else {
//                 if (author === "Daniel Rodriguez-Criado") {
//                     authors += `<strong>${author}</strong>, `;
//                 } else {
//                     authors += author + ", ";
//                 }
//             }
//         }
//         // Preprocess cite
//         let cite = data[i].in;
//         let type = data[i].type;
//         let typetxt;
//         let bibTexHead;
//
//         switch (type) {
//             case "jpaper":
//                 typetxt = '<span class="journal">Journal Papers</span>';
//                 bibTexHead = "@article{";
//                 break;
//             case "cpaper":
//                 typetxt = '<span class="conference">Conference Papers</span>';
//                 bibTexHead = "@inproceedings{";
//                 break;
//             case "bookchapter":
//                 typetxt = '<span class="book">Book Chapter</span>';
//                 bibTexHead = "@inbook{";
//                 break;
//             case "phdthesis":
//                 typetxt = '<span class="theses">Theses</span>';
//                 bibTexHead = "@phdthesis{";
//                 break;
//             case "masterthesis":
//                 typetxt = '<span class="theses">Theses</span>';
//                 bibTexHead = "@masterthesis{";
//                 break;
//             default:
//                 typetxt = "";
//                 bibTexHead = "";
//         }
//         cite = typetxt + cite;
//
//         // Preprocess assests
//         let iconCollapse = '<i class="fas fa-angle-double-down"></i>';
//         let inconDownload = '<i class="fas fa-download"></i>';
//         let inconGo = '<i class="fas fa-external-link-alt"></i>';
//         let assets = `<a class="pubcollapse" href="#/"> ${iconCollapse} </a>`;
//
//         if ("download" in data[i]) {
//             assets = `<a class="pubdownload" href="${data[i].download}"> ${inconDownload} </a>` + assets
//         }
//
//         if ("url" in data[i]) {
//             assets = `<a class="pubgo" href="${data[i].url}"> ${inconGo} </a>` + assets
//         }
//
//         // Preprocess bibtext citation
//         let bibTex = `${bibTexHead}${data[i].key},
//                           <br>`;
//         for (var key in data[i]) {
//             if (
//                 key === "in" ||
//                 key === "key" ||
//                 key === "abstract" ||
//                 key === "x" ||
//                 key === "abstract" ||
//                 key === "download" ||
//                 key === "url" ||
//                 key === "type"
//             ) {
//                 continue;
//             } else {
//                 bibTex += `<span>${key} = "${data[i][key]}"</span>,
//                                <br>`;
//             }
//         }
//         bibTex += "}";
//
//         /* Include HTML */
//         pubMain.innerHTML = `<h4 class="pubmain__title"> ${pubTitle} </h4>
//                                  <p class="pubmain__authors"> ${authors} </p>
//                                  <p class="pubmain__cite"> ${cite} </p>
//                                  <div class="pubmain__assets"> ${assets} </div>`;
//
//         pubDetails.innerHTML = `<div class="wrapper"> <h3> BibTeX </h3>
//                                     <p class="pubdetails__bibtex"> ${bibTex} </p>
//                                     <h3> Abstract </h3>
//                                     <p class="pubdetails__abstract">${data[i].abstract}</p>
//                             </div>`;
//
//         /* Incude HTML elements into the DOM */
//         publication.appendChild(pubMain);
//         publication.appendChild(pubDetails);
//         pubContainer.appendChild(publication);
//     }
// }
//
// /* Collapse button function */
//
// function collapseBtn() {
//     let publications = document.querySelectorAll(".publication");
//
//     publications.forEach((pub) => {
//         let btn = pub.querySelector(".pubcollapse");
//
//         btn.addEventListener("click", function () {
//             var panel = pub.childNodes[1]
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//                 this.innerHTML = '<i class="fas fa-angle-double-down"></i>'
//
//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//                 this.innerHTML = '<i class="fas fa-angle-double-up"></i>'
//
//             }
//         });
//     });
// }
//
// /* Filter functionalities */
