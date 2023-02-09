"use strict";

// 8-kyu: Issues-14
// #### Beginner - Reduce but Grow

const grow = (x) => x.reduce((a, b) => a * b);
grow([1, 2, 3, 4]);

// ### Given a non-empty array of integers, return the result of multiplying the
// ### values together in order. Example:

// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
