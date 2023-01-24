"use strict";

// 8-kyu: Issues-2
// #### Unfinished Loop - Bug Fixing

function createArray(number){
  let newArray = [];
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}
createArray(5);

// #### Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript