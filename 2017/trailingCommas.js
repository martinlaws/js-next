// The problem

// Developer 1 writes the following
const Person = (
  name,
  age,
  height,
  favouriteBook,
  favouriteMovie,
  favouriteTheatreProduction // <--- if we were to add a trailing comma here JS would throw an error
) => {};

// Developer 2 adds a new parameter
const Person = (
  name,
  age,
  height,
  favouriteBook,
  favouriteMovie,
  favouriteTheatreProduction, // <--- even though Dev2 only added the parameter below, git blame will show this line as Dev2's
  address
) => {};
