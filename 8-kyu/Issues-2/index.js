"use strict";

// 8-kyu: Issues-2

function createArray(number){
  let newArray = [];
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}
createArray(5);

// #### Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
// #### Unfinished Loop - Bug Fixing
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript