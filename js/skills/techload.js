function techload(){
    let canvas = document.getElementById("canvas");

    let centercanvas = {
        x: parseInt(canvas.getAttribute("width")), // on bouge un peu à droite
        y: parseInt(canvas.getAttribute("height")/2)
      }


    // on dessine
    let svg = document.createElement("svg");
    
    for (let i = 0; i < technologies_stats.length; i++)
    {
        let yPos = 0;
        if (i < 5)
        {
            yPos = canvas.getAttribute("height") - (canvas.getAttribute("height") / 4 * (i+1) ) ;
        }
        else
        {
            yPos = canvas.getAttribute("height") - ( (canvas.getAttribute("height") / technologies_stats.length) * i+1) - 60 ;
        }         


        let progressbar_base = document.createElement("rect");
        progressbar_base.setAttribute("width", 400);
        progressbar_base.setAttribute("height", window.screen.height < 600 ? 30 : 60);
        progressbar_base.setAttribute("x", centercanvas.x/1.4);
        progressbar_base.setAttribute("y", yPos);
        progressbar_base.setAttribute("style", "stroke:white; stroke-width:0.2;");
        progressbar_base.setAttribute("class", "skillHover");
    
        
        let progressbar_pourcent = document.createElement("rect");
        progressbar_pourcent.setAttribute("width", (400 / 100) * technologies_stats[i].pourcent / (window.screen.height < 600 ? 2 : 1));
        progressbar_pourcent.setAttribute("height", window.screen.height < 600 ? 30 : 60);
        progressbar_pourcent.setAttribute("x", centercanvas.x/1.4);
        progressbar_pourcent.setAttribute("y", yPos);
        progressbar_pourcent.setAttribute("class", "skill_pourcent")


        let text = document.createElement("text");
        text.setAttribute("x", centercanvas.x/1.6 );
        text.setAttribute("y", yPos + 30 );
        text.setAttribute("fill", "white");
        text.innerText = technologies_stats[i].name;
        text.setAttribute("style", `font-size: ${window.screen.height < 600 ? 12 : 18}pt;`);



        svg.appendChild(progressbar_base);
        svg.appendChild(progressbar_pourcent);
        svg.appendChild(text);

    }

    canvas.appendChild(svg);


    
    document.querySelector("#Skills").innerHTML += "";
}

