// {
//   "numbers": [5, 3, 10, 45, 1],
//     "target": 6
// }

// output
// [0, 4]


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
