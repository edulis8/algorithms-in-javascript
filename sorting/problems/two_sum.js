
// HASH TABLE AND ONE LOOP

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 It turns out we can do it in one-pass. While we are iterating and inserting elements into the 
 hash table, we also _look back_ to check if current element's complement 
 already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

 EB NOTE: I like this cuz solves issue in the DUMP INTO MAP and THEN LOOP solution where you 
  have to excludethe current number in the loop to avoid using it twice. (See solution below this)

Time complexity: O(n)
We traverse the list containing nnn elements only once. Each lookup in the table costs only O(1)O(1)O(1) time.

Space complexity: O(n)
The extra space required depends on the number of items stored in the hash table, which stores at most nnn elements.
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (const [index, num] of nums.entries()) {
      const complement = target - num;
      if (map.has(complement)) {
          return [index, map.get(complement)]
      }
      map.set(num, index);
  }
};


/// Given an array and a target number, find the indices of the two values from the array that sum up to the given target number.
function implementation(nums, target) {
  // Brute force would be two loops, but would be quadratic, we can do better. (You'd try adding all the numbers together.)
  // let's decrease and conquer. Take one element and do a search for target - element.
  // it is  not already pre-sorted, and we can't presort it and preserve the indices
  // we can't use a binary search tree to search for target - n[i], 
  // we can use a or a hash table if we keep track of indices
  // but since it is already pre-sorted and indices will be preserved, we can use a two pointer pass

  // this is linear O(n)
  const lookup = {};

  nums.forEach((el, i) =>  lookup[el] = i);
  
  console.log(lookup)

  for(let j = 0; j < nums.length; j++) {
    let searchedForElement = target - nums[j];
    if (lookup[searchedForElement] && j !== lookup[searchedForElement]) {
      // if it exist in the hashtable, return the indices
      return [lookup[searchedForElement], j]
    }
  }
  return [-1, -1];
}



console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "numbers": [4, 1, 5, 0, -1],
  "target": 10
}

let result = implementation(input.numbers, input.target);
console.log('result:', result)

console.error('\n******************** ************\n')


// // BRUTE FORCE 
// function implementation(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1, -1];
// }
