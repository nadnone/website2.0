
/* SKILLS SPECTRO GRAPH */

  function spectralSkillsLoad(){

    let contenu = document.getElementById("Skills");
     contenu.innerHTML = "";
   
   
     let canvas = document.createElement("svg")
   
     canvas.setAttribute("width", window.innerWidth/1.2)
     canvas.setAttribute("height",  window.innerHeight)
     canvas.setAttribute("id", "canvas")
   
     let centercanvas = {
       x: parseInt(canvas.getAttribute("width")/4), // on bouge un peu à gauche
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
   
       canvas.appendChild(text)
   
     }
   // TEXT ABOUT END
   
   
   
   
     canvas.appendChild(polyline_info)
   
     contenu.appendChild(canvas)
     contenu.innerHTML += ""
   
   
   
     }
   
   /* 
       SKILLS old trie function ( for small screens )
    */
   
   function skillsort(){
   
     let contenu = document.getElementById("Skills");
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
   