/*

408. Valid Word Abbreviation
Easy
621
2K
company
Facebook
Datadog
company
Google



A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (no substrings replaced)
The following are not valid abbreviations:

"s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
"s010n" (has leading zeros)
"s0ubstitution" (replaces an empty substring)
Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

A substring is a contiguous non-empty sequence of characters within a string.

 

Example 1:

Input: word = "internationalization", abbr = "i12iz4n"
Output: true
Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
Example 2:

Input: word = "apple", abbr = "a2e"
Output: false
Explanation: The word "apple" cannot be abbreviated as "a2e".
 

Constraints:

1 <= word.length <= 20
word consists of only lowercase English letters.
1 <= abbr.length <= 10
abbr consists of lowercase English letters and digits.
All the integers in abbr will fit in a 32-bit integer.

*/



// setup two pointers and current number
  // loop while the pointers are within the string bounds
      // if the abbr char is a number
          // add the number to the previous number times 10
    // for example "12" will be 1 first then 10 + 2
          // if the new number is zero return false for leading zeros
          // increment the abbv pointer
      // if the number is greater than zero
          // move the word pointer by number spaces
          // reset the number
      // if the characters match
          // increment both pointers
      // otherwise the characters don't match so return false
  // the abbv is valid if the abbv pointer made it all the way through the string
  // and the word pointer plus any remaining number made it through the string


  /**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  if (abbr.length > word.length) return false;

  let ap = 0;
  let wp = 0;

  while (ap < abbr.length) {
      let curr = abbr[ap];
      if (!isNaN(parseInt(curr))) {
          // digit found
          if (curr == '0') return false; // no leading 0s
          // skip ahead that many indices in word, (below we'll make sure that many values even exist, if not return false)
          // skip ahead past number's digit length in abbr
          // wp increased
          // ap increased
          let [zoomWord, zoomAbbr] = zoom(abbr, ap);
          wp += zoomWord;
          ap += zoomAbbr;
      } else {
          // after skipping, if our pointers went too far, 
          // or chars are not the same, 
          // invalid!
          if (wp > word.length || ap > abbr.length || word[wp] != abbr[ap]) {
              return false;
          }
          // we can move forward by one if we got this far.
          ap++;
          wp++;
      }
  }
  if (wp != word.length) {
      return false;
  }
  return true;


  function zoom(string, p) {
    let low = p;

    while (p < string.length && !isNaN(parseInt(string[p]))) {
        p++;
    }
  
    const parsedNumber = parseInt(string.substring(low, p)); // skip ahead word
    const lengthOfNumber = p - low;
    return [parsedNumber, lengthOfNumber];
  }  
};



// input word, and an abbreviation
// dont need to calculate all abbrevs
// just check if input one is valid
// return true/false

// how check?
// if abbr is greater than word return false
// if abbr is a number only, word must have that length
// if a mix
// word must have i, then 12 chars, then iz, then 4 chars, then n
// for every number, check if has that many chars between two characters (or start or end)

// two pointers, word pointer and abbr pointer

// iterate over abbr (while loop, while abbrPointers < abbr.length)

// if chars are the same, keep going, else return false;
// if a number is found
  // if it is 0 return false. no 0s or leading 0s allowed.
  // get entire number
  // skip ahead that many indices in word, make sure that many values even exist, if not return false
  // skip ahead past number in abbr
// continue comparing chars/nums like this till end



// bravo
// 5
// b 3 0
// br 2 o
// bra1o
// br3
// 1 ravo
// 2 avo
// 3 vo
// 4 o
// b 4
// br 3
// bra 2
// brav 1
// 2a2



var validWordAbbreviation = function(word, abbr) {
    // Check if the abbreviation is longer than the word, which is invalid.
    if (abbr.length > word.length) return false;
  
    let ap = 0; // Initialize abbreviation pointer.
    let wp = 0; // Initialize word pointer.
  
    // Iterate through the abbreviation.
    while (ap < abbr.length) {
      let curr = abbr[ap]; // Get the current character in the abbreviation.
      
      // If the current character is a digit (number), handle abbreviations.
      if (!isNaN(parseInt(curr))) {
        // Check for leading zeros in the abbreviation.
        if (curr === '0') return false;
  
        // Extract and calculate the length of the number in the abbreviation.
        let [zoomWord, zoomAbbr] = zoom(abbr, ap);
  
        // Move the word and abbreviation pointers ahead by the calculated length.
        wp += zoomWord;
        ap += zoomAbbr;
      } else {
        // If the current character is not a digit, compare it with the word.
        // Ensure that both pointers are within their respective string lengths.
        if (ap >= abbr.length || wp >= word.length || word[wp] != abbr[ap]) {
          return false;
        }
        // Move both pointers forward by one character.
        ap++;
        wp++;
      }
    }
  
    // After processing the entire abbreviation, check if the word pointer reached the end.
    // If not, the abbreviation doesn't match the word.
    if (wp != word.length) {
      return false;
    }
    
    // If all checks passed, the abbreviation matches the word.
    return true;
  
    function zoom(string, p) {
      let low = p;
  
      // Find the end of the number in the abbreviation.
      while (p < string.length && !isNaN(parseInt(string[p])) {
        p++;
      }
  
      // Extract the number and its length in the abbreviation.
      const parsedNumber = parseInt(string.substring(low, p));
      const lengthOfNumber = p - low;
      
      return [parsedNumber, lengthOfNumber];
    }
  };