

// arr of positive integers
// sort arr .
// largest numbers of 1s go towards the end.
// if same number of 1s, larger number goes towards the end of the array.

[1, 11, 110, 112]
/**
 * 1 -> 0x01
 * 11 -> 
 * bin(x) --> 0x....
 * bin(2) -> 010
 * bin(3) -> 011
 * bin(4) -> 100
 * 
 * [2, 3, 1, 4]
 *  010, 011, 001, 100
 * 
 */


// [2, 3, 1, 4]
// 1, 2,   1, 1

// 1,2,4,3

// O(nlogn)
function soln(arr) {
  // js has built in .sort method on arrays
  arr.sort((a, b) => {
    if (!countones(dec2bin(a)) === countones(dec2bin(b))) {
      // logic for 1st
      return countones(dec2bin(a)) - countones(dec2bin(b));
    } else {
      return a - b; // sorts asc order
    }
  })

  return arr;
}


// better, because a "tie" means you then default to the secondary way of sorting
// arr.sort((a, b) => {
//   return countones(dec2bin(a)) - countones(dec2bin(b)) || a - b; // sorts asc order
// }
// )


function countones(stringOfOnesAndZeros) {
  stringOfOnesAndZeros.split('').reduce((sum, item) => {
    item = Number(item);
    return sum + item;
  }, 0)
}

// convert decimal to binary string
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}


/**
 * 
 * You are given a 0-indexed integer array nums.

Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.

The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].
 * 
 * 
 * input is an array
 * keep global max
 * 
 * compute (nums[i] - nums[j]) * nums[k]) for all i,j,k such that such that i < j < k
 * 
 * inside iteration
 * keep local max
 * update global with max(local, global)
 * 
 * reutn max
 * 
 * return value is a number
 */

// i < j < k

// [4,3,2,1]

// [1,2,3,4] --> ?
function solution(arr) {
  let globalAnswer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let localAnswer = (arr[i] - arr[j]) * arr[k];
        globalAnswer = Math.max(localAnswer, globalAnswer)
      }
    }
  }
  // logic such that if negative then return 0
  return globalAnswer > 0 ? globalAnswer : 0;
}

let input = [55, 2, 3, 4];
console.log(maximumTripletValue(input))



// To find the maximum value for (nums[i] - nums[j]) * nums[k], we need to find the biggest nums[i], nums[k], and the smalest nums[j]. In other words, for every number in nums 
// (see this as nums[j]), we need to find the biggest value to its left and biggest value to it's right.

// we can precompute the postfixMax and solve this in O(n)O(n)O(n) time.
function maximumTripletValue(nums) {
  let prefixMax = nums[0];

  const postfixMax = new Array(nums.length);

  for (let k = nums.length - 1; k >= 0; k--) {
    postfixMax[k] = Math.max(
      postfixMax[k + 1] ?? 0,
      nums[k + 1] ?? 0,
    );
  }

  let result = 0;

  for (let j = 1; j in nums; j++) {
    const value = (prefixMax - nums[j]) * postfixMax[j];
    result = Math.max(result, value);
    prefixMax = Math.max(prefixMax, nums[j]);
  }

  return result;
}




/**
 * 
 * Self-assess: 1-5
 * 2
 * 
 * +ves:
 * -------
 * comfortable with Javascript
 * wrote down the questions
 * 
 * improvements:
 * --------------
 * Structure
 * Listen: write the qns; input/output signature
 *  clarifying questions
 * 
 * Examples
 *  own examples
 *  in/out:
 * 
 * Bruteforce
 *  - pseudocode
 *  - time/space: O(N^3), O(1)
 * 
 * Optimize
 *  Datastructure/Aglorithmic
 *  - pseudocode
 *  - time/space
 * 
 * Walkthrough (given example input)
 *  named variables, named functions
 *  
 * i    j.      k.  
 * --------------------
 * 0.    1.   2
 * 
 * Implement
 *  Code
 * 
 * Test
 *  Dry run
 * 
 * https://leetcode.com/discuss/general-discussion/1039615/how-to-answer-coding-interview-questions
 * 
 * Datastructure/Aglorithmic
 * 
 * O(N) - linear 
 * 
 * LC:
 *  -> 300 Medium; 3/5 a day
 *  -> mock interview; 25-30mins; official solution


  Write -> Think -> Design
 * Think -> Design -> Write
 */