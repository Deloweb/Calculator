"use strict";

// creation de variables correspondant au différents éléments du DOM
let screen = document.querySelector("#screen");
let screenResult = document.querySelector("#screen--result");
let symbols = document.querySelectorAll(".symbol");
let buttons = document.querySelectorAll(".number");
let ac = document.querySelector("#buttonAC");
let equal = document.querySelector("#buttonEqual");

//Fonctions affichant les resultats des clics

//Fonction affichant les chiffres
function printNumber() {

  //Attribution du symbol du bouton cliqué (chiffre) à la variable nb
  let nb = this.getAttribute("data-symbol");

  //Affiche le chiffre cliqué dans l'écran (screen)
  screen.textContent += nb;

  //On enlève tous les espaces du string (screen) et on met cela dans la variable screenContent
  let screenContent = screen.textContent.replace(/\s/g, "");
  
  //On affiche le résultat de l'équation dans screenResult avec un arrondit à 2 chiffres après la virgule
  screenResult.textContent = `= ${Math.round(eval(screenContent)*100)/100}`;

  //On enlève la classe "result" au screenResult
  screenResult.classList.remove("result");
}

//Focntion affichant le symbole cliqué
function printSymbol() {

  //Attribution du symbol du bouton cliqué à la variable symb
  let symb = this.getAttribute("data-symbol");

  //Affiche le symbol à l'écran screen
  screen.textContent += symb;

  //On enlève la classe "result" au screenResult
  screenResult.classList.remove("result");

}

//Fonction effaçant le contenu des screens
function reset() {
  screen.textContent = null;
  screenResult.textContent = null;
}

//Fonction affichant le résultat en grand
function printResult() {

  //Ajoute la classe "result" à screenResult afin d'afficher le résultat en grand
  screenResult.classList.add("result");
}

//appel des fonctions via boutons
buttons.forEach(button => button.addEventListener("click", printNumber));

symbols.forEach((symbol) => symbol.addEventListener("click", printSymbol));

ac.addEventListener("click", reset);

equal.addEventListener("click", printResult);
