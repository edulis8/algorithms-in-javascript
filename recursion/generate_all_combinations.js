// Generate All Combinations With Sum Equal To Target
// Given an integer array, generate all the unique combinations of the array numbers that sum up to a given target value.

// Example One
// {
// "arr": [1, 2, 3],
// "target": 3
// }
// Output:
// [
// [3],
// [1, 2]
// ]
// Example Two
// {
// "arr": [1, 1, 1, 1],
// "target": 2
// }
// Output:
// [
// [1, 1]
// ]

// Notes
// Each number in the array can be used exactly once.
// All the returned combinations must be different. Two combinations are considered different if their sorted version is different.
// The order of combinations and the order of the numbers inside a combination does not matter.
// Constraints:

// 1 <= size of the input array <= 25
// 1 <= value in the array <= 100
// 1 <= target value <= 2500


// QUESTION: ARE THEY ALL POSITIVE INTEGERS? YES


// subsets of a set
// how many subsets of a set add up to a target
// how can one element be involved in the solution?
// you need to add it to target - el to equal searchedForValue
// but there are multiple searchedForValues


// 1
// look at remainder of array, is there a value that added to 1 is 3 (the target) or less than 3?
// if it is 3, return (base case) - it will be placed in result array
// if not, continue to recurse into the rest of the array


// SOLUTION DESCRIPTION
// The numbers inside the array and the target are positive integers. 
// Therefore, if the sum of a combination exceeds the value of the target, we no longer need to recurse further with this combination.
// We need a way so that the duplicate combinations are not generated.
// Assume that there are say, k occurrences of an element num in the array at indices ind1, ind2 ... indk
// Here, taking ind1 in a combination and excluding ind2 ... indk is exactly the same as taking ind2 and excluding ind1, ind3 ... indk. 
// This is where we need to be careful while generating the unique combinations. 
// If any element occurs k times in the array, then there are at-most k + 1 (and not 2k) possibilities to include that element in a combination. 
// The possibilities are as follows:
// - Do not include it.
// - Include only one occurrence of that element.
// - Include only two occurrences of that element.
// - ….
// - Include k occurrences of that element.

// Using these observations, we can generate all the unique combinations that sum up to the given target.
// Note that this approach requires us to have a list of indices where a particular element occurs. Instead of separately storing these lists, we will be sorting
// the array initially so that all the occurrences of any value come together in the array. This way it will be easier to track the occurrences.

//       Time Complexity
// O(n * 2n).
// In the worst case, we might have all the unique elements in the array. In that case, we will have exactly two 
//possibilities for each of the n elements. Therefore, the number of unique combinations will be O(2n) 
//and as we find a combination, we push it into our resultant array. This step takes O(n) amount of time in the worst case.

// Auxiliary Space Used
// O(n).
// The maximum number of recursive stacks at any moment in time can be equal to the number of unique elements present in the array. The number of unique elements will be O(n) in the worst case.

// Space Complexity
// O(n * 2n).
// Space used for input: O(n).
// Auxiliary space used: O(n).
// Space used for output: O(n * 2n).
// So, total space complexity: O(n * 2n).


/**
 * @param {list_int32} arr
 * @param {int32} target
 * @return {list_list_int32}
 */
function generate_all_combinations(arr, target) {
  let combinations = [];
  let current = [];

  arr.sort((a, b) => a - b); // sort asc. When the result of a - b is negative, it means that a should come before b in the sorted array. Its negative because b is greater than a in a sorted array.

  get_combinations(arr, 0 , target, current, combinations);

  return combinations;
}

function get_combinations(arr, index, target, current, combinations) {
  if (target === 0) {
    combinations.push([...current]);
    return;
  }

  if (index === arr[arr.length - 1] || target < 0) {
    return; // we've reached the end of the array, or target is unreachable because negative
  }

  // arr[index] is in index range [index, end).
  let end = index;
  while (end < arr[arr.length - 1] && arr[end] === arr[index]) {
    // skipping ahead of any duplicates?
    end++;
  }
  // skipping the current element
  get_combinations(arr, end, target, current, combinations);
  // Current element can be present 1, 2 .... (end - index) number of times in a combination.
  // count is number of duplicate values
  let count = 1;
  while (count <= end - index) {
    current.push(arr[index]);
    get_combinations(arr, end, target - count * arr[index], current, combinations);
    count++;
  }

  // Backtrack to convert the array "current" back to its previous state.
  count = 1;
  while (count <= end - index) {
    current.pop();
    count++;
  }
}

console.log('\n******************** OUTPUT ************\n');
let input = 
{
  "arr": [1, 2, 3],
  "target": 3
}
let result = generate_all_combinations(input.arr, input.target);
console.log('result:', result)
console.log('\n******************** ************\n')





// {
//   "arr": [1, 2, 3],
//   "target": 3
// }
// Output:
// [
//   [3],
//   [1, 2]
// ]
