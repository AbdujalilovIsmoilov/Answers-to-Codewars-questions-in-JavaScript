"use strict";

// 8-kyu: Issues-9
// #### Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  if (name.split("")[0].toLowerCase() == "R".toLowerCase()) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
areYouPlayingBanjo("rustam");

// ### Create a function which answers the question "Are you playing banjo?".
// ### If your name starts with the letter "R" or lower case "r", you are playing banjo!
// ### The function takes a name as its only argument, and returns one of the following strings:

/* 
Example: 

name + " plays banjo" 
name + " does not play banjo"

*/

// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
