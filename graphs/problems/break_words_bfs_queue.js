/**
 * https://leetcode.com/problems/word-break/
 * 
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}

 good example: wordDict = ['leet', 'lee', 'cod', 'tcode']
 */
 var wordBreak = function (s, wordDict) {
  // Time complexity: O(n^3) - at each node, we iterate  over the nodes in front of the current node, of which there are O(n), for each node `end`,
  // create a substring, which also costs O(n)
  // Space: linear (q and seen)

// s is a graph
// each index is a node
// We start at node 0, which represents the empty string. We want to reach node s.length,
// BFS thru graph
// We will first convert wordDict into a set so that we can 
// perform the checks in constant time.
// We will also use a data structure seen to prevent us from visiting a node more than once.

// 1) Convert wordDict into a set words.
// 2) Initialize a queue with 0. And initialize a set seen.
// 3) While the queue is not empty:
  // Remove the first element, start.
  // If start == s.length, return true.
  // Iterate (increment in a loop) end from start + 1 up to and including s.length. For each end, if end has not been visited yet,
  // Check the substring starting at start and ending before end. If it is in words, add end to the queue and mark it in seen.
  // Return false if the BFS finishes without reaching the final node.

  const words = new Set(wordDict); // ['leet', 'lee', 'cod', 'tcode']
  const seen = new Set();
  const q = [0];
 
  // seen: (3,4,7,6)
  // q: [6]
  while(q.length) {
      const start = q.shift();
      if (start === s.length) { // triggers when 'lee' and 'tcode' are found because 7 gets popped off queue
          return true;
      }
      // s = "leetcode"
      //.           ^
      // start: 6
      // end: 7
      for (let end = start + 1; end <= s.length; end++) {
          if (seen[end]) {
              continue;
          }
          if (words.has(s.substring(start, end))) { //
              q.push(end); // 
              seen[end] = true;
          }
      }
  }
  return false;
};


/*
Example 1:
Input: s = "leet", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/

// BUILDING A TRIE
//  function buildTrie(wordDict) {
//         const trie = {};
//         wordDict.forEach(word => {
//             let node = trie;
//             for (let i = 0; i < word.length; i++) {
//                 const char = word[i];
//                 node[char] = node[char] || {};
//                 node = node[char];
//             }
//             node['*'] = '*'
//         })
//         return trie;
//     }
  
//     const t = buildTrie(wordDict)
//     console.log(JSON.stringify(t, null, 2))

// INITIAL HASHMAP BRUTE FORCE ATTEMPT THAT PROB DOES NOT WORK
// const set = Set();
  // convert wordDict to hashmap
  // loop over s
  // build up a word
  // constantly check if built up word is in wordDict
  // reset and push to set if it is
  // if each end and no match return false
  // else return true.

// matching: [leet, code]
// s = "leetcode", wordDict = ["leet","code"]
//  true if s can be segmented into a space-separated sequence of one or more dictionary words.
//  Return true because "leetcode" can be segmented as "leet code".


// matching: [apple, pen]
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.


// matching = [cat,sand, ]

// og doesn't match and its at end

// Input: s = "cat sand og", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// 