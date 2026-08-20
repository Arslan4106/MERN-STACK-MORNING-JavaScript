// Storing all the elements into variables
const scoreEl0 = document.getElementById("score--0");
console.log(scoreEl0);
const scoreEl1 = document.getElementById("score--1");
console.log(scoreEl1);
const currentEl0 = document.getElementById("current--0");
console.log(currentEl0);
const currentEl1 = document.getElementById("current--1");
console.log(currentEl1);
const diceEl = document.querySelector(".dice");
console.log(diceEl);
const btnNew = document.querySelector(".start-Game");
console.log(btnNew);
const btnRoll = document.querySelector(".rolldice");
console.log(btnRoll);
const btnHold = document.querySelector(".hold");
console.log(btnHold);
let currentScore = 0;
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
btnRoll.addEventListener("click", function () {
  // 1. Generating a Random number b/w 1 & 6
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the Dice Roll
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //dice-5.png;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    currentEl0.textContent = currentScore;
  } else {
    // Player Switch
  }
});
