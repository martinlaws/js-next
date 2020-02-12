// Array.prototype.includes()

const arr = [1, 2, 3, 4, NaN];

// Instead of
if (arr.indexOf(3) >= 0) {
  console.log(true);
}

// We can use
if (arr.includes(3)) {
  console.log(true);
}

// This is also helpful because .indexOf doesn't work on NaN
arr.indexOf(NaN); // returns false
arr.includes(NaN); // returns true
