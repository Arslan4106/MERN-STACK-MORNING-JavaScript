let firstName = "John";
let lastName = "Steven";
console.log(firstName + " " + lastName);
console.log(firstName, lastName);
console.log(18 + "18");
let age = 26;
let currentJob = "Web Trainer";
let mydescription =
  "Hi, I am" +
  " " +
  firstName +
  " " +
  lastName +
  " " +
  ", a" +
  " " +
  age +
  " " +
  "years old" +
  " " +
  currentJob;
console.log(mydescription);
// Template Literals
let newDescription = `Hi, I am ${firstName} ${lastName}, a ${age} years old ${currentJob}`;
console.log(newDescription);

let country = "Pakistan";
let continent = "Asia";
let population = 354;
let language = "Urdu";
let description = `${country} is in ${continent} and its ${population} million people speaks ${language}`;
console.log(description);
