// Rest operator ... (three dots) allows us to extract Object properties that are not already extracted.

// extract firstName and species, store everything else in 'leftovers'
const person = {
  firstName: "Martin",
  lastName: "Laws",
  heightInCm: 188,
  species: "human"
};

{
  const { firstName, species, ...leftovers } = person;
  console.log("firstName", firstName);
  console.log("species", species);
  console.log("leftovers", leftovers);
}

// better yet, use it to remove unwanted items
{
  const { species, heightInCm, ...sanitizedObject } = person;

  console.log(sanitizedObject);
}
