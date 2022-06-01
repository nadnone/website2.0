import themes_list from "../config/themes.js";

let title = document.getElementById("theme_title");
let style = document.documentElement.style;
let boxtheme = document.querySelector(".box_theme");

export function themes_load() {

    let l = themes_list.length - 1;

    style.setProperty("--primary", themes_list[l].primary.main); 
    style.setProperty("--secondary", themes_list[l].secondary.main); 

    style.setProperty("--text_on_primary", themes_list[l].text.primary); 
    style.setProperty("--text_on_secondary", themes_list[l].text.secondary); 

    style.setProperty("--primary_light", themes_list[l].primary.light); 
    style.setProperty("--primary_dark", themes_list[l].primary.dark); 

    style.setProperty("--secondary_light", themes_list[l].secondary.light); 
    style.setProperty("--secondary_dark", themes_list[l].secondary.dark); 

    title.innerText = `Theme ${themes_list[l].name}`;


    let theme_select_container = document.querySelector("#select_theme_selector .conteneur");
    
    themes_list.forEach(theme => {

        let theme_item = document.createElement("div");
        theme_item.className = "select_theme_options";
        theme_item.innerText = theme.name;

        theme_select_container.appendChild(theme_item);
    });

}


export function theme_menu(){

    let options = document.getElementsByClassName("select_theme_options");
    
    boxtheme.addEventListener("click", (event)=> {

        if (event.target.className ===  "select_theme_options"){

            themes_list.forEach(themeList => {
                    if (themeList.name === event.target.innerText) 
                    {
                        style.setProperty("--primary", themeList.primary.main); 
                        style.setProperty("--secondary", themeList.secondary.main); 
    
                        style.setProperty("--text_on_primary", themeList.text.primary); 
                        style.setProperty("--text_on_secondary", themeList.text.secondary); 
    
                        style.setProperty("--primary_light", themeList.primary.light); 
                        style.setProperty("--primary_dark", themeList.primary.dark); 
    
                        style.setProperty("--secondary_light", themeList.secondary.light); 
                        style.setProperty("--secondary_dark", themeList.secondary.dark); 
    
                        title.innerText = `Theme ${themeList.name}`;
                    }
                    
                });

                    

            for (let i = 0; i < options.length; i++) {

                options[i].style.visibility = "hidden"
            }

            return
        }

        for (let i = 0; i < options.length; i++) {

            if(options[i].style.visibility === "visible") options[i].style.visibility = "hidden"
            else options[i].style.visibility = "visible"
        }

    });

  }
