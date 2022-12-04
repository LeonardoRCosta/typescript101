"use strict";
let greet;
// greet = 'hello' -> Assignment error
greet = () => {
    console.log("hello");
};
//                                 ? means an optional argument
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
const result = minus(5, 10);
