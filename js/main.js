// 1. creo variabile per classe hamburger-menu //
// 2. creo variabile per classe fa-bars a cui assegno valore 'button' //
// 3. creo variabile per classe close a cui assegno valore 'closemenu' //

const hamburger = document.getElementsByClassName ('hamburger-menu');
const button = document.getElementsByClassName ('fa-bars');
const closeMenu = document.getElementsByClassName ('close');



// avvio l'evento con click //

button.addEventListener("click", function() { 
    'hamburger-menu' = "display-block"
});

closeMenu.addEventListener("click", function() { 
'hamburger-menu' = "display-none"
});



