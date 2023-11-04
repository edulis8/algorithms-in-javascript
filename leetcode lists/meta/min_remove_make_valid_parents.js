/**
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
      if (opens === 0) continue;
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
      continue;
    }

    // could break out if opens == 0;
    finalResult = result[j] + finalResult;

  }

  return finalResult;
};
// )()((( closes before opens are invalid
// (((() unclosed opens are invalid

//() (( <- need to remove these 2 ()()()()()()()() 


// REMEMBER
// PROBLEM SOLVING
// CODING
// COMMUNICATION
// VERIFICATION
