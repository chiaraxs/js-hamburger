// 1. creo variabile per classe hamburger-menu //
// 2. creo variabile per classe fa-bars a cui assegno valore 'openMenuButton' //
// 3. creo variabile per classe close a cui assegno valore 'closeMenuButton' //

// queryselector //
const hamburger = document.querySelector('.hamburger-menu');
const openMenuButton = document.querySelector('.fa-bars');
const closeMenuButton = document.querySelector('.close');

// avvio l'evento con click //

openMenuButton.addEventListener("click", function() { 
    hamburger.classList.add('active')
});

closeMenuButton.addEventListener("click", function() { 
    hamburger.classList.remove('active')
});



// bonus - clickCounter //

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
