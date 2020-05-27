"use strict";

/*
En tant qu'utilisateur, 
Je veux pouvoir appuyer sur les chiffres
Afin de les voir s'afficher dans l'écran
*/

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien
// quelque chose
// 3ème étape: Au clic du bouton, la valeur du bouton s'affiche
// dans le console
// 4ème étape: Récupérer mon élément écran (et regarder dans la console)
// 5ème étape: Dans mon élément écran, ajouter la valeur de mon bouton
// au texte déjà existant

let screen = document.querySelector("#screen");
let screenResult = document.querySelector("#screen--result");

function printNumber() {
  // console.log(this.textContent);
  let nb = this.getAttribute("data-symbol");
  screen.textContent += nb;
  // console.log(screen.textContent);
}

let buttons = document.querySelectorAll(".number");
console.log(buttons);
// buttons.forEach(button => button.addEventListener("click", printNumber))

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", printNumber);
}

/*
En tant qu'utilisateur,
Je veux pouvoir appuyer sur les symboles arithmétiques
Afin qu'ils s'affichent à l'écran

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Au clic du bouton, la valeur du bouton s'affiche 
// dans le console
// 4ème étape: Récupérer mon élément écran (et regarder dans la console)
// 5ème étape: Dans mon élément écran, ajouter la valeur de mon bouton
// au texte déjà existant
*/
function printSymbol() {
  let symb = this.getAttribute("data-symbol");
  screen.textContent += symb;
}

let symbols = document.querySelectorAll(".symbol");
console.log(symbols);

symbols.forEach((symbol) => symbol.addEventListener("click", printSymbol));

/*
En tant qu'utilisateur,
Je veux pouvoir appuyer sur la touche AC
Afin que le calcul à l'écran se réinitialise

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton AC
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Récupérer l'élément écran
// 4ème étape: on vide le texte dans cet élément
*/

function reset() {
  screen.textContent = null;
}

let ac = document.querySelector("#buttonAC");

ac.addEventListener("click", reset);

/*
En tant qu'utilisateur,
Je veux pouvoir appuyer sur une touche égale
Afin que le calcul complet s'exécute et le résultat s'affiche à l'écran

// 1ère étape: faire en sorte qu'on puisse cliquer sur un bouton =
// 2ème étape: Vérifier qu'au clic du bouton, il se passe quelque chose
// 3ème étape: Récupérer l'élément écran
// 4ème étape: On exécute le texte, et on remplace le texte précédent
// dans l'écran par le nouveau

*/

function calcul() {

  //elève les espaces des éléments dans "data-symbol"
  let screenContent = screen.textContent.replace(/\s/g, "");

    screenResult.textContent = `= ${eval(screenContent)}`;
    reset();
}

let equal = document.querySelector("#buttonEqual");

equal.addEventListener("click", calcul);

