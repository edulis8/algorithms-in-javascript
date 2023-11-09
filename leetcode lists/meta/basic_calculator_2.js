// META INTERVIEW 11/7/23 
// I WAS asked this question, but only with + and *.
// Solution was not as elegant as below and may have been buggy.
// i created a helper function to figure out entire digit and its length, skipped ahead in string by i + that length



/**
 * MEDIUM
 * 
 * 
 * Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
 * @param {string} s
 * @return {number}
 * 
 * 
 USE STACK (ie array)
 push the + - numbers
 pop and multiply/divide the * or / numbers
 */
var calculate = function (s) {
  let num = '';
  const DIGITS = '0123456789'
  // defined to avoid the need for isNaN;
  const stack = [];
  // used to reference number for order of operations; we use the last ref so we can multiply or divide accordingly.
  let operation = '+'; // initialized since we'll add the number if there's no number

  for (let i = 0; i <= s.length; i++) {
    // 1 buffer to evaluate the end of the string;
    const char = s[i];
    if (char === ' ') continue;
    if (DIGITS.includes(char)) {
      // this will be our most recent number accounting for numbers that can be consist of multiple digits.
      num += char;
      continue
    }

    // we've found an operation designator
    // substituted for switch cases for clarity;
    if (operation == '+') stack.push(Number(num)) // push num
    else if (operation == '-') stack.push(Number(-num)) // push neg
    else if (operation == '*') stack.push(stack.pop() * num) // pop and multiply
    else if (operation == '/') stack.push(Math.trunc(stack.pop() / num)) // The Math. trunc() method returns the integer part of a number. No rounding done.
    // truncated because it was designated for the division result to be truncated.

    // next operation is whatever we're now on;
    operation = s[i]
    // reset num because it's now in our stack.
    num = "";
  }
  return stack.reduce((a, b) => a + b)
  // shortened code for summing all items in an array;
};


let input = "3000*20+800"

const res = calculate(input)
console.log(res);

// Output: 1

