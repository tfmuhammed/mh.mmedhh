const sr = ScrollReveal ({
    distance: '35px' , 
    duration: 2400,
    reset: true
});

sr.reveal('.main-img', {delay:210, origin: "left"});
sr.reveal('.main-text h1', {delay:310, origin: "top"});
sr.reveal('.main-text h4', {delay:410, origin: "right"});
sr.reveal('.social', {delay:210, origin: "bottom"});

sr.reveal('.row', {delay:510, origin: "left"});
sr.reveal('.button', {delay:610, origin: "top"});
sr.reveal('.center', {delay:710, origin: "right"});

sr.reveal('.photo', {delay:810, origin: "top"});

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})