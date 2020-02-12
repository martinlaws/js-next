// Spread properties also look just like rest properties with three dots ... but the difference is that you use spread to create (restructure) new objects.
// Tip: the spread operator is used in the right side of the equals sign. The rest are used in the left-side of the equals sign.

const person = { firstName: "Martin", lastName: "Laws" };
const account = { name: "chequing", amount: "$50" };

const accountWithName = { ...person, ...account };
console.log(accountWithName);
