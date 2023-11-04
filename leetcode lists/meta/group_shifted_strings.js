// We can shift a string by shifting each of its letters to its successive letter.

// For example, "abc" can be shifted to be "bcd".
// We can keep shifting the string to form a sequence.

// For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
// Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

 

// Example 1:

// Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
// Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
// Example 2:

// Input: strings = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strings.length <= 200
// 1 <= strings[i].length <= 50
// strings[i] consists of lowercase English letters.


// SOLUTION LINEAR WITH HASHAMP (SPACE LINEAR)
/*
Hash = {
  '#0#1#2': [ 'abc', 'bcd', 'xyz' ],
  '#0#2#4#5': [ 'acef' ],
  '#0#25': [ 'az', 'ba' ],
  '#0': [ 'a', 'z' ]
}

If you create your own charCode dictionary, you can speed things up, it will be faster than using charCodeAt() , to speed up the process.
The overall idea is to map patterns
Also take care of rotation i.e "za" and "yz" by adding 26
*/


const groupStrings = function (strings) {
  const hash = {};
  // const charCodes = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
  
  for (let word of strings) {
    let key = "";
    // get char code for first letter in word
    const num = word.charCodeAt(0);
    console.log('char', word[0], 'num', num)
    for (let idx = 0; idx < word.length; idx++) {
      // iterate over word, get codes
      const numNextChar = word.charCodeAt(idx);
      console.log('char next', word[idx], 'numNextChar', numNextChar)
      // diff is all char codes subtracted by first char code
      let diff = numNextChar - num;
      console.log('diff', diff)
      // if diff is negative, add 26, it wraps around
      if (diff < 0) diff = diff + 26;
      key += "#"; // add a delimiter
      key += diff; // create they key of diff#diff
    }
    hash[key] = hash[key] || [];
    hash[key].push(word);
  }
  console.log('hash', hash)
  return Object.values(hash);
};



let strings = ["ba", "az","bcd","acef","xyz","az","ba","a","z", "pap", "qbq", "pzq", "qar"];

const result = groupStrings(strings);
console.log(result)


// Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
// Example 2:

// Input: strings = ["a"]
// Output: [["a"]]