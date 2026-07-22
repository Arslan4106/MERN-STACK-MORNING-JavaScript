// Nested if Statement
// write a program to find the greater number between
// three numbers using nested if Statement
// let num1 = Number(prompt("Enter Your First Number"));
// let num2 = Number(prompt("Enter Your Second Number"));
// let num3 = Number(prompt("Enter Your third Number"));
let num1 = 78;
let num2 = 99;
let num3 = 100;
if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 is greater between three numbers");
  } else {
    console.log("num3 is greater between three numbers");
  }
} else {
  if (num2 > num3) {
    console.log("num2 is greater between three numbers");
  } else {
    console.log("num3 is greater between three numbers");
  }
}

// if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else {
//   statement;
// }

let marks = 30;
if (marks >= 90 && marks <= 100) {
  console.log("Your Grade is A+");
} else if (marks >= 80 && marks < 90) {
  console.log("Your Grade is A");
} else if (marks >= 70 && marks < 80) {
  console.log("Your grade is B+");
} else if (marks >= 60 && marks < 70) {
  console.log("Your Grade is B");
} else if (marks >= 50 && marks < 60) {
  console.log("Your Grade is C");
} else {
  console.log("You are Fail");
}

// The Switch Statement
let day = prompt("Enter Your Day Number");
console.log(day, typeof day);
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Please Enter the Correct Number between 1 & 7");
}
// Type Conversion, Type Coercion, Loose Equality Operator, Strict Equality
// Loose Equality Operator: Loose Equality Operator uses Type Coercion
// Strict Equality Operator: Strict Equality Operator does not use Type Coercion.

if (day === 1) {
  console.log("Today is Monday");
} else if (day === 2) {
  console.log("Today is Tuesday");
} else if (day === 3) {
  // '3' == 3
  console.log("Today is Wednesday");
} else if (day === 4) {
  console.log("Today is Thursday");
} else if (day === 5) {
  console.log("Today is Friday");
} else if (day === 6) {
  console.log("Today is Saturday");
} else if (day === 7) {
  console.log("Today is Sunday");
} else {
  console.log("Please Enter the Correct Number between 1 & 7");
}

console.log(18 + "18");
console.log(40 - "20");
console.log(20 * "2");
let mynum = Number("100");
console.log(mynum, typeof mynum);
