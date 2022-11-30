// explicit types
var character;
var age;
var isLoggedIn;
// age = 'Luigi' -> Assignment error
age = 30;
// isLoggedIn = 24 -> Assignment error
isLoggedIn = true;
// arrays
var ninjas = [];
// union types
var mixed = [];
// ninjas = [10, 23] -> Assignment error
ninjas = ["Leo", "Rafa"];
// mixed.push(false) -> Assignment error
mixed.push(20);
mixed.push("Leo");
var uid;
// uid = false -> Assignment error
uid = 123;
uid = "123";
// objects
var ninjaOne;
ninjaOne = { name: "leo", age: 30 };
var ninjaTwo;
ninjaTwo = { name: "leo", age: 30, beltColour: "black" };
