/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(num) {
  return helper(0, num);
  // [1,2,3,4,5,6,7,8]
  function helper(start, end) {
    const mid = Math.floor((start + end) / 2);
    const square = mid * mid; // 16
    // num: 8
    // 1, 2(answer), 3
    if (square === num) {
      return mid;
    }
    if (square < num) {
      // go higher, to right
      // if nextSquare is greater than num, return mid
      const nextSquare = (mid+1) * (mid+1)
      if (nextSquare > num) {
          return mid;
      }
      return helper(mid + 1, end);
    }
    if (square > num) {
      // go lower, go to left
      return helper(start, mid - 1);
    }
  }
};
