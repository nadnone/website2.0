let text_current_char = 0;

function writesite()
{

    setInterval(constantLoop, 400);
}
function writeloop()
{
    let text = "nadnone.ch\xa0:)";
    let blocktowrite = document.getElementById("blocktowrite");

    if(text_current_char < text.length){
        blocktowrite.innerText += text[text_current_char];
        text_current_char++;
    }
    else 
    {
        text_current_char = 0;
        blocktowrite.innerText = "";   
    }

}

function constantLoop()
{
    let rand = Math.floor(Math.random() * 1000) + 600;
    setTimeout(writeloop, rand);

}

