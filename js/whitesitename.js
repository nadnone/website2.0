let text_current_char = 0;

function writesite()
{

    setInterval(constantLoop, 400);
}
function writeloop()
{
    let text = "nadnone.ch";

    if(text_current_char < text.length){
        document.getElementById("blocktowrite").innerText += text[text_current_char];
        text_current_char++;
    }
    else 
    {
        text_current_char = 0;
        document.getElementById("blocktowrite").innerText = "";   
    }

}

function constantLoop()
{
    let rand = Math.floor(Math.random() * 1500) + 600;
    setTimeout(writeloop, rand);

}
