const carMakers: string[] = [];
const dates = [new Date(), new Date()];

// 2-D arrays
const carsByMake: string[][] = [];

// Help with inference when extracting vals
const car = carMakers[0]; // <- string inferred!

// Prevent incompatible values
// carMakers.push(100); <- Errors!

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});