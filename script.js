/* In the HTML tag, the div tag has an id of “nav-icon” */
var icon = document.getElementById("nav-icon");


/* In the html tag, the nav tag has an id of “nav” */

var nav = document.getElementById("nav");

/* Since we have defined the variable “icon” we add event listener for the  click */

icon.addEventListener("click", function () {

    /* creates a toggle of when clicked it opens and closes */

    nav.classList.toggle("open")
})
