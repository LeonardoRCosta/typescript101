var character = "Leo";
var age = 20;
var isBlackBelt = false;
// character = 20 -> Assignment error
character = "Leonardo";
// age = "Leo" -> Assignment error
age = 18;
// isBlackBelt = "yes" -> Assignment error
isBlackBelt = true;
// const circ = diameter => diameter * Math.PI;
// console.log(circ("lol")) -> NaN
var circ = function (diameter) { return diameter * Math.PI; };
console.log(circ(10));
