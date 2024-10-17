// Creates an array containing names of five books in the library
const books = [
  'To Kill a Mockingbird',
  '1984',
  'Pride and Prejudice',
  'The Great Gatsby',
  'The Catcher in the Rye',
];

// Logs length of the books array
console.log(books.length);

// Log each book title
console.log(`Available in the library: ${books[0]}`);
console.log(`Available in the library: ${books[1]}`);
console.log(`Available in the library: ${books[2]}`);
console.log(`Available in the library: ${books[3]}`);
console.log(`Available in the library: ${books[4]}`);

// Replace the first book in the array with a new book.
books[0] = 'The Hobbit';

// Check if "The Hobbit" is the first element in the array
if (books[0] === 'The Hobbit') {
  console.log(`${books[0]} is now available`);
}
