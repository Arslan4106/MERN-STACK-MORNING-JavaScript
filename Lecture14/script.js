// Functions in JS
// Piece of Code
// Builtin Functions:

// User Defined Functions:
// function functionName() {
//   statements;
// }

function logger() {
  console.log("I am a MERN STACK Developer");
}
logger(); // calling the function, invoking the function, running the function
logger();
logger();
logger();
// write a program to calcalute the average of three numbers using function
function average(num1, num2, num3) {
  // parameters
  let sum = num1 + num2 + num3;
  let avg = sum / 3;
  console.log("The Average of Three numbers is:", avg);
}
average(5, 8, 17); // Arguments
average(10, 20, 30);

// function Declaration:
function cutFruits(fruit) {
  return fruit * 4;
  //   console.log(fruit * 4);
}
function fruitProcessor(apples, bananas, mangoes) {
  let applePieces = cutFruits(apples);
  let bananaPieces = cutFruits(bananas);
  let mangoPieces = cutFruits(mangoes);
  let juice = `Juice with ${applePieces} Pieces of Apples and ${bananaPieces} Pieces of Bananas, and ${mangoPieces} Pieces of Mangoes`;
  return juice;
  //   console.log(juice);
  //   console.log("Hello");
}
console.log(fruitProcessor(2, 5, 3));

// Write a program to calculate the age of a person
// Fucntions Declaration

console.log(calcAge(2000, 2026));
function calcAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}
// console.log(calcAge(2000, 2026));

// Function Expressions
// console.log(calcAgeNew(1999, 2026));
const calcAgeNew = function (birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
};
console.log(calcAgeNew(1999, 2026));

// Arrow Function
const calcAgeNew2 = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  return age;
};
console.log(calcAgeNew2(1995, 2026));
// What is the difference between function Decalration and function Expression?
// Function Declaration:
// We can call the function before the function definition
