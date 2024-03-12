// Generate All Subsets Of A Set
// Generate ALL possible subsets of a given set. The set is given in the form of a string s containing _distinct_ lowercase characters 'a' - 'z'.

// Example
// {
// "s": "xy"
// }
// Output:

// ["", "x", "y", "xy"]



// Notes
// Any set is a subset of itself.
// Empty set is a subset of any set.
// Output contains ALL possible subsets of given string.
// Order of strings in the output does not matter. E.g. s = "a", arrays ["", "a"] and ["a", ""] both will be accepted.
// Order of characters in any subset must be same as in the input string. For s = "xy", array ["", "x", "y", "xy"] will be accepted, but ["", "x", "y", "yx"] will not be accepted.
// Constraints:

// 0 <= length of s <= 19
// s only contains distinct lowercase English letters.

// Implementation Notes:
// i first thought the slate would be an array
// SLATE IS A STRING
// whatever each element in the result array is, is the type of the slate!
/**
 * @param {str} s
 * @return {list_str}
 */
// MY INITIAL SOLUTION. "IMMUTABLE" - 
// function generate_all_subsets(s) {
//   const result = new Set(['']);

//   subsetHelper('', s);

//   return Array.from(result);

//   // helper will take a slate (partial solution) and the remaining subproblem
//   function subsetHelper(slate, remainingCharacters) {
//     if (remainingCharacters.length === 0) {
//       // TODO: put copy of slate into solution
//       !result.has(slate) && result.add(slate)
//       return;
//     }

//     // hand slate and subproblem to two subordinates
//     // include first element in subproblem
//     subsetHelper(`${slate}${remainingCharacters[0]}`, remainingCharacters.slice(1));

//     // exclude first element in subproblem
//     subsetHelper(slate, remainingCharacters.slice(1));
//   }
// }



/*
Asymptotic complexity in terms of the length of `s` (=`n`):
* Time: O(2^n * n). // EXPONENTIAL
* Auxiliary space: O(2^n * n). // EXPONENTIAL
* Total space: O(2^n * n).
*/

// Better Solution. No need to pass down a copy of the remainingCharacters. Just keep track of an index, the remaining characters are after that index, when it 
// hits the problem length we hit the base case
function generate_all_subsets(s) {
  const result = [];
  subsetHelper(s, 0, '');
  return result;

  // helper will take a slate (partial solution) and the remaining subproblem
  function subsetHelper(problem, i, slate) {
    if (problem.length === i) {
      result.push(slate)
      return;
    }

    // hand slate and subproblem to two subordinates
    // include first element in subproblem
    subsetHelper(problem, i + 1, `${slate}${problem[i]}`);
    // exclude first element in subproblem
    subsetHelper(problem, i + 1, slate);
  }
}

console.log('\n******************** OUTPUT ************\n');
let input = {
  "s": "abcd"
}
let result = generate_all_subsets(input.s);
console.log('result:', result)
console.log('\n******************** ************\n')


console.log('\n******************** OUTPUT 2 ************\n');
let input2 = [1, 2, 3]

let result2 = subsets(input2);

console.log('result:', JSON.stringify(result2))
console.log('\n******************** ************\n')

// SUBSETS, LEETCODE MEDIUM
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function subsets(problem) {
  const result = [];

  subsetHelper(problem, 0, []);

  return result;

  // helper will take a slate (partial solution) and the remaining subproblem
  function subsetHelper(problem, i, slate) {
    if (i === problem.length) {
      // put copy of slate into solution
      result.push([...slate])
      return;
    }

    // hand slate and subproblem to two subordinates
    // include first element in subproblem
    slate.push(problem[i]);
    subsetHelper(problem, i + 1, slate);
    slate.pop();
    // exclude first element in subproblem
    subsetHelper(problem, i + 1, slate);
  }
}