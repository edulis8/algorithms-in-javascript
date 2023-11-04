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

// EB NOTES
// Combos here means SETS, bags. No repeat values. 
// This is 'generate all UNIQUE subsets of a set' but with ANOTHER backtracking case, a pruning of the tree case
// we need to only recurse if problem is not redundent.
// presort the initial array
// count dups
// recurse that many times with same value
// pop that many times


function generate_all_combinations(arr, target) {
  const result = [];
  // presort
  arr.sort((a, b) => a - b);
  // call helper/subordinate
  helper(arr, 0, [])
  return result;
  // helper will take a subproblem definition, and a "slate" - a place to build a set
  function helper(arr, i, slate) {
    // 3 options
    // slate sum up to target
    // slate sum > target
    // slate sum < target
    // backtracking case. pruning case. when we add to result.
    if (sum(slate) === target) {
      result.push([...slate]);
      return;
    }
    // base case. when we traverse the array or "tree" and find no result
    // slate is either greater than, or less than the target
    if (i >= arr.length) {
      return;
    }
    if (sum(slate) > target) {
      return;
    }

    // recursive cases. 
    // a tree of exclusion/inclusion choices.

    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      } else {
        break;
      }
    }

    // exclude, you STILL SKIP AHEAD so you don't create a new tree with the duplicates!
    helper(arr, i + count, slate);

    // include
    // this manager will add all of the duplicate values at once to the slate
    for (let m = 1; m <= count; m++) {
      slate.push(arr[i]);
      helper(arr, i + count, slate);
    }

    for (let k = 1; k <= count; k++) {
      slate.pop(); // revert work done as you go back up the tree
    }
  }

}

function sum(arr) {
  return arr.reduce((tally, item) => {
    return tally + item;
  }, 0)
}

console.log('\n******************** OUTPUT ************\n');
let input = {
  "arr": [1, 1, 1, 1],
  "target": 2
}

let result = generate_all_combinations(input.arr, input.target);
console.log('result:', result)
console.log('\n******************** ************\n')
