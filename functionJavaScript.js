// snippet from W3schools 

//When user scrolls page, exe myFunction
window.onscroll = function() {myFunction()};

//Get navbar
let navbar = document.getElementById('navbar');

let sticky = navbar.offsetTop;

function myFunction()  {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')

    } else {
        navbar.classList.remove("sticky");
    }
}
