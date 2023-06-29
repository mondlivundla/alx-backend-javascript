# ES6 Classes

This repository provides a collection of examples and explanations for using ES6 classes in JavaScript. ES6 (ECMAScript 2015) introduced a new syntax for creating classes in JavaScript, making object-oriented programming more accessible and intuitive.

## Table of Contents

- [Introduction](#introduction)
- [Creating Classes](#creating-classes)
- [Constructor](#constructor)
- [Class Methods](#class-methods)
- [Class Inheritance](#class-inheritance)
- [Getters and Setters](#getters-and-setters)
- [Static Methods](#static-methods)
- [Conclusion](#conclusion)

## Introduction

ES6 classes provide a more structured and convenient way to work with objects and their behavior in JavaScript. They allow you to define a blueprint for creating objects with shared properties and methods. Classes provide a more familiar syntax for developers coming from other object-oriented languages, such as Java or C++.

## Creating Classes

To create a class in JavaScript, you use the `class` keyword followed by the class name. Here's a basic example:

```javascript
class Rectangle {
  // class definition
}
```

Creating an instance of a class is similar to calling a constructor function:

```javascript
const rect = new Rectangle();
```

## Constructor

The `constructor` method is a special method that is called when a new instance of a class is created. It allows you to initialize the object's properties. Here's an example:

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
```

You can create an instance of the `Rectangle` class and pass the necessary arguments to the constructor:

```javascript
const rect = new Rectangle(10, 5);
console.log(rect.width);  // Output: 10
console.log(rect.height); // Output: 5
```

## Class Methods

You can define methods inside a class to add functionality to your objects. These methods can be called on instances of the class. Here's an example:

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
```

You can call the `getArea()` method on a `Rectangle` instance:

```javascript
const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // Output: 50
```

## Class Inheritance

ES6 classes support inheritance, allowing you to create subclasses that inherit properties and methods from a base class. This helps you organize and reuse code efficiently. Here's an example:

```javascript
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
```

In this example, the `Square` class extends the `Rectangle` class and sets both the `width` and `height` to the `sideLength` argument. The `super` keyword is used to call the parent class's constructor.

## Getters and Setters

ES6 classes provide a way to define getters and setters for class properties. Getters retrieve the value of a property, and setters allow you to modify the value. Here's an example:

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error('Radius must be positive');
    }
    this._radius = value;
  }

  get area() {
    return Math.PI * this._radius * this._radius;
  }


}
```

In this example, the `radius` property is defined with a getter and a setter. The `area` property is defined with a getter only.

```javascript
const circle = new Circle(5);
console.log(circle.radius); // Output: 5
console.log(circle.area);   // Output: 78.53981633974483

circle.radius = 10;
console.log(circle.radius); // Output: 10
console.log(circle.area);   // Output: 314.1592653589793
```

## Static Methods

ES6 classes support static methods, which are methods that are accessed directly on the class itself, rather than on instances of the class. Static methods are useful for utility functions that don't depend on specific instance data. Here's an example:

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
```

You can call the `add()` method directly on the class:

```javascript
console.log(MathUtils.add(2, 3)); // Output: 5
```

## Conclusion

ES6 classes provide a cleaner and more intuitive way to work with object-oriented programming concepts in JavaScript. They allow you to create reusable and organized code by defining classes, constructors, methods, inheritance, getters, setters, and static methods. This repository serves as a starting point for exploring and learning more about ES6 classes in JavaScript.
