/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
      if (s[left] != s[right]) {
          // skip forward on left by one (+1)
          // skip backward on right by one (-1)
          return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
      }
      left++;
      right--;
  }
  return true;

  function isPalindrome(s, left, right) {
      while (left < right) {
          if (s[left] != s[right]) {
              return false;
          }
          left++;
          right--;
      }
      return true;
  }
};

// "a* b Z X b (c) a*"

// typical palindrome algo
// check while left > right, if chars are same, increment left/right, return true if no diffs

// we want to skip b or c and check rest of string



