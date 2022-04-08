import text_list from '../config/sitewrite_list.js';

let text_current_char = 0;
// on prend un texte au pif dans le tableau
let text = text_list[time_text_change()];


function time_text_change()
{
    let nb = Math.round(Math.random() * text_list.length)
    return (nb % text_list.length)
}

function writesite()
{
    setInterval(constantLoop, 350);
}
function writeloop()
{

    let blocktowrite = document.getElementById("blocktowrite");

    // mouvement alternatif pour simuler un éffacement 
    let block = Math.round(Math.abs(Math.sin( text_current_char++ * 10 * (Math.PI / 180) ) * text.length))

    // on ajoute le substring dans la div
    blocktowrite.innerText = text.slice(0, block)

    if (blocktowrite.innerText.length < 1) text = text_list[time_text_change()];

}

function constantLoop()
{
    // incrémentation randomisé dans le temps pour simuker une écriture humaine
    let rand = Math.floor(Math.random() * 600) + 260;
    setTimeout(writeloop, rand);

}

export { writesite };