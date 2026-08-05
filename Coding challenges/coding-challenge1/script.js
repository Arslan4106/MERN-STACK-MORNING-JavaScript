// Coding Challenge One
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;
let markBMI = markMass / (markHeight * markHeight);
console.log("Mark BMI: ", markBMI);
let johnBMI = johnMass / (johnHeight * johnHeight);
console.log("John BMI: ", johnBMI);
let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is Higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is Higher than Mark's BMI (${markBMI})`);
}

// Coding Challenge No: 03
let dolphinAvg = (97 + 112 + 101) / 3;
let koalasAvg = (109 + 95 + 106) / 3;
console.log("Dolphin Average Score:", dolphinAvg);
console.log("Koalas Average Score: ", koalasAvg);
if (dolphinAvg > koalasAvg && dolphinAvg >= 100) {
  console.log("Dolphin is the Winner Team");
} else if (koalasAvg > dolphinAvg && koalasAvg >= 100) {
  console.log("Koalas is the Winner Team");
} else if (dolphinAvg == koalasAvg && dolphinAvg >= 100 && koalasAvg >= 100) {
  console.log("Draw");
} else {
  console.log("No Team Will win the Trophy");
}
