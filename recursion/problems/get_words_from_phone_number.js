/*
"Words From Phone Number" or "Letter Combinations of a Phone Number"
(Combinations here is used in colloquial sense, not as a "set" but as a "permutation")

Given a seven-digit phone number, return all the character combinations that can be generated according to the following mapping:

[image of phone digit pad with abc for 2... etc]

Return the combinations in the lexicographical order.

Example One
{
"phone_number": "1234567"
}
Output:

[
"adgjmp",
"adgjmq",
"adgjmr",
"adgjms",
"adgjnp",
...
"cfilns",
"cfilop",
"cfiloq",
"cfilor",
"cfilos"
]
First string "adgjmp" in the first line comes from the first characters mapped to digits 2, 3, 4, 5, 6 and 7 respectively. Since digit 1 maps to nothing, nothing is appended before 'a'. Similarly, the fifth string "adgjnp" generated from first characters of 2, 3, 4, 5 second character of 6 and first character of 7. All combinations generated in such a way must be returned in the lexicographical order.

Example Two
{
"phone_number": "1234567"
}
Output:

[""]
Notes
Return an array of the generated string combinations in the lexicographical order. If nothing can be generated, return a list with an empty string "".
Digits 0 and 1 map to nothing. Other digits map to either three or four different characters each.
Constraints:

Input string is 7 characters long; each character is a digit.


/* ====== Thought Process =====

for each number we have 3 options. Or 0 options.

Manager will look at a number, append one of 3/4 letters to a slate, or append nothing
  - we need a dictionary of number -> letter options.
  - hand subproblem down to subordinate



*/

/**
 * @param {str} phone_number
 * @return {list_str}
 */
function get_words_from_phone_number(phone_number) {
  const lookup = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const result = [];
  helper(phone_number, 0, ''); // if using string, we will use more space because more copies created. could use an array to save on space. 
  return result;
  // phone number and i are the problem set,
  // [] is the slate of blanks
  function helper(phone_number, i, slate) {
    // Base case
    if (phone_number.length === i) {
      result.push(slate);
      return;
    } else {
      // Recursive case
      // based on lookup, append a letter to the slate, hand problem to subordinate/helper
      // loop thru the leters on lookup. If empty string, loop will do nothing.
      let letters = lookup[phone_number[i]]
      if (!letters.length) {
        // handle not appending
        // do nothing. element excluded
        helper(phone_number, i + 1, slate);
      } else {
        // append each letter
        for (let j = 0; j < letters.length; j++) {
          slate = slate + letters[j]; // append the choice
          helper(phone_number, i + 1, slate);
          slate = slate.slice(0, -1);
        }
      }
      
    }
  }
}


console.log('\n******************** OUTPUT ************\n');
let input = {
  "phone_number": "333333333"
}

let result = get_words_from_phone_number(input.phone_number);
console.group()
console.log('result:', result)
console.log('RESULT LENGTH', result.length)
const freqMap = result.reduce((map, item) => {
  if (!map.has(item)) {
    map.set(item, 1);
  } else {
    map.set(item, map.get(item) + 1);
  }
  return map;
}, new Map());
console.log(freqMap)
console.log([...freqMap.values()].some(value => value > 1))
console.log('\n******************** ************\n')
console.groupEnd()

// Lots of results
// worst case 4^9 or 3^9
//Math.pow(3, 9)
//19683