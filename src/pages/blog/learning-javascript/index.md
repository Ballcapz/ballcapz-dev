---
title: 'On my learnings of JavaScript'
date: '2020-08-10'
---

# Learning more about Vue

A year ago I would have said I was pretty good using Vue, now I know how much I don't really know.

## Three sentence summaries:

- `v-model` is used to bind data to elements on the page
- `v-if` is used to conditionally render content on the page, it is NOT in the DOM
- `v-show` also conditionally renders content, it IS stil in the dom (sets display: none)

## Extrapolations:

# JavaScript

General learning and knowledge about javascript

## Higher Order Functions

- Arrays:

  - map : The map function takes a callback and applies it to each element of an array.

  ```js
  const arr = [
    { first: 'First', last: 'Last' },
    { first: 'Sam', last: 'Smith' },
  ];

  console.log(arr.map((person) => person.first + ' ' + person.last));
  // Produces: ["First Last", "Sam Smith"]
  ```

  - filter : The filter function takes a callback and if the element in the array satisfies the callback (i.e. makes it true), that element gets to stay!

  ```js
  const arr = [1, 3, 4, 5, 6, 9];

  console.log(arr.filter((num) => num % 2 !== 0));
  // Produces: [1, 3, 5, 9]
  ```

  - reduce : The reduce function is probably one of the most versatile, and I'm positive I don't know half of the uses for it yet, but what I've found it useful for compiling a list down to a single value, kinda like reducing it

  ```js
  const arr = [1, 2, 3];

  console.log(
    arr.reduce((total, nums) => (total += nums)),
    0,
  ); // setting total to start at 0
  // Produces: 6
  ```
