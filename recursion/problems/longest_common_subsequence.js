/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var _longestCommonSubsequence = function (text1, text2) {
  if (text1 === text2) {
      return text1.length
  }
  // ace
  // abcde 

  // '' a c e ac ae ce // what is time complexity for generating all sets?

  // a b c d e ab ac ad ae ace

  // what's the longest common SET
  // that is <= 3 in length (shorter one)

  // list of sets from text1
  // list of set from text2
  // find longest common set

  const shorterLength = Math.min(text1.length, text2.length);

  let shorter;
  let longer;
  if (text1.length >= text2.length) {
      longer = text1;
      shorter = text2
  } else {
      longer = text2;
      shorter = text1;
  }
  
  const shorterSets = [];
  const longerSets = [];

  helper(shorter, 0, '', shorterSets);
  helper(longer, 0, '', longerSets); 

  console.log({shorterSets, longerSets});

  const longerBucket = new Set(longerSets);
  shorterSets.sort((a, b) => b.length - a.length); // sort by length DESC

  for (let i = 0; i < shorterSets.length; i++) {
      if (longerBucket.has(shorterSets[i])) {
          return shorterSets[i].length;
      }
  }
  return 0;    
  // 'aple'
  // 'aple'
  
  function helper(string, i, slate, resultArr) {
      // base case
      if (slate.length > shorterLength) {
          return;
      }
      if (i === string.length) {
          if (slate === '') return;
          resultArr.push(slate);
          return;
      }
      

      // recursive cases
      // include
      helper(string, i + 1, slate + string[i], resultArr); // 'ace'
      // exclude
      helper(string, i + 1, slate, resultArr); // ''
  }
};

// brute force:


// apple
// subsets: aple 
// 

// A subsequence of a string is a new string generated 
// from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// text1: apple
// text2: ppp

// set: (aple)

// order really matters!
// 'apple'
// 'paple'
// lcs: aple
// output 4

// {
//     a: 1
//     p: 0
//     l: 1
//     e: 1
// }


// ace
// abcde 

// a b c ab ac bc

// a b c d e ab ac ad ae ace

// what's the longest common SET
// that is <= 3 in length (shorter one)


// (set)
// output: 3

// 'abbb'
// 'ab'
// (a,b)

// For example, "ace" is a subsequence of "abcde".


// Input: text1 = "abc", text2 = "abc"
// Output: 3

// Input: text1 = "abc", text2 = "def"
// Output: 0


// MEMOIZED AND OPTIMIZED
// LEETCODE ACCEPTED

/**
 * The time complexity of the longestCommonSubsequence function with memoization is 
 * 
O(m×n), where 
m is the length of text1 and 
n is the length of text2.
Here's the breakdown of the time complexity:

We traverse each character of text1 and text2 exactly once in the worst case scenario, resulting in 
O(m×n) time complexity for the recursion.

Since we are memoizing the results of subproblems, each unique subproblem is solved only once. Therefore, the overall time complexity is 
O(m×n) due to memoization.
 * 
 */

var longestCommonSubsequence = function (text1, text2) {
  // Create a memoization table to store previously computed results
  const memo = new Map();
  
  // Call the helper function to compute the length of the longest common subsequence
  return helper(text1, text2, 0, 0);

  // Helper function to compute the length of the longest common subsequence
  function helper(text1, text2, i, j) {
      // Base case: If either of the strings has reached the end, return 0
      if (i === text1.length || j === text2.length) {
          return 0;
      }

      // Generate a unique key for the current subproblem
      const key = i + ',' + j;
      
      // Check if the result for the current subproblem is already memoized
      if (memo.has(key)) {
          // If so, return the memoized result
          return memo.get(key);
      }

      let result;
      // Check if the characters at the current indices match
      if (text1[i] === text2[j]) {
          // If they match, increment the result by 1 and move to the next indices
          result = 1 + helper(text1, text2, i + 1, j + 1);
      } else {
          // If the characters don't match, compute the length of LCS by considering two options:
          // 1. Skipping the current character of text1 and moving to the next index
          // 2. Skipping the current character of text2 and moving to the next index
          const option1 = helper(text1, text2, i + 1, j);
          const option2 = helper(text1, text2, i, j + 1);
          // Choose the maximum length from the two options
          result = Math.max(option1, option2);
      }

      // Memoize the result for the current subproblem
      memo.set(key, result);
      // Return the computed result
      return result;
  }
};


