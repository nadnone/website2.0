
/* *********************/
/* BUTTONS */




// MENU BUTTONS

let sectionOpened = false;

function goButton(where){
  if (sectionOpened !== false) { document.getElementById(sectionOpened).parentNode.style.display = "none"; document.getElementById(sectionOpened).style.display = "none"; }
 
  UIkit.scroll('').scrollTo(`.main`, {duration: 0});

  document.getElementById(where).style.display = "flex";
  document.getElementById(where).parentNode.style.display = "flex";


  // document.body.scrollTo(0, window.innerHeight*2);
  //document.getElementById(where).scrollIntoView();
  document.querySelector(".main .container").style.opacity = "0";
  

  setTimeout(() => {
    UIkit.scroll('').scrollTo(`#${where}`, {duration: 1000});
    
  }, 600);
  

  sectionOpened = where;

  if (where === "Skills") skillLoad();
  else if (where === "think") getAge();
  else if (where === "Gallery") loagGallery();

  
}

/* MENU BUTTONS END */

function goLink(link){
  window.open(link, "_blank");

}

function goBack(node){

  UIkit.scroll('').scrollTo('#menubg', {duration: 1000});

  setTimeout(function(){
    node.parentNode.parentNode.style.display = "none";
    node.parentNode.style.display = "none";
    document.querySelector(".main .container").style.opacity = "1";
  }, 1200);


}



/* BUTTONS END */






/* AGE EVENT */

function show_ageInfo(){
  document.getElementById("code_show").style.visibility = "visible";
}

/* ************ */






/* Box info details */

function openSkillShow(title, e){
  
  let box = document.getElementById("box_info");

  let info;
  let certif = "";
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].title === title){
      info = (!skills[i].desc ? false : skills[i].desc);
      certif = skills[i].certif;

      box.onclick = () => {
        if (!skills[i].certif) return;
        goLink(skills[i].certif)
      };

    }
  }
  if(!info) return;

  box.innerHTML = `
    <table>
      <th>Connaissances</th>
  `;

  for (let i = 0; i < info[0].length; i++) {
    document.querySelector("#box_info table").innerHTML += `
    <tr><td>- ${info[0][i]}</td></tr>
  `;
  }
  box.innerHTML += `
    </table>
    ${(!certif ? "" : `<font style="font-weight: lighter; color: #A9A9A9";> [*] Vous pouvez cliquer sur ce panel pour voir le cértificat.</font>`)}
  `;



  box.style.top = (e.clientY >= window.screen.height - 400 ? window.screen.height - 400 : e.clientY) + "px";
  box.style.left = (e.clientX >= window.screen.width - 400 ? window.screen.width - 400 : e.clientX) + "px";
  box.style.visibility = "visible";
  box.style.opacity = "1";


}


function closeSkillShow(){
  let box = document.getElementById("box_info");
  box.style.opacity = "0";
}



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


  for (let i = 0; i < skills.length; i++) {

    let svg = document.getElementById(`ID${skills[i].title}`)

    let coord = svg.getElementById("stats").getAttribute("d").match(/L([0-9]+\.[0-9]+)\s([0-9]+\.[0-9]+)/m)

    // TODO ici

    svg.addEventListener("click", (event) => {
      openSkillShow(skills[i].title, event)
    })

    
  }


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

  setTimeout(() => {
    UIkit.scroll('').scrollTo(".menubg", {duration: 1000});
  }, 1500);

  setTimeout(() => {
    document.querySelector(".main .container").style.opacity = "1";
  }, 2300);

}

window.addEventListener("orientationchange", () => {
  window.location.reload();
});


window.onload = preload;