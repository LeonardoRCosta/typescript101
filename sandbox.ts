// arrays
let names = ["Leo", "Rafa", "Luiz"];

names.push("Lucas");
// names.push(10) -> Assignment error

let numbers = [10, 20, 30];

numbers.push(10);
// numbers.push('Leo') -> Assignment error

let mixed = [10, "Leo", "Rafa", 140];

mixed.push(10);
mixed.push("Luiz");

// objects
let fighter = {
  name: "Leo",
  belt: "black",
  age: 20,
};

fighter.age = 18;
// fighter.age = "Leo" -> Assignment error

