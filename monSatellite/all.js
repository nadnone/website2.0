
let star = document.getElementById("star");
let sat = document.getElementById("sat");


// positions initiales
star.style.top = (window.innerHeight/2)-(120/2)+"px"; star.style.left = (window.innerWidth/2)-(120/2)+"px";
sat.style.top = (window.innerHeight/2)-(200/2)+"px"; sat.style.left = (window.innerWidth/2)-(50/2)+"px";


const PIXEL = 0.3
let speedTime = 1

const GRAVITY_UNIVERSAL = 6.67430 * 10**(-11) // force
const SAT_MASSE = 150 // kg Artificial Satelite
const ASTRE_MASS = 5.972 * 10**24 // kg | Earth

const RAYON_TERRE = 6371 * 10**3 //m

const DISTANCE_SATELITE_min = 2.5 * 10 **3 + RAYON_TERRE//m
const DISTANCE_SATELITE_max = 5 * 10 **3 + RAYON_TERRE//m

let OB = DISTANCE_SATELITE_min
let OA = DISTANCE_SATELITE_max

let SB = OA

let T = 2 * Math.PI * Math.sqrt( SB**3 / (GRAVITY_UNIVERSAL * ASTRE_MASS) )


let time = 0.0;

let Fusat = 1

function timeLoop(){

    const RATIO_ECRAN = window.innerWidth/window.innerHeight


    let realTime = Date.now() / 1000

    time += realTime * speedTime


    let SO = Math.sqrt( SB**2 - OB**2 ) // a**2 = b**2 + c**2 => c = sqrt(a**2 - b**2)


    let e = SO/SB // excentricité (applatissement de l'elipse)

    let angle_OAP = (2*Math.PI/T) * time


    let angle_BSO = Math.sin( OB * Math.sin(90) / SB )

    let mouvement_moyen = 2*Math.PI/T

    let anomalie_moyenne = mouvement_moyen * (time - 0) * RATIO_ECRAN


    let AS = OA - SO;

    let SP = SB * ( 1 - e * Math.cos(angle_OAP) )

    let SH = SB * ( Math.cos(angle_OAP - e) )
    let HP = SB * Math.sqrt( 1 - e**2 ) * Math.sin(angle_OAP)

    let OH = SO - SH

    let OP = HP / Math.sin(angle_OAP)
    
    let R = OP;

    let v_eloignement = Math.sqrt(1/SB)

    let v_periphelie = Math.sqrt( (GRAVITY_UNIVERSAL * ASTRE_MASS / SB ) * ( 1+e ) / ( 1-e ) )
    let v_aphelie = Math.sqrt( (GRAVITY_UNIVERSAL*ASTRE_MASS/SB) * (1-e) / (1+e) )

    let d_periphelie = SB * ( 1 - e)
    let d_aphelie = SB * (1+e)


    //coordonées          
    let x = OH * PIXEL * v_eloignement * RATIO_ECRAN
    let y = HP * PIXEL * v_eloignement * RATIO_ECRAN

    sat.style.setProperty("left", `${parseFloat(star.style.left) + x*PIXEL}px`)
    sat.style.setProperty("top", `${parseFloat(star.style.top) + y*PIXEL}px`)
    
    document.getElementById("infobox").innerText = `
    Bienvenue sur mon tableau de bord, voici mon satellite imaginaire.



    Vitesse de la périphélie: ~${v_periphelie.toFixed(3)} m/s
    Vitesse de l'aphélie: ~${v_aphelie.toFixed(3)} m/s

    Coordonnées du satellite: (~${x.toFixed(3)},~${y.toFixed(3)}) en metres
    Vitesse angulaire du satellite: ~${(mouvement_moyen * 3600).toFixed(3)} km/h
    Masse du satellite: ${SAT_MASSE}kg
    
    Excentricité: ~${e.toFixed(5)}
    
    Echelle de distance: 1m = ~${(PIXEL*RATIO_ECRAN).toFixed(3)}pixel (s'adapte à l'écran)
    Echelle de temps: 1*${speedTime.toFixed(2)}

    Temps: ${new Date().getHours()}:${new Date().getMinutes()}:${(time%60).toFixed(0)} (d'après le timestamp)
    
    (je vous conseil de voir cette page sur un écran d'ordinateur)
    ` ; 

    if(time > T) time = 0
}

setInterval(timeLoop, 60);









window.addEventListener("resize", () => {
        // positions initiales
    star.style.top = (window.innerHeight/2)-(120/2)+"px"; star.style.left = (window.innerWidth/2)-(120/2)+"px";
    sat.style.top = (window.innerHeight/2)-(200/2)+"px"; sat.style.left = (window.innerWidth/2)-(50/2)+"px";
});

function changespeed(speed){
    speedTime *= speed
    if (speed == 0 ) speedTime = 1
}