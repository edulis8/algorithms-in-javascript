
// create freq map for pattern. 

// for each string of length(pattern), (aka 3). // linear do o1 work by maintain one map, fixed window of length pattern
  // check if is anagram (0(alphabet.length))
  // O(text.length * alphabet.length)



// brute force:
// for each string of length(pattern), 
  // check if is anagram (0(pattern))
  // O(text.length * pattern * alphabet.length)
  // Quadratic

// how check anagram?
  // same freq map for two string
  // compare the freq maps.

// advancing on text, do o1 work by maintain one map, fixed window of length pattern
// Input: text = "cbaebabacd", pattern = "abc"
// Output: [0,6]
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


// Input: text = "abab", pattern = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".



// JUSTIN
https://leetcode.com/problems/find-all-anagrams-in-a-string/submissions/1201864084


function findAnagrams(s, p) {
  if (p.length > s.length) return [];
  const pChars = new Array(26).fill(0);
  const diff = 'a'.charCodeAt(0);
  for (let i = 0; i < p.length; i++) {
      pChars[p.charCodeAt(i) - diff]++;
  }
  const sChars = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
      const charCode = s.charCodeAt(i) - diff;
      sChars[charCode]++;
  }
  const indices = [];
  let left = 0;
  while (left <= s.length - p.length) {
      // compare sChars with pChars
      if (isAnagram(sChars, pChars)) {
          indices.push(left);
      }
      // discard
      // left is always at the first item in window, discard at index 0
      sChars[s.charCodeAt(left) - diff]--;
      // add left + p.length, add at index 3
      sChars[s.charCodeAt(left + p.length) - diff]++;
      // move window forward
      left++;
  }
  return indices;
};

function isAnagram(sChars, pChars) {
  for (let i = 0; i < pChars.length; i++) {
      if (pChars[i] !== sChars[i]) {
          return false;
      }
  }
  return true;
}

                          // create freq map for pattern. 

                          // for each string of length(pattern), (aka 3). // linear do o1 work by maintain one map, fixed window of length pattern
                              // check if is anagram (0(alphabet.length))
                              // O(text.length * alphabet.length)



                          // brute force:
                          // for each string of length(pattern),
                              // check if is anagram (0(pattern))
                              // O(text.length * pattern * alphabet.length)
                              // Quadratic

                          // how check anagram?
                              // same freq map for two string
                              // compare the freq maps.

                          // advancing on text, do o1 work by maintain one map, fixed window of length pattern
                          // Input: text = "cbaebabacd", pattern = "abc"
                          // Output: [0,6]
                          // The substring with start index = 0 is "cba", which is an anagram of "abc".
                          // The substring with start index = 6 is "bac", which is an anagram of "abc".


                          // Input: text = "abab", pattern = "ab"
                          // Output: [0,1,2]
                          // Explanation:
                          // The substring with start index = 0 is "ab", which is an anagram of "ab".
                          // The substring with start index = 1 is "ba", which is an anagram of "ab".
                          // The substring with start index = 2 is "ab", which is an anagram of "ab".






/// MY INCOMPLETE / DISORGANIZED APPROACH
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 
 * CLARIFY: could pattern be larger than text? if so return empty array?
 */
var findAnagrams = function (text, pattern) {
  // c - 'a' = number between 0->25
  // JS letter.charCodeAt(0) - 'a'.charCodeAt(0);
  const pFreqs = Array.from({ length: 26 }, () => 0);
  const textFreqs = Array.from({ length: 26 }, () => 0);

  // one freq array for pattern
  // one for text sliding
  // decr one prev to window
  // incr one newly in window
  for (const letter of pattern) {
      const i = letter.charCodeAt(0) - 'a'.charCodeAt(0);
      pFreqs[i]++;
  }
  const output = [];

  // for (let j = 0; j < pattern.length; j++) {
  //     const letter = text[j];
  //     const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0);
  //     textFreqs[idx] += 1;
  // }
  // window of length 3 init ^
  console.log({ pFreqs, textFreqs })
  for (let i = 0; i < text.length; i++) {
      if (i < pattern.length) { // add first 3 items
          const letter = text[i];
          const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0);
          textFreqs[idx] += 1;
          continue;
      }
      // now we have 3 items (0,1,2)
      // now i is 3

      // increment window
      // decr one prev to window
      // incr one newly in window
      // "cbaebabacd"
//.            ^
      if (i >= pattern.length) { // if i is 3, we have 4 items, window needs to be moved
          const discard = text[i - pattern.length].charCodeAt(0) - 'a'.charCodeAt(0);
          //console.log('removing', text[i - pattern.length - 1])
          textFreqs[discard] = Math.max(0, textFreqs[discard] - 1) // decr prev
          const curr = text[i].charCodeAt(0) - 'a'.charCodeAt(0);
          //console.log('adding', {i}, text[i])
          textFreqs[curr] += 1;
          //console.log('first 5', textFreqs.slice(0, 5))
      }
      if (textFreqs.toString() === pFreqs.toString()) {
          // how check anagram?
          // same freq map for two strings
          // compare the freq maps.
          // anagram found
          output.push(i - pattern.length) // push idx at beginning of window.  3-3=0
      }
  }
  return output;
};


