/*
  INFO BOX FOR SPECTRE GRAPH
*/

export function addInfoBox(contenu, event) {

    document.querySelector("#infobox") != undefined ? contenu.removeChild(document.querySelector("#infobox")) : null;

    let svg = document.createElement("div");

    console.log(event.x);

    svg.style.height = "100px";
    svg.style.width = "300px";
    svg.style.backgroundColor = "red";
    svg.style.position = "absolute";
    svg.style.display = "block";
    svg.id = "infobox";


     contenu.appendChild(svg)
    }