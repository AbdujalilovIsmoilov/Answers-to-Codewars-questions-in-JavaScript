"use strict";

// 8-kyu: Issues-3
// #### Calculate average

function findAverage(array) {
  const total = array.reduce((a, b) => {
    return a + b;
  }, 0);
  if (array.length > 0) {
    return total / array.length;
  } else {
    return 0;
  }
}

// #### Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
