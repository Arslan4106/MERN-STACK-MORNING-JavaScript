// if (condition) {
//   statement;
// } else {
//   statement;
//

// write e program to find the greater number between two numbers
let num1 = 78;
let num2 = 90;
if (num1 > num2) {
  console.log("num1 is greater than num2", num1, "Vs", num2);
} else {
  console.log("num2 is greater than num1", num1, "Vs", num2);
}

// Write a program, to find weather you are eligible for driving or not
let age = 12;
if (age >= 18) {
  console.log("You are eligible for Driving");
} else {
  console.log("You are not Eligible for Driving");
}

// Nested If Statement
// Write a program to find the greater between three numbers using nested if statement
let number1 = 34;
let number2 = 178;
let number3 = 999;
if (number1 > number2) {
  if (number1 > number3) {
    console.log("number1 is greater between three numbers");
  } else {
    console.log("number3 is greater between three numbers");
  }
} else {
  if (number2 > number3) {
    console.log("number2 is greater between three numbers");
  } else {
    console.log("number3 is greater between three numbers");
  }
}
