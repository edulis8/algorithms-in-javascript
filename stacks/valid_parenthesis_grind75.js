/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 * TIME: LINEAR
 * SPACE: LINEAR IN WORST CASE
 * 
 * THIS IS my original solution, below is cleaned up a bit
 */
var isValid = function (s) {
    const opens = new Set(["[", "(", "{"]);
    const closes = {
        // closer -> opener map
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = [];

    for (const char of s) {
        // if open, push
        if (opens.has(char)) {
            stack.push(char)
        }
        // we come to a close
        if (closes[char]) {
            const last = stack[stack.length - 1];// (
            if (last === closes[char]) { // ()
                stack.pop(); // and don't add char, destroying both
            } else {
                // if two closing brackets of diff type touch  "
                return false;
            }
        }
    }

    return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opens = new Set(["[", "(", "{"]);
  const closes = {
      // closer -> opener map
      ')': '(',
      ']': '[',
      '}': '{'
  }
  const stack = [];
  for (const char of s) {
      // if open, push
      if (opens.has(char)) {
          stack.push(char)
      }
      // we come to a close
      else if (stack.pop() !== closes[char]) { // 
          return false;
      }
  }

  // ()

  // )


  return stack.length === 0;
  // ( )((((([[]]))])))
};
// stack
// if two opening/closing brackets of same type touch, this is fine, but we destroy both
// if two closing brackets of diff type touch, return false
//
// if same type, destroy both
// at end, if stack has values, return false, else true

// (([]))

// "([)]"
// (1
// [1
// ) -- is {counter or [counter positive



// Input: s = "{{}}(())])" // -1


// Input: s = "(]" // -1

// all counters should be 0

// 1) Open brackets must be closed by the same type of brackets.
// 2) Open brackets must be closed in the correct order. **
// 3) Every close bracket has a corresponding open bracket of the same type.

/*
const opens = new Set(["[", "(", "{"]);
  const closes = new Set(["]", ")", "}"])

  let parenCounter = 0;
  let curlyCounter = 0;
  let squareCounter = 0;

  // loop
  // opens incremeent
  // closes decrement
  for (const char of s) {
      if (parenCounter < 0 ||
          curlyCounter < 0 ||
          squareCounter < 0) {
          return false;
      }

      if (opens.has(char)) {
          // if any other counter is positive
          if (char === "{") {
              curlyCounter++;
          } else if (char === "(") {
              parenCounter++;
          } else if (char === "[") {
              squareCounter++;
          }
      }
      if (closes.has(char)) {
          if (char === "}") {
              curlyCounter--;
          } else if (char === ")") {
              parenCounter--;
          } else if (char === "]") {
              squareCounter--;
          }
      }
  }

  // if a counter ever goes negative 
  // return false


  // if at end of loop, any counter is positive, return false
  if (parenCounter > 0 ||
      curlyCounter > 0 ||
      squareCounter > 0) {
      return false;
  }

  return true;
*/