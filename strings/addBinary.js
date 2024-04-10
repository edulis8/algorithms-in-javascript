/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  // Initialize two pointers at the end of the strings
  let i = a.length - 1;
  let j = b.length - 1;

  // Initialize carry to keep track of any overflow
  let carry = 0;

  // Initialize result to store the binary sum
  let result = '';

  // Loop as long as there are digits in either string or a carry
  while (i >= 0 || j >= 0) {
      // Start with the carry from the last iteration
      let sum = carry;

      // If there are still digits in 'a', add the last digit to sum and decrement the pointer
      if (i >= 0) {
          sum += parseInt(a[i], 10);
          i--;
      }

      // If there are still digits in 'b', add the last digit to sum and decrement the pointer
      if (j >= 0) {
          sum += parseInt(b[j], 10);
          j--;
      }

      // If sum is 2 or 3, there is a carry for the next iteration
      // Carry will always be one or zero
      carry = Math.floor(sum / 2);

      // The current digit is the remainder of sum divided by 2
      result += sum % 2;
  }

  // If there is a carry left after the last iteration, add it to the result
  if (carry !== 0) {
      result += carry;
  }

  // The result is currently reversed (because we started from the end), so reverse it and return
  return result.split('').reverse().join('');
}


// JUSTIN HONG VERSION:

function addBinary(a, b) {
  // reverse the strings or go over them in reverse order
  // as i iterate, parse as a number
  // - add to result array, if sum is 2, "carry over" to next element
  // reverse result array, join as string
  const result = [];
  let i = 0;
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
  while (aPointer >= 0 || bPointer >= 0) {
    let aValue = aPointer >= 0 ? parseInt(a[aPointer]) : 0;
    let bValue = bPointer >= 0 ? parseInt(b[bPointer]) : 0;
    let subtotal = (result[i] || 0) + aValue + bValue;
    if (subtotal > 1) {
      result[i + 1] = 1; 
      result[i] = subtotal % 2;
    } else {
      result[i] = subtotal; 
    }
    i++;
    if (aPointer >= 0) aPointer--;
    if (bPointer >= 0) bPointer--;
  }
  return result.reverse().join('');
};