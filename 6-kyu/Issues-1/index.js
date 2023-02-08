"use strict";

// 6-kyu: Issues-1
// #### Create Phone Number

function createPhoneNumber(numbers) {
  const firstNumber = numbers.slice(0, 3).join("");
  const secondNumber = numbers.slice(3, 6).join("");
  const thirdNumber = numbers.slice(6).join("");
  const array = [`(${firstNumber}) ${secondNumber}-${thirdNumber}`].join("");
  return array;
}

// ### Write a function that accepts an array of 10 integers (between 0 and
// ### 9), that returns a string of those numbers in the form of a phone
// ### number.

// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
