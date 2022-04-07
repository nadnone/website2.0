import { loadGallery } from './gallery_func.js';
import { spectralSkillsLoad, skillsort } from './skills/skillLoads.js';
import { techload } from './skills/techload.js';

// MENU BUTTONS

let sectionOpened = false;

function goButton(where){
  if (sectionOpened !== false) 
  {
     document.getElementById(sectionOpened).parentNode.style.display = "none"; document.getElementById(sectionOpened).style.display = "none"; 
  }


  document.getElementById(where).style.display = "flex";
  document.getElementById(where).parentNode.style.display = "flex";



  /* SCROLL */

  let i = 0;
  let pixels = 100;

  let scrollID = setInterval(()=> {
    if(i*pixels >= document.body.scrollHeight)
    {
      clearInterval(scrollID);
      return;
    }

    window.scrollTo(0, i*pixels);
    i++; 
  }, 10);
  
  window.addEventListener("wheel", () => {
    clearInterval(scrollID);
  });

  // ***************
  

  sectionOpened = where;
  
  switch (where) {
    case "Skills":

        if(window.innerWidth < 1201) {
          skillsort()
        }
        else{  
          spectralSkillsLoad();
          techload();
          
        }

      break;

    case "Gallery":
        loadGallery();
      break;

    default:
      break;
  }
  
}



/* MENU BUTTONS END */



// LINK BUTTON

function goLink(link){
  window.open(link, "_blank");

}


/* BUTTONS END */


export { goLink, goButton };