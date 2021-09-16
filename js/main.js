
/* *********************/
/* BUTTONS */




// MENU BUTTONS

let sectionOpened = false;

function goButton(where){
  if (sectionOpened !== false) { document.getElementById(sectionOpened).parentNode.style.display = "none"; document.getElementById(sectionOpened).style.display = "none"; }
 
  //UIkit.scroll('').scrollTo(`.main`, {duration: 0});


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
    i += 0.8; 
  }, 60);
  
  

  //document.querySelector(".main .container").style.opacity = "0";
  
  

  sectionOpened = where;

  if (where === "Skills") skillLoad();
  else if (where === "think") getAge();
  else if (where === "Gallery") loagGallery();

  
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



/*
  SKILLS SPECTRE GRAPH

  */
 function spectralSkillsLoad(){

 let contenu = document.getElementById("Skills").getElementsByClassName("contenu")[0];
  contenu.innerHTML = "";

  let canvas = document.createElement("svg")

  canvas.setAttribute("width", window.screen.width/1.2)
  canvas.setAttribute("height",  window.screen.height/1.2)
  canvas.setAttribute("id", "canvas")

  let centercanvas = {
    x: parseInt(canvas.getAttribute("width")/2),
    y: parseInt(canvas.getAttribute("height")/2)
  }
    

  let polyline_info = document.createElement("polyline")

  let r = canvas.getAttribute("height")/2.5
  let rad = 2*Math.PI/skills.length


  for (let i = 0; i < skills.length; i++) {

    let coordX = centercanvas.x+(r * Math.cos(i*rad))
    let coordY = centercanvas.y+(r * Math.sin(i*rad))

    if(i==0) polyline_info.setAttribute("points", `${coordX},${coordY}`)

    let cacheattr = polyline_info.getAttribute("points")

    polyline_info.setAttribute("points", `${cacheattr},  ${coordX},${coordY},   ${centercanvas.x},${centercanvas.y}`)
  }


  for (let i = 0; i < skills.length; i++) {

    let path_skills = document.createElement("path")

    let coordfX = centercanvas.x+(r*(skills[i].pourcent)/100) * Math.cos((i+1)*rad)
    let coordfY = centercanvas.y+(r*(skills[i].pourcent)/100) * Math.sin((i+1)*rad)

    let coordX = centercanvas.x+(r*(skills[i].pourcent)/100) * Math.cos(i*rad)
    let coordY = centercanvas.y+(r*(skills[i].pourcent)/100) * Math.sin(i*rad)

    path_skills.setAttribute("d", `M${centercanvas.x} ${centercanvas.y}`)

    let cacheattr = path_skills.getAttribute("d")

    path_skills.setAttribute("d", `${cacheattr}   L${coordX} ${coordY}   L${coordfX} ${coordfY} L${centercanvas.x} ${centercanvas.y} Z`)
    path_skills.setAttribute("class", `skill_pourcent`)

    canvas.appendChild(path_skills)

  }


  for (let i = 0; i < skills.length; i++) {

    let svg = document.createElement("svg")

    let path_skills_hover = document.createElement("path")

    let coordX = centercanvas.x+(r * Math.cos(i*rad))
    let coordY = centercanvas.y+(r * Math.sin(i*rad))    
    
    let coordfX = centercanvas.x+(r * Math.cos((i+1)*rad))
    let coordfY = centercanvas.y+(r * Math.sin((i+1)*rad))

    path_skills_hover.setAttribute("d", `M${centercanvas.x} ${centercanvas.y}`)

    let cacheattr = path_skills_hover.getAttribute("d")

    path_skills_hover.setAttribute("d", `${cacheattr}   L${coordX} ${coordY}   L${coordfX} ${coordfY} L${centercanvas.x} ${centercanvas.y} Z`)
    path_skills_hover.setAttribute("id", `stats`)

    path_skills_hover.setAttribute("class", `skillHover`)

    svg.setAttribute("id", `ID${skills[i].title}`)
    svg.appendChild(path_skills_hover)
    canvas.appendChild(svg)


  }


  polyline_info.setAttribute("style", "fill:none;stroke:white;stroke-width:0.2;")



// TEXT ABOUT SKILLS

  for (let i = 0; i < skills.length; i++) {

    let text = document.createElement("text")

    let tmpRad = (i * rad) + rad/2
  
    text.setAttribute("x", centercanvas.x+(r*1.1* Math.cos(tmpRad)))
    text.setAttribute("y", centercanvas.y+(r*1.1* Math.sin(tmpRad)))
    text.setAttribute("font-weight", "bold")
    
    text.innerText = skills[i].title

    canvas.appendChild(text)

  }
// TEXT ABOUT END




  canvas.appendChild(polyline_info)

  contenu.appendChild(canvas)
  contenu.innerHTML += ""



  }

/* 
    SKILLS triage
 */

function skillsort(){

  let contenu = document.getElementById("Skills").getElementsByClassName("contenu")[0];
  contenu.innerHTML = "";
  

  for (let i = 0; i < skills.length; i++) {
    
    let skillbox = document.createElement("div");
    let skillDefault = document.createElement("div");
    let skillbar = document.createElement("div");
    let title = document.createElement("div");
  
    skillDefault.id = "skillDefault";
    skillbar.className = "skillbar";

    skillbar.setAttribute("style", `width: ${skills[i].pourcent}%`);
    title.innerHTML = skills[i].certif ? `<span class="button">${skills[i].title}</span>` : skills[i].title;

    skillDefault.appendChild(skillbar);
    skillbox.onmouseover = (e) => {
      openSkillShow(skills[i].title, e);
    };

    skillbox.className = "skillbox";

    skillbox.appendChild(title);
    skillbox.appendChild(skillDefault);
    contenu.appendChild(skillbox);

    contenu.innerHTML += "";

    
  }

}


function skillLoad(){


  if(window.innerWidth < 1200) {
    skillsort()
  }
  else{  
    spectralSkillsLoad();
  }
}

/* GET AGE */

function getAge() {
  let age = (Date.now() - new Date(1996, 6, 17).getTime()) / 1000;
  age /= (24 * 3600 * 365)
  document.getElementById("mon_age").innerText = parseInt(age)
}



/* ****** */

function preload(){
  
/* LAUNcHING FUNCTION */

  document.querySelector(".main .container").style.opacity = "1";
  
  writesite();
}

window.addEventListener("orientationchange", () => {
  window.location.reload();
});


window.addEventListener("DOMContentLoaded", preload);