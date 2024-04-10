/**
 * 

Leetcode medium, google problem: Largest Number

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"


 * @param {number[]} nums
 * @return {string}

*** IMPORTANT: Can use sorting if: If x > y && y > z  ==> x > z ***

Time: nlogn because sorting (same time complexity as sorting function)
 */
var largestNumber = function(nums) {
  nums.sort((x,y) => {
      const _x = x.toString();
      const _y = y.toString();
      return _x + _y > _y + _x ? -1 : 1
  })

  const str = nums.join('');
//   '00' should return 0 if 0 if first
  return str[0] === '0' ? '0' : str;
};
// largest first digit
// how compare 34 to 30 -> 4 > 0
// how compare 3 to 34, 3 and 30 -> 

// Input: nums = [10,2]
// Output: "210"

// 102 > 210

// 330 > 303 -> 3 goes first
// 3034 > 3430 -> 34 goes first

// expected output: 34330

// 3 > 34 no so 34 goes first

// Input: nums = [3,30,34]
///               x  y. z

// Output: "9534330"
// for all numbers
// sorting based on criteria
// x < y, x goes before y
// if string "xy" > "yx", then x goes before y


// 3 34

// 34 3

// 303
// 330