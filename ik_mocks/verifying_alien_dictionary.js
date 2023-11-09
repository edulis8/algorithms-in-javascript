/*
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/



// somehow iterating thru words
// checking if they are sorted correctly
// if find invalid order, return false;
// else return true

// brute force
// iterate thrugh, compare chars, use alphabet indices to decide if they're in correct order, 
*/

// O(word.length * chars.length) time, quadratic
// O(a.length)


// USE HASH map for alphabet
// use sub function to check is in order
  // iterate over SMALLER word
  // a smaller word with no invalid orders goes first, so return true
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

    
function isInOrder(word1, word2, lookup) {
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    const char = word1[i];
    const nextChar = word2[i];
    if (lookup[char] > lookup[nextChar]) {
      return false;
    }
    if (lookup[char] < lookup[nextChar]) {
      return true;
    }
  }
  return word1.length <= word2.length;
}

function isAlienSorted(words, order) {
  const alphabet = order.split('')
  const lookup = alphabet.reduce((object, item, i) => {
    object[item] = i;
    return object;
  }, {});
  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i];
    const nextWord = words[i + 1];
    // handle first word shorter
    if (!isInOrder(word, nextWord, lookup)) {
      return false;
    }
  }
  return true;
}