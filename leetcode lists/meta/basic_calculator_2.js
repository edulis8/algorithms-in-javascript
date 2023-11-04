
/**
 * @param {string} s
 * @return {number}
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
    if (operation == '+') stack.push(Number(num))
    else if (operation == '-') stack.push(Number(-num))
    else if (operation == '*') stack.push(stack.pop() * num)
    else if (operation == '/') stack.push(Math.trunc(stack.pop() / num))
    // truncated because it was designated for the division result to be truncated.
    operation = s[i]
    // new operation is whatever we're now on;
    num = "";
    // reset num because it's now in our stack.
  }
  return stack.reduce((a, b) => a + b)
  // shortened code for summing all items in an array;
};


let input = " 3/2 "

const res = calculate(input)
console.log(res);

// Output: 1

