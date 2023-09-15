let apples: number = 5;
// apples = true; <- Errors!
apples = 6;
// apples = false; <- Errors!

let speed: string = 'fast';
// let speed: string = 5; <- Errors!

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'blue', 'yellow', 'green'];
let myNumbers: number[] = [1,2,3,4,5];
let myBools: boolean[] = [true, true, false];

// classes
class Car {
  
}
let car: Car = new Car();

// object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// let point: { x: number, y: number } = {
//   x: 10,
//   y: 'asdf'
// } <- Errors!

// functions <- HARD! Nasty. But you'll get used to it
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; ++i) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

let numbers = [-1, -10, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}