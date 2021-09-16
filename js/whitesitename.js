function writesite()
{
    let text = document.location.href;
    let i = 0;
    let rand = Math.floor(Math.random() * 10000);

    setInterval(() => {
        rand = Math.floor(Math.random() * 10000);
        i = writeloop(text, i)
    }, rand % 460);

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

