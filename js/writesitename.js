let text_current_char = 0;

function writesite()
{
    setInterval(constantLoop, 350);
}
function writeloop()
{
    let text = "nadnone.ch\xa0:)";
    let blocktowrite = document.getElementById("blocktowrite");

    // mouvement alternatif pour simuler un éffacement 
    let block = Math.abs(Math.sin( text_current_char++ * 10 * (Math.PI / 180) ) * text.length).toFixed(0)

    // on ajoute le substring dans la div
    blocktowrite.innerText = text.slice(0, block)

}

function constantLoop()
{
    // incrémentation randomisé dans le temps pour simuker une écriture humaine
    let rand = Math.floor(Math.random() * 600) + 260;
    setTimeout(writeloop, rand);

}

