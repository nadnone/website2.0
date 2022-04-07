import skills from '../../config/skills.js';
import { addInfoBox } from './infobox.js';


let contenu = document.querySelector("#Skills");  

/* SKILLS SPECTRE GRAPH */

  function spectralSkillsLoad(){

    // clear 
    contenu.innerHTML = "";


    let svg = document.createElement("svg")
  
    svg.setAttribute("width", window.innerWidth * 95 / 100 )
    svg.setAttribute("height",  window.innerHeight)
    svg.setAttribute("id", "canvas")
  
    let centercanvas = {
      x: parseInt(svg.getAttribute("width")/4), // on bouge un peu à gauche
      y: parseInt(svg.getAttribute("height")/2)
    }
      
  
    let polyline_info = document.createElement("polyline")
  
    let r = svg.getAttribute("height")/2.5
    let rad = 2*Math.PI/skills.length
  
  
    for (let i = 0; i < skills.length; i++) {
      
      let coordX = centercanvas.x+(r * Math.cos(i*rad))
      let coordY = centercanvas.y+(r * Math.sin(i*rad))
  
      if(i==0) polyline_info.setAttribute("points", `${coordX},${coordY}`)
  
      let cacheattr = polyline_info.getAttribute("points")
  
      polyline_info.setAttribute("points", `${cacheattr},  ${coordX},${coordY},   ${centercanvas.x},${centercanvas.y}`)

    }
  
  
    // pourcentages

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




      svg.appendChild(path_skills)

    }
  
    polyline_info.setAttribute("style", "fill:none;stroke:white;stroke-width:0.2;")

  
  // TEXT ABOUT SKILLS
  
    for (let i = 0; i < skills.length; i++) {
  
      let text = document.createElement("text")
  
      let tmpRad = (i * rad) + rad/2
      
  
      text.setAttribute("x", centercanvas.x + (r * Math.cos(tmpRad)) )
      text.setAttribute("y", centercanvas.y + (r * Math.sin(tmpRad)) )
      text.setAttribute("font-weight", "bold")
      text.setAttribute("font-size", window.screen.height < 500 ? 12 : 18)
      
      text.innerText = skills[i].title
  
      svg.appendChild(text)
  
    }
  // TEXT ABOUT END



  
    svg.appendChild(polyline_info)
    contenu.appendChild(svg)

  
    // TODO info about skills
    contenu.addEventListener("click", (event) => {
      console.log("not implemented");
      //addInfoBox(contenu, event);
    })



  }
   
   /* 
       SKILLS old trie function ( for small screens )
    */
   
   function skillsort(){

    // clear 
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

    }

   }
   


   export { spectralSkillsLoad, skillsort };