import { themes_load, theme_menu } from './themes.js';
import { resize } from './window_resize_mobile.js';
import { writesite } from './writesitename.js';
import { goButton, goLink } from './buttons_events.js';


async function preload(){


if (window.screen.width > 1201)
{
    resize()
}

themes_load();
theme_menu();

/* LAUNcHING FUNCTION */
 setTimeout(() => {
    document.querySelector(".menubg").style.opacity = "1";
  }, 500);


  if (window.screen.width > 1201 || window.screen.orientation.type.includes("landscape")) writesite();

}


// Events

window.addEventListener("orientationchange", () => {
  window.location.reload();
});

window.addEventListener("DOMContentLoaded", preload);



// menu
document.querySelectorAll(".buttons div").forEach((elem) => {

  elem.addEventListener("click", () => {
    
    console.log(elem.innerText);
    goButton(elem.innerText);
  })

})

// linkedin
document.querySelector(".logoLink").addEventListener("click", () => {
  goLink('https://www.linkedin.com/in/nadnone/');
});