# ES6 Data Manipulation

This README provides an overview of data manipulation techniques using ES6 (ECMAScript 6), which is a widely used version of JavaScript. ES6 introduced several new features and enhancements to JavaScript, making data manipulation tasks more efficient and concise.

## Table of Contents

- [Array Manipulation](#array-manipulation)
  - [Map](#map)
  - [Filter](#filter)
  - [Reduce](#reduce)
- [Object Manipulation](#object-manipulation)
  - [Object Destructuring](#object-destructuring)
  - [Object Spread Operator](#object-spread-operator)
  - [Computed Property Names](#computed-property-names)
- [String Manipulation](#string-manipulation)
  - [Template Literals](#template-literals)
  - [String Methods](#string-methods)

## Array Manipulation

### Map

The `map` method allows you to transform each element of an array by applying a given function to it. It returns a new array with the transformed elements.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

### Filter

The `filter` method enables you to create a new array by selecting elements from an existing array that meet a specific condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### Reduce

The `reduce` method allows you to reduce an array into a single value by applying a function to each element and accumulating the result.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // Output: 15
```

## Object Manipulation

### Object Destructuring

Object destructuring provides a convenient way to extract values from objects and assign them to variables.

```javascript
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name, age); // Output: John 30
```

### Object Spread Operator

The object spread operator allows you to create new objects by copying properties from existing objects and adding new properties.

```javascript
const person = { name: 'John', age: 30 };
const employee = { ...person, position: 'Developer' };
console.log(employee); // Output: { name: 'John', age: 30, position: 'Developer' }
```

### Computed Property Names

Computed property names allow you to dynamically set the property name of an object using an expression in square brackets.

```javascript
const propName = 'age';
const person = { name: 'John', [propName]: 30 };
console.log(person.age); // Output: 30
```

## String Manipulation

### Template Literals

Template literals provide a more readable and flexible way to concatenate strings by allowing variable interpolation and multiline strings.

```javascript
const name = 'John';
const greeting = `Hello, ${name}!
How are you today?`;
console.log(greeting);
/*
Output:
Hello, John!
How are you today?
*/
```

### String Methods

ES6 introduced several string methods for common manipulations, such as `startsWith

`, `endsWith`, `includes`, `repeat`, and more.

```javascript
const message = 'Hello, world!';
console.log(message.startsWith('Hello')); // Output: true
console.log(message.endsWith('world!')); // Output: true
console.log(message.includes('world')); // Output: true
console.log('x'.repeat(3)); // Output: 'xxx'
```

These are just a few examples of how ES6 features can simplify and enhance data manipulation tasks in JavaScript. Experimenting with these techniques will help you become more proficient in working with data in JavaScript.
