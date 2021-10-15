/**
 * In the game of golf, each hole has a "par", meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. 
 * Depending on how far above or below par your strokes are, there is a different nickname.
 * Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority;
 */

// SOLUTION ONE
/**
 * 
 * @param {Number} par 
 * @param {Number} strokes 
 * @returns 
 * 
 * CODE EXPLANATION
 * (1) Compare the parameters "par" and "strokes" to return appropriate string values.
 * (2) `if / else if` chaining is used for flow control.
 * (3) String “Go Home!” is returned for every condition where strokes is greater than or equal to par + 3.
 */
function golfScoreONE(par, strokes) { // (1)
  if (strokes == 1) { // (2)
    return 'Hole-in-one!';
  } else if (strokes <= par -2) { // (2)
    return 'Eagle';
  } else if (strokes == par -1) {
    return 'Birdie';
  } else if (strokes == par) {
    return 'Par';
  } else if (strokes == par + 1) {
    return 'Bogey';
  } else if (strokes == par +2) {
    return 'Double Bogey';
  } else {
    return 'Go Home!'; // (3)
  }
}
// change the values to test
golfScoreONE(4, 5);
/*

*/

////


// Solution TWO
/**
 * CODE EXPLANATION
 * Since we already have an array defined in the variable names we can take advantage of it and use it for our return statements using indexes (eg: names[0] is the first one). 
 * That way, if you ever need to change a specific result you wouldn’t need to look for it inside the function, it’d be at the beginning, in your array.
*/

let names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];

function golfScoreTWO(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}
// change the values to test
golfScoreTWO(4, 5);



////


// Solution THREE
// using multiple conditional ternary operators
function golfScore(par, strokes) {
  return strokes == 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes == par - 1
    ? names[2]
    : strokes == par
    ? names[3]
    : strokes == par + 1
    ? names[4]
    : strokes == par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]
    : "Change Me";
}