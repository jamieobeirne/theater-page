

/*import * as bootstrap from 'bootstrap';*/

/*hamburger menu toggle on/off*/
let hamburger_button = document.getElementById("toggle", { passive: true });
let menu = document.querySelector(".small_sreen_header_navigation", { passive: true });
let close_hamburger_button = document.getElementById("close_menu", { passive: true });
menu.style.display = "none";

hamburger_button.addEventListener("click", function display() {
    menu.style.display = "block";
}, { passive: true });

close_hamburger_button.addEventListener("click", function closeMenu() {
    menu.style.display = "none";
}, { passive: true });
