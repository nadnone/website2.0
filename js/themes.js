function theme_menu(){

    let title = document.getElementById("theme_title");
    let options = document.getElementsByClassName("select_theme_options");
    let boxtheme = document.getElementsByClassName("box_theme")[0];
    
    boxtheme.addEventListener("click", (event)=> {


        if (event.target.className ===  "select_theme_options"){
            let theme = event.target.innerText
            let style = document.documentElement.style;

            switch(theme){
                case "Moon":
                    style.setProperty("--primary", "#0718665f"); 
                    style.setProperty("--secondary", "#093475"); 

                    style.setProperty("--text_on_primary", "#e0f7fa"); 
                    style.setProperty("--text_on_secondary", "#e8eaf6"); 

                    style.setProperty("--primary_light", "#071866"); 
                    style.setProperty("--primary_dark", "#071866"); 

                    style.setProperty("--secondary_light", "#4e5b7055"); 
                    style.setProperty("--secondary_dark", "#093475"); 

                    title.innerText = "Theme Moon"

                    break;

                case "Sun":

                    style.setProperty("--primary", "#FFFAFA5f"); 
                    style.setProperty("--secondary", "#cccccc"); 

                    style.setProperty("--text_on_primary", "#e0f7fa"); 
                    style.setProperty("--text_on_secondary", "#e8eaf6"); 

                    style.setProperty("--primary_light", "#8f92a15f"); 
                    style.setProperty("--primary_dark", "#c1bdbd55"); 

                    style.setProperty("--secondary_light", "#c4c4bc5f"); 
                    style.setProperty("--secondary_dark", "#70707055"); 

                    title.innerText = "Theme Sun"

                    break;

                case "Juice":
                    style.setProperty("--primary", "#fb8c005f"); 
                    style.setProperty("--secondary", "#ffeb3b"); 

                    style.setProperty("--text_on_primary", "#212121"); 
                    style.setProperty("--text_on_secondary", "#795548"); 

                    style.setProperty("--primary_light", "#ffbd455f"); 
                    style.setProperty("--primary_dark", "#c25e00"); 

                    style.setProperty("--secondary_light", "#ffff7255"); 
                    style.setProperty("--secondary_dark", "#c8b900"); 

                    title.innerText = "Theme Juice"
            }

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




  theme_menu();