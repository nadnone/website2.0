function writesite()
{
    let text = document.location.href;
    let i = 0;
    let rand = Math.floor(Math.random() * 1000);

    setInterval(() => {
        i = writeloop(text, i)
    }, rand % 450);

}
function writeloop(text, i)
{
    if(i < text.length){
        document.getElementById("blocktowrite").innerText += text[i];
        i++;
    }
    else 
    {
        i = 0;
        document.getElementById("blocktowrite").innerText = "";   
    }
    return i;
}

