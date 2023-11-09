/**
 * 
 * TIME: linear to larger num string O(n) or more accurately O(max(n1,n2))
 * SPACE linear to larger num string O(n) or more accurately O(max(n1,n2))
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 
 * TRAVERSE index forwards, but examine backyards
 * use a carry
 * -10 if using carry
 */
var addStrings = function(num1, num2) {
  const len = Math.max(num1.length, num2.length) + 1; // plus one bc there might be an extra 1 at the beginning
  const result = new Array(len);
  let carry = 0;

  for (let i = 0; i < len; i++) {
    let digit1 = Number(num1[num1.length - i - 1]) || 0;
    let digit2 = Number(num2[num2.length - i - 1]) || 0;
    let sum = digit1 + digit2 + carry;
    carry = 0; // reset carry

     console.log('sum', sum)
    if (sum > 9) {
       carry = 1;
       sum -= 10;
       // example: 18 - we only want 8 in result[i]
    }
    
    result[len - i - 1] = sum;
    console.log(result)
  }
  // if leading 0 in space reserved for extra 1, remove
  if (result[0] == 0) {
    result.shift();
  }
 return result.join('');
}


// loop backwards from larger length and add digits
// but you have to carry the one, if the sum > 9

// use array of len (larger one) to store result
// join it and return


let num1 = "5";
let num2 = "4"
const res = addStrings(num1, num2)
console.log(res)

// loop backwards from larger length and add digits
// but you have to carry the one, if the sum > 9

// use array of len (larger one) to store result
// join it and return
