"use strict";

// creation de variables correspondant au différents éléments du DOM
let screen = document.querySelector("#screen");
let screenResult = document.querySelector("#screen--result");
let symbols = document.querySelectorAll(".symbol");
let buttons = document.querySelectorAll(".number");
let ac = document.querySelector("#buttonAC");
let equal = document.querySelector("#buttonEqual");

//Fonctions affichant les resultats

function printNumber() {
    
  let nb = this.getAttribute("data-symbol");
  screen.textContent += nb;
  screenResult.textContent += `= ${nb}`;
}

function printSymbol() {
  let symb = this.getAttribute("data-symbol");
  screen.textContent += symb;
}

function reset() {
    screen.textContent = null;
}

function calcul() {
            
  //elève les espaces des éléments dans "data-symbol"
  let screenContent = screen.textContent.replace(/\s/g, "");
            
  screenResult.textContent = `= ${eval(screenContent)}`;
  reset();
}


//appel des fonctions via boutons
// buttons.forEach(button => button.addEventListener("click", printNumber))

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", printNumber);
}

symbols.forEach((symbol) => symbol.addEventListener("click", printSymbol));


ac.addEventListener("click", reset);




equal.addEventListener("click", calcul);

