// Creates an array containing names of five favorite movies
const favoriteMovies = [
  'The Matrix',
  'Inception',
  'Interstellar',
  'Pulp Fiction',
  'The Godfather',
];

// Logs the length of the array
console.log(favoriteMovies.length);

console.log('-----------------------------------');
console.log('For loop');

// `for` loop starts at 0, runs while i is less than length of favoriteMovies array
// Increments by 1
for (let i = 0; i < favoriteMovies.length; i++) {
  // This statement will run each time the loop is executed
  console.log(`I love watching ${favoriteMovies[i]}!`);
}

console.log('-----------------------------------');
console.log('For-of loop');

// `for-of` loop executes once for each item in the array
for (const movie of favoriteMovies) {
  // This statement will run each time the loop is executed
  console.log(`I love watching ${movie}!`);
}
