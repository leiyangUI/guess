// // const guessContainer = document.querySelector(".btn");

// const guess = document.querySelector("#btnGuess");
// const reset = document.querySelector("#btnReset");
// const reponse = document.querySelector("#result");

// // guessContainer.addEventListener("click", () =>{
// //     guessContainer.classList.toggle("question-clicked")
// // })
// guess.addEventListener("click", () => {
//   console.log("click");
//   reponse.classList.toggle("show-response");
//   reponse.getElementsByClassName.background = "green";
// });

// // let result = "";
// // reponse.addEventListener("input", (e) => {
// //   result = e.target.value;
// // });
let choice = document.getElementById("choice");
let result = document.getElementById("result");
let essai = document.getElementById("count");
let num = 0;
let count = 0;

// GENERER UN NOMBRE ALÉATOIRE ENTRE 0 ET 100
function random_number() {
  num = parseInt(Math.random() * 101);
}

// COMPARER LE CHOIX DU JOUEUR ET LE NOMBRE CHOISI PAR LE PROGRAMME
function guess() {
  // VÉRIFIER QUE LE CHAMPS N'EST PAS VIDE
  if (choice.value == "") {
    // AFFICHER UN MESSAGE : RENTREZ UN NOMBRE
    result.innerText = "veuillez rentrer un nombre";
  } else {
    // SI LE NOMBRE EST INFÉRIEUR
    if (choice.value < num) {
      // MESSAGE : C'EST PLUS
      result.innerText = "C'est plus";
    }
    // SI LE NOMBRE EST SUPÉRIEUR
    if (choice.value > num) {
      // MESSAGE : C'EST MOINS
      result.innerText = "C'est moins";
    }
    // SI C'EST BON
    if (choice.value == num) {
      // MESSAGE : C'EST GAGNÉ
      result.innerText = "Bravo !!";
    }
    // INCRÉMENTER LE COMPTEUR
    count += 1;
    // AFFICHER LE COMPTEUR
    essai.innerText = `nombre d\'essai : ${count}`;
  }
}

// RÉINITIALISER LES VARIABLES
function reset() {
  // REGÉNÉRER LE NOMBRE ALÉATOIRE
  random_number();
  // VIDER LES CHAMPS
  choice.value = "";
  result.innerText = "...";
  essai.innerText = "nombre d'essai :";
  // RÉINITIALISER LE COMPTEUR
  count = 0;
}

random_number();
