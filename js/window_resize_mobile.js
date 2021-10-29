function resize(){

    window.addEventListener("resize", (event) =>{

        document.querySelector(":root").style.setProperty("--full_screen", window.innerHeight +"px")
        window.location.reload();
    });

}


if (window.screen.width > 1201)
{
    resize()
}

