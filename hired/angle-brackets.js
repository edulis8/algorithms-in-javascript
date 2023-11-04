// given a string of only angle brackets, write a js function that adds angle brackets to the beginning and end to make all angle brackets match and return it


function matchAngleBrackets(str) {
  let openCount = 0;
  let result = str;

  // Count the number of open brackets
  for (let char of str) {
    if (char === '<') {
      openCount++;
    } else { // is '>'
      if (openCount > 0) {
        openCount--;
      } else {
        result = '<' + result; // Add a matching opening bracket
      }
    }
  }

  // Add any missing closing brackets at the end
  result += '>'.repeat(openCount);

  return result;
}

// Example usage:
const input = "<><><<";
const matchedString = matchAngleBrackets(input);
console.log(matchedString); // Outputs: "<><><<>>"






// my partial (bad) solution
const solution = (angles) => {
  let lessThanCounter = 0;
  let greaterThanCounter = 0;
  
  if (angles[0] === '>') greaterThanCounter++;
  if (angles[angles.length - 1] === '<') lessThanCounter++;
  
  for (let i = 1; i < angles.length - 2; i++) {
      let item1 = angles[i];
      if (item1 === '>') greaterThanCounter++;
      if (item1 === '<') lessThanCounter++;
      for (let j = i + 1; j < angles.length - 1; j++ ) {
          let item2 = angles[j];
          if (item2 === '<') greaterThanCounter--;
          if (item2 === '>') lessThanCounter--;
      }
  }
           
  while (lessThanCounter--) {
      angles = angles + '>';
  }
  while (greaterThanCounter--) {
       angles = '<' + angles;
  }
    // brute force
  // if a < has a > after it (two loops), dont count it
  // if a < doesn't have a > after it, lessThanCounter++, add > to end in that amount
  // if a > doesnt have a < before it, greaterThanCounter++, add < to the beginning in that amount
           
 return angles;
};

//> < < > <

// close any open brackets
// you can only add to begin or end
  
  
// count unpaired >, prepend with that count in <
// count unpaired <, append with that count in >

//> < < > <
  
// add < to beginning and >> to the end
  
// if begins with > have to add a < (that counter++)
// if ends with < have to add a > (that counter++)

 // <><><><> > < > >>>
// else
  // 
  
  // brute force
  // if a < has a > after it (two loops), dont count it
  // if a < doesn't have a > after it, lessThanCounter++, add > to end in that amount
  // if a > doesnt have a < before it, greaterThanCounter++, add < to the beginning in that amount