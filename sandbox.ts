// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'Luigi' -> Assignment error
age = 30;

// isLoggedIn = 24 -> Assignment error
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// union types
let mixed: (string | number)[] = [];

// ninjas = [10, 23] -> Assignment error
ninjas = ["Leo", "Rafa"];

// mixed.push(false) -> Assignment error
mixed.push(20);
mixed.push("Leo");

let uid: string | number;
// uid = false -> Assignment error
uid = 123;
uid = "123";

// objects
let ninjaOne: object;
ninjaOne = { name: "leo", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "leo", age: 30, beltColour: "black" };
