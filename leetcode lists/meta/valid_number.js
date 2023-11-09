/**
 * A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.
For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

 

Example 1:

Input: s = "0"
Output: true
Example 2:

Input: s = "e"
Output: false
Example 3:

Input: s = "."
Output: false
 

Constraints:

1 <= s.length <= 20
s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.



// TIME LINEAR ONE LOOP
// SPACE CONSTANT
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let hasDigits = false;
  let hasDot = false;
  let hasE = false;
  let isDigitMissingAfterE = false;
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      let prev = s[i-1];
      if (!isNaN(Number(char))) { // all chars must be integers 
          hasDigits = true;
          isDigitMissingAfterE = false;
      } else if (char === '-' || char === '+') {
        // + or - must be at beginning or after an e
          if(i !== 0 && prev.toLowerCase() != 'e') {
              return false;
          }
      } else  if (char === '.') {
        // '.' must be at beginning, end or between two integers 
        // which is valid for any spot
        // it just can't be after an e or another dot.
        // only one .
          if (hasE || hasDot) return false;
          hasDot = true;
      } else if (char.toLowerCase() === 'e') {
          // only one 'e'
          // no 'e' at the beginning
          if (hasE || !hasDigits) return false;
          hasE = true;
          isDigitMissingAfterE = true; // e must not be at the end
      } else { // not a digit
          return false;
      }
  }
  // has digits and the last el is not e
  return hasDigits && !isDigitMissingAfterE;
};

const res = isNumber('.1')
console.log(res)

// X all chars must be integers 
// X + or - must be at beginning or after an e
// X . must be at beginning, end or between two integers
// e must not be at the beginning or end
// only one .
// only one 'e'
// no . after e

