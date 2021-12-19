const isStartPattern = (string, pattern) => {
  return pattern.test(string)
}

/**
 * search for patterns in specific positions in strings
 */
 let firstRegex = /^Ricky/;

 let firstString = "Ricky is first and can be found.";
 console.log(isStartPattern(firstString, firstRegex));

 let notFirst = "You can't find Ricky now.";
 console.log(isStartPattern(notFirst, firstRegex));


 /**
  * Use the caret character in a regex to find Cal only in the beginning of the string `rickyAndCal`.
  */

  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/;

  console.log(isStartPattern(rickyAndCal, calRegex));