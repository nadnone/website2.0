
/* *********************/
/* BUTTONS */




// MENU BUTTONS

let sectionOpened = false;

function goButton(where){
  if (sectionOpened !== false) 
  {
     document.getElementById(sectionOpened).parentNode.style.display = "none"; document.getElementById(sectionOpened).style.display = "none"; 
  }


  document.getElementById(where).style.display = "flex";
  document.getElementById(where).parentNode.style.display = "flex";


  //document.body.scrollTo(0, window.innerHeight*2);
  let i = 0;

  let scrollID = setInterval(()=> {
    if(i*100 >= document.body.scrollHeight)
    {
      clearInterval(scrollID);
      return;
    }

    window.scrollTo(0, i*100);
    i += 0.5; 
  }, 60);
  
  window.addEventListener("wheel", () => {
    clearInterval(scrollID);
  });

  //document.querySelector(".main .container").style.opacity = "0";
  
  

  sectionOpened = where;
  
  switch (where) {
    case "Skills":
        skillLoad();
      break;

    case "Gallery":
        loadGallery();
      break;

    default:
      break;
  }
  
}

/* MENU BUTTONS END */

function goLink(link){
  window.open(link, "_blank");

}

/* BUTTONS END */






/* AGE EVENT */

function show_ageInfo(){
  document.getElementById("code_show").style.visibility = "visible";
}

/* ************ */



/* ******** PRE - CHARGEMENT    ********* */



function skillLoad(){


  if(window.innerWidth < 600 && !window.screen.orientation.type.includes("landscape")) {
    skillsort()
  }
  else{  
    spectralSkillsLoad();
    techload();
  }
}

/* GET AGE */
/*
function getAge() {
  let age = (Date.now() - new Date(1996, 6, 17).getTime()) / 1000;
  age /= (24 * 3600 * 365)
  document.getElementById("mon_age").innerText = parseInt(age)
}
*/


/* ****** */

async function preload(){

/* LAUNcHING FUNCTION */
 setTimeout(() => {
    document.querySelector(".menubg").style.opacity = "1";
  }, 500);

  if (window.screen.width > 1201 || window.screen.orientation.type.includes("landscape")) writesite();
  //writesite();
}

window.addEventListener("orientationchange", () => {
  window.location.reload();
});


window.addEventListener("DOMContentLoaded", preload);