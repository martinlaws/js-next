// Two instance methods were added to String — String.prototype.padStart and String.prototype.padEnd — that allow appending/prepending either an empty string or some other string to the start or the end of the original string.

"5".padStart(10); // '          5'
"5".padStart(10, "=*"); //'=*=*=*=*=5'

"5".padEnd(10); // '5         '
"5".padEnd(10, "=*"); //'5=*=*=*=*='

// padStart can be really handy in situations where you need a specific length of input

// padEnd can be really handy if you want to right-align output like our code from earlier
const cars = { Honda: 1, Tesla: 4, HotWheels: 15 };

for (let [key, value] of Object.entries(cars)) {
  console.log(`key: ${key.padEnd(20, " -")} value: ${value}`);
}

// Or if we want to be really hardcore
for (let [key, value] of Object.entries(cars)) {
  console.log(`key: ${key.padEnd(10, " ").padEnd(20, " -")} value: ${value}`);
}
