# ES6 Basics

## Table of Contents
- [Block Bindings with let and const](#block-bindings-with-let-and-const)
- [Arrow Functions](#arrow-functions)
- [Template Literals](#template-literals)
- [Enhanced Object Literals](#enhanced-object-literals)
- [Destructuring Assignment](#destructuring-assignment)
- [Modules](#modules)
- [Classes](#classes)
- [Iterators and Generators](#iterators-and-generators)
- [Promises](#promises)

## Block Bindings with let and const

ES6 introduced two new keywords, `let` and `const`, for declaring variables. The `let` keyword allows block-level scoping, replacing the traditional `var` keyword. The `const` keyword is used to declare constants.

```javascript
let x = 10;
x = 20; // Can be reassigned

const PI = 3.14159;
PI = 3.14; // Cannot be reassigned
```

## Arrow Functions

Arrow functions provide a more concise syntax for writing function expressions. They also have lexical scoping of `this`, meaning that they don't bind their own `this` value but instead inherit it from the enclosing scope.

```javascript
const sum = (a, b) => a + b;

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
```

## Template Literals

Template literals allow for more flexible string interpolation, enabling the embedding of expressions within backticks (`) instead of single or double quotes. They also support multi-line strings without the need for explicit line breaks.

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;

const multiLine = `
  This is a
  multi-line
  string.
`;
```

## Enhanced Object Literals

ES6 introduced enhanced object literals, providing a shorthand syntax for defining object properties and methods.

```javascript
const name = "John";
const age = 30;

const person = {
  name, // Equivalent to name: name
  age,  // Equivalent to age: age
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
```

## Destructuring Assignment

Destructuring assignment allows for efficient extraction of values from arrays or objects into distinct variables, making it easier to work with complex data structures.

```javascript
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;

const person = {
  name: "John",
  age: 30
};
const { name, age } = person;
```

## Modules

ES6 introduced a module system for organizing and reusing code. Modules allow for exporting and importing functionality between different JavaScript files.

```javascript
// math.js
export const sum = (a, b) => a + b;

// app.js
import { sum } from "./math.js";
console.log(sum(5, 10)); // Output: 15
```

## Classes

ES6 introduced class syntax for defining objects and their behaviors. Classes provide a more structured and intuitive way of

 working with objects, including constructor functions and class inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.greet();
```

## Iterators and Generators

ES6 introduced iterators and generators, which provide a standardized way to iterate over data collections. Iterators define a protocol for traversing sequences, while generators allow for creating iterators in a more concise and readable manner.

```javascript
const numbers = [1, 2, 3];

// Using for...of loop
for (const num of numbers) {
  console.log(num);
}

// Using custom iterator
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## Promises

Promises provide a cleaner way to handle asynchronous operations and simplify the chaining of multiple asynchronous tasks. Promises represent the eventual completion (or failure) of an asynchronous operation and allow for attaching callbacks to handle the results.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous operation
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
      // Or reject(Error("An error occurred"));
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

This README provides only a glimpse of the ES6 features. Explore further to discover more powerful concepts and functionalities that ES6 brings to JavaScript.

## Conclusion

This README covered some of the basic features and concepts, but there is much more to learn and explore in the world of ES6.
