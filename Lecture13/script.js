let firstName = "jonas";
let lastName = "Bob";
let job = "Web Developer";
let age = 26;
let language = "English";
let country = "USA";

console.log("15" + 15);
let jonas =
  "Hello! i am" +
  " " +
  firstName +
  " " +
  lastName +
  " " +
  "And I am " +
  " " +
  age +
  " " +
  "Years old " +
  job +
  " " +
  "And I live in" +
  " " +
  country +
  " " +
  ", and I speak" +
  " " +
  language;
console.log(jonas);
let jonasNew = `Hello! I am ${firstName} ${lastName}. And I am ${age} years old ${job}, and I live in ${country}, and I speak ${language}`;
console.log(jonasNew);

// Truthy Values and Falsy Values
// Falsy Value: 0, "", NaN, undefined, false, null
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(10));
let money = 0;
if (money) {
  console.log("You have Enough money to spend");
} else {
  console.log("You did not Have enough money to spend");
}

// Ternary Operator
// condition ? expression_if_true : expression_if_false;
let marks = 80;
marks >= 90
  ? console.log("You can take admission in UET")
  : console.log("You cannot take admission in UET");
