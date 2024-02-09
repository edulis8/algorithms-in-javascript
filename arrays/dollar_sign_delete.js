// Good afternoon, narthexdreams! Here's our prompt for today.

// You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

// Each of these strings will be run through a method to operate on the $ DELETE action. We want to find out if the final string is the same for all of them. Let's take an example:

// TIME: O(characters in all words) or O(arr.length * avgWordLength)
// SPACE: O(longest word) or O(1) if longest word is capped at a certain value

function isDollarDeleteEqual(arr) {
  // loop
  // outer stack, resets after each loop

  const res = new Set; // not counting this in space complexity bc its the result

  let str = ''; 

  for (const string of arr) {
    for (const char of string) {
      if (char != '$') {
        str += char; 
      } else {
        str = str.slice(0, -1); // new string generated, immediately stored in 'str', so the new string is prob garbaage collected and doesn't count in space complexity.
      }
    }
    res.add(str);
    str = '';
  }
  
  
  // set
  // array
  console.log({arr})
  console.log({res})
  return res.size;
}


const input = ['a90$n$c$se', 'a90n$cse']

const result = isDollarDeleteEqual(input)

console.log('***', {result})

