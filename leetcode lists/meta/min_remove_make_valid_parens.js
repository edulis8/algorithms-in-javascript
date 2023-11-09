/**
 * 1249. Minimum Remove to Make Valid Parentheses
Medium
6K
110
company
Facebook
company
TikTok
company
Bloomberg
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.


 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // keep track of number of opens 
  // if ever 0 and we have a closed paren, ), remove it
  // remove by building up a new string
  let result = '';
  let opens = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      opens++;
    }
    if (s[i] === ')') {
      // need to check if opens is zero, if so we are balanced, and we have a invalid closing paren
      if (opens === 0) continue; // ignore
      opens--;
    }
    result += s[i];
  }
  // could skip this if opens is 0.
  // will be linear space complexity either way.
  let finalResult = '';
  // then remove extra open parents in a backwards single iteration.
  for (let j = result.length - 1; j >= 0; j--) {
    // if we find a open paren
    // don't include in final result
    // decrement opens var
    if (result[j] === '(' && opens > 0) {
      opens--;
      continue; // ignore
    }

    // could break out if opens == 0;
    finalResult = result[j] + finalResult;
  }

  return finalResult;
};
// )()((( closes before opens are invalid
// (((() unclosed opens are invalid

// () (( <- need to remove these 2 ()()()()()()()() 


// REMEMBER
// PROBLEM SOLVING
// CODING
// COMMUNICATION
// VERIFICATION
