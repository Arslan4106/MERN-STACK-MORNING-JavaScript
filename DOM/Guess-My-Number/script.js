// Guess My Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
// document.querySelector(".secretNumber").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".numbers").value;
  console.log(guess);
  if (!guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "No Number 😡";
      document.querySelector("body").style.backgroundColor = "darkred";
      score--; // score = score - 1 => score = 20 - 1 => score = 19;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector("body").style.backgroundColor = "darkred";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Large 📈";
      score--; // score = score - 1 => score = 20 - 1 => score = 19;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector("body").style.backgroundColor = "darkred";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 📉";
      score--; // score = score - 1 => score = 20 - 1 => score = 19;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Have Lost the Game 😭";
      document.querySelector("body").style.backgroundColor = "darkred";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "👉 Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secretNumber").textContent = secretNumber;
  }
  // console.log("You have Clicked on the Button");
  // console.log("YOu have Clicked");
});
// console.log(check);
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(36, 36, 36)";
});
