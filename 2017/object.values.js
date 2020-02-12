// Object.values() is a new function that’s similar to Object.keys() but returns all the values of the Object’s own properties excluding any value(s) in the prototypical chain.

const cars = { Honda: 1, Tesla: 4, HotWheels: 15 };

// Instead of the ES2015 approach below:
const vals = Object.keys(cars).map(key => cars[key]);
console.log(vals);

// From ES2017 onwards:
const values = Object.values(cars);
console.log(values);
