"use strict";

// 7-kyu: Issues-4
// #### JavaScript Array Filter

const getEvenNumbers = (numbersArray) => {
  const filteredNumbers = numbersArray.filter((el) => el % 2 == 0);
  return filteredNumbers;
};
getEvenNumbers([2, 4, 5, 6]);

// ### JavaScript Arrays support a filter function (starting in JavaScript 1.6).
// ### Use the filter functionality to complete the function given.
// ### The solution would work like the following:

// ### getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
