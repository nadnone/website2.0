

/*
THEMES MENU
*/

function theme_menu(){

    let title = document.getElementById("theme_title");
    let options = document.getElementsByClassName("select_theme_options");
    let boxtheme = document.getElementsByClassName("box_theme")[0];
    
    boxtheme.addEventListener("click", (event)=> {


        if (event.target.className ===  "select_theme_options"){
            let theme = event.target.innerText

            switch(theme){
                case "Moon":
                    document.documentElement.style.setProperty("--primary", "#0718665f"); 
                    document.documentElement.style.setProperty("--secondary", "#093475"); 

                    document.documentElement.style.setProperty("--text_on_primary", "#e0f7fa"); 
                    document.documentElement.style.setProperty("--text_on_secondary", "#e8eaf6"); 

                    document.documentElement.style.setProperty("--primary_light", "#071866"); 
                    document.documentElement.style.setProperty("--primary_dark", "#071866"); 

                    document.documentElement.style.setProperty("--secondary_light", "#4e5b7055"); 
                    document.documentElement.style.setProperty("--secondary_dark", "#093475"); 

                    title.innerText = "Theme Moon"

                break;

                case "Sun":

                    document.documentElement.style.setProperty("--primary", "#b4b4b45f"); 
                    document.documentElement.style.setProperty("--secondary", "#cccccc"); 

                    document.documentElement.style.setProperty("--text_on_primary", "#e0f7fa"); 
                    document.documentElement.style.setProperty("--text_on_secondary", "#e8eaf6"); 

                    document.documentElement.style.setProperty("--primary_light", "#8f92a15f"); 
                    document.documentElement.style.setProperty("--primary_dark", "#5f5f5f"); 

                    document.documentElement.style.setProperty("--secondary_light", "#70707055"); 
                    document.documentElement.style.setProperty("--secondary_dark", "#6e6e6e"); 

                    title.innerText = "Theme Sun"


                break;
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
  
  /*
    END THEME MENU
  */


  theme_menu();