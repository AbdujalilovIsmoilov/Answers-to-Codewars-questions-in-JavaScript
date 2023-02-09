"use strict";

// 8-kyu: Issues-17
// #### Counting sheep...

function countSheeps(arrayOfSheep) {
  const filterArray = arrayOfSheep.filter(el => el == true);
  return filterArray.length;
}
countSheeps(
  [
    true,true,false,true,false,true,
    true,true,false,false,true,true,
    false,true,false,true,true,false,
    true,true,false,true,false,true,
    true,true
  ]
)

// ### Consider an array/list of sheep where some sheep may be missing
// ### from their place. We need a function that counts the number of sheep
// ### present in the array (true means present).

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
