let greet: Function;

// greet = 'hello' -> Assignment error

greet = () => {
  console.log("hello");
};

//                                 ? means an optional argument
const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
}

const result = minus(5, 10);