// Object.entries() is related to Object.keys , but instead of returning just keys, it returns both keys and values in the array fashion. This makes it very simple to do things like using objects in loops or converting objects into Maps.

const cars = { Honda: 1, Tesla: 4, HotWheels: 15 };

// Instead of extracting keys and performing more lookups on the parent object:
Object.keys(cars).forEach(key => {
  console.log(`key: ${key} --- value: ${cars[key]}`);
});

// From ES2017 onwards:
for (let [key, value] of Object.entries(cars)) {
  console.log(`key: ${key} --- value: ${value}`);
}
