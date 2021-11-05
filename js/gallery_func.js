function loadGallery(){

    let contenu = document.querySelector("#Gallery .categorie")

    contenu.innerHTML = ""
    
    for (let i = 0; i < gallery_items.length; i++) {



        let item = document.createElement("div")
        item.setAttribute("class", "item")

        item.addEventListener("click", () => {
            if(gallery_items[i].link !== false) goLink(gallery_items[i].link)
        });

        let img = document.createElement("div")
        img.setAttribute("class", "img")
        img.style.backgroundImage = `url("${gallery_items[i].image}")`

        let title = document.createElement("div")
        title.setAttribute("class", "title")
        title.innerText = gallery_items[i].title

        let desc = document.createElement("div")
        desc.setAttribute("class", "desc")
        desc.innerText = gallery_items[i].desc


        item.appendChild(img)
        item.appendChild(title)
        item.appendChild(desc)

        contenu.appendChild(item)

    }

}