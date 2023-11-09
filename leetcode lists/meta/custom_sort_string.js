/**
 * 791. Custom Sort String
Medium
2.7K
330
company
Facebook
company
Google
company
Apple


You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

 

Example 1:

Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
Example 2:

Input: order = "cbafg", s = "abcd"
Output: "cbad"
 

Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.


 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  const map = s.split('').reduce((obj, item) => {
      obj[item] = obj[item] || '';
      obj[item] += item
      return obj;
  }, {})

  console.log(map)

  let result = '';
  for(let i = 0; i < order.length; i++) {
      const orderEl = order[i];
      if(map[orderEl]) {
          result += map[orderEl];
          delete map[orderEl];
      }
  }
  Object.values(map).forEach(el => {
      result += el;
  })

  return result;
};

// make a map of s with frequencies. frequencies stored as a: aa
// iterate over order
// if map has order[i]
// add to result freq times
// delete from map.
// continue to end of order
// append rest of map to result in any order


// all chars of order are unique
// but not s, i assume
// order and s aren't the same length
// if order < s, order s based on what is in order

// output is, in a diff order


// s - "abcd"
// 
// _ _ _ _
// one choice for each slot
// find char in s that matches first char in order, place first ... find char in s that matches 2nd, place 2nd

// OR

// find all permutations of s
// with logic - only allow an s char into 1st spot if


// make a map of s with frequencies. frequencies stored as a: aa
// iterate over order
// if map has order[i]
// add to result freq times
// delete from map.
// continue to end of order
// append rest of map to result in any order

// time: linear
// space: map + result string - linear