let character = "Leo";
let age = 20;
let isBlackBelt = false;

// character = 20 -> Assignment error
character = "Leonardo";

// age = "Leo" -> Assignment error
age = 18;

// isBlackBelt = "yes" -> Assignment error
isBlackBelt = true;

// const circ = diameter => diameter * Math.PI;
// console.log(circ("lol")) -> NaN

const circ = (diameter: number) => diameter * Math.PI;
console.log(circ(10));
