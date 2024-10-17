- [JavaScript Fundamentals for MERN Stack Development](#javascript-fundamentals-for-mern-stack-development)
  - [1. Basic JavaScript Syntax](#1-basic-javascript-syntax)
  - [2. Objects and Arrays](#2-objects-and-arrays)
  - [3. Asynchronous JavaScript](#3-asynchronous-javascript)
  - [4. ES6+ Features](#4-es6-features)
  - [5. Modules](#5-modules)
  - [6. DOM Manipulation](#6-dom-manipulation)
  - [7. AJAX and Fetch API](#7-ajax-and-fetch-api)
  - [8. Error Handling](#8-error-handling)
  - [9. Functional Programming Concepts](#9-functional-programming-concepts)
  - [10. Basic Algorithms and Data Structures](#10-basic-algorithms-and-data-structures)
  - [Next Steps](#next-steps)

# JavaScript Fundamentals for MERN Stack Development

Before diving into the MERN (MongoDB, Express.js, React, Node.js) stack, it's crucial to have a solid understanding of JavaScript fundamentals. This guide outlines the key concepts you should master to prepare for MERN stack development.

## 1. Basic JavaScript Syntax

- Variables and data types (string, number, boolean, null, undefined, object, array)
- Operators (arithmetic, comparison, logical)
- Control structures (if/else, switch, loops)
- Functions (declaration, expression, arrow functions)

```javascript
// Example
let name = "John";
const age = 30;
let isStudent = false;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

function greet(name) {
  return `Hello, ${name}!`;
}

const multiply = (a, b) => a * b;
```

## 2. Objects and Arrays

- Object creation and manipulation
- Array methods (map, filter, reduce, forEach)
- Destructuring

```javascript
// Objects
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Destructuring
const { name, age } = person;
const [first, second, ...rest] = numbers;
```

## 3. Asynchronous JavaScript

- Callbacks
- Promises
- Async/Await

```javascript
// Promise example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
}

// Async/Await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## 4. ES6+ Features

- Let and const
- Template literals
- Spread and rest operators
- Default parameters
- Classes

```javascript
// ES6+ examples
const greeting = `Hello, ${name}!`;

const newArray = [...numbers, 6, 7];

function logParams(a, b, ...rest) {
  console.log(a, b, rest);
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

## 5. Modules

- Import and export syntax
- Default and named exports

```javascript
// math.js
export const add = (a, b) => a + b;
export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply, { add } from './math.js';
```

## 6. DOM Manipulation

- Selecting elements
- Modifying content and attributes
- Event handling

```javascript
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

## 7. AJAX and Fetch API

- Making HTTP requests
- Handling responses

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## 8. Error Handling

- Try/catch blocks
- Throwing and handling errors

```javascript
try {
  // Code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message);
}
```

## 9. Functional Programming Concepts

- Pure functions
- Immutability
- Higher-order functions

```javascript
// Higher-order function example
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

const result = operateOnNumbers(5, 3, (a, b) => a + b);
```

## 10. Basic Algorithms and Data Structures

- Sorting and searching algorithms
- Working with arrays and objects efficiently
- Basic data structures (stacks, queues)

```javascript
// Simple sorting example
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = unsortedArray.sort((a, b) => a - b);
```

## Next Steps

In the `Javscript Practice Activities` folder you will see a bunch of activities for you to work on to get familiar with the necessary Javscript topics. Most activity folders will have a `Solved` and `Unsolved` folder with a readMe.md file

Once you're comfortable with these JavaScript fundamentals, you'll be well-prepared to start learning the MERN stack:

1. Node.js and npm basics
2. Express.js for building APIs
3. MongoDB and Mongoose for database operations
4. React for building user interfaces

Remember, the key to mastering these concepts is practice. Build small projects, solve coding challenges, and gradually increase the complexity of your applications.
