const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicleOld = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicleOld(oldCivic);

// The above has an issue... it's long
// The below replaces this

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}

printVehicle(oldCivic); // This still works! As long as the object has
                        // all the attributes of a Vehicle, it works!

const myCar = {
  name: 'prius',
  make: 'toyota',
  year: 2010,
  broken: false
};

printVehicle(myCar); // This works, even though we added an extra!

interface Color {
  name: string;
  r: number;
  g: number;
  b: number;
}

const tint = (color: Color, newColor: Color) => {
  color.name = color.name + '-' + newColor.name;
  color.r += newColor.r; color.r /= 2;
  color.g += newColor.g; color.g /= 2;
  color.b += newColor.b; color.b /= 2;
};

const myColor = {
  name: 'red',
  r: 255,
  g: 0,
  b: 0
};

const myTint = {
  name: 'yellow',
  r: 255,
  g: 255,
  b: 0
};

tint(myColor, myTint);
console.log(myColor);