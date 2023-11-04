

// Notes 
// n = 5
// nArr = [1,2,3,4,5] - not that this is a sorted array in asc order, a series where each number is prev + 1
// we want all sets of size 2


// Let us try to break this down into smaller problems. 
// What if we needed the combinations of size 2 (that is, k = 2)? 
// In this case, we could have run two nested loops to generate all the unique combinations. 
// Similarly, if we had k = 3, we could have run 3 nested loops and so on. 
// But since k is dynamic, we do not know beforehand how many nested loops to run. 
// Therefore, this iterative solution is not possible here. 
// We have n numbers in range 1 to n. 
// Being at any number, we can consider two possibilities of either 
// including or 
// excluding it in the current combination.


// Say we are at number current_number, we will have two possible cases as follows:

// 1) We will find the combinations of size k - 1 of numbers in range [current_number + 1, n] 
// and will include the current numbers in all such combinations to make them of size k.

// 2) We will exclude the current_number and find the combinations of size k of number in range [current_number + 1, n]. 


// Performing this recursively for all the numbers in the range, we will be able to generate all the unique combinations required. 
// So, being at any number current_number, 
// we will ask the recursion to get us all the unique combinations of size k - 1 and size k in range current_number + 1 to n. 
// Let us understand this with an example. Say we have n = 5 and k = 2. 
// Currently, we are at the number current_number = 1. 
// Now as stated above, we have to consider two possibilities of either including or excluding it. 
// The combinations of size k - 1 = 1 in range 2 to 5 are: [2], [3], [4], [5]. 
// Including current_number = 1 in all these combinations, we get: [1, 2], [1, 3], [1, 4], [1, 5]. 
// Similarly, the combinations of size k = 2 in range 2 to 5 are: [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5].
//  Together these form all the combinations of size 2 in range from 1 to 5: [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5].





// Time Complexity
// O(2^n * n).

// The total number of combinations = nCk.
// To push nCk combination each of size k, we will require O(nC1 * 1 + nC2 * 2 + . . . + nCk * k) = O(n * 2^k) time in total.
// And k can be equal to n. Thus, the time complexity will be O(2^n * n).

// Auxiliary Space Used
// O(n).
// It is the worst case recursion depth.

// Space Complexity
// O(nCk * k).
// The total space complexity is dominated by the size of output.

function find_combinations(n, k) {
  const result = [];

  const arr = Array.from({ length: n }, (_, index) => index + 1);
  // console.log(newArray);

  helper(arr, 0, [])
  return result;



  function helper(s, i, slate) {
    // Backtracking case
    if (slate.length === k) {
      result.push([...slate]);
      return;
    }
    // Base Case
    if (i === s.length) {
      // we've reached the end of processing a branch, we've processed s nodes, doing e/i operations
      // this subset is smaller than k, so ignore it (if it were k it would have been caught in the above case)
      return;
    }
    // Recursive Cases

    // Include
    slate.push(s[i]);
    helper(s, i + 1, slate)
    slate.pop();

    // Exclude
    helper(s, i + 1, slate)
  }
}


console.log('\n******************** OUTPUT ************\n');
let n = 5;
let k = 2;
let result = find_combinations_no_array(n, k);
console.log('result:', result)
console.log('\n******************** ************\n')


// How many subsets of size k can be made from a set of size n?
// Pascals Triangle visualization. Depth (row numbers) is n. "Columns" are k. ...  n,k represents a node in the triangle.
// each node is the sum of two nodes above it
// function C(n, k) {
//   if (n <= 1 || k === 0 || k === n) {
//     return 1;
//   } else {
//     return C(n - 1, k) + C(n - 1, k - 1)
//   }
// }

// console.log('\n******************** OUTPUT ************\n');
// let n = 5;
// let k = 2;
// let result = C(n, k);
// console.log('result:', result)
// // console.log('pow', Math.pow(2,4))
// console.log('\n******************** ************\n')






//  JS BASED ON THE C++ SOLUTION:
function combinations_recursive(current_number, n, k, result, combinations = []) {
  // combinations
  if (combinations.length === k) {
    result.push([...combinations]);
    return;
  }
  // reached end of range
  if (current_number == n + 1) {
    return;
  }

  // we start at the number current_number = 1. 
  // we have to consider two possibilities of either including or excluding it. 
  combinations.push(current_number);
  // include current number:
  combinations_recursive(current_number + 1, n, k, result, combinations); // // The combinations of size k - 1 = 1 in range 2 to 5 are: [2], [3], [4], [5]. 

  // remove it, exclude current number
  combinations.pop();
  combinations_recursive(current_number + 1, n, k, result, combinations); //  Similarly, the combinations of size k = 2 in range 2 to 5 are: [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5].
}

function find_combinations(n, k) {
  const result = [];
  combinations_recursive(1, n, k, result);
  return result;
}


// my version of the above
function find_combinations_no_array(n, k) {
  const result = [];

  // const arr = Array.from({ length: n }, (_, index) => index + 1);
  // console.log(newArray);

  helper(1, [])
  return result;

  function helper(i, slate) {
    // Backtracking case
    if (slate.length === k) {
      result.push([...slate]);
      return;
    }
    // Base Case
    if (i > n) {
      // we've reached the end of processing a branch, we've processed s nodes, doing e/i operations
      // this subset is smaller than k, so ignore it (if it were k it would have been caught in the above case)
      return;
    }
    // Recursive Cases

    // Include
    slate.push(i);
    helper(i + 1, slate)
    slate.pop();

    // Exclude
    helper(i + 1, slate)
  }
}