


// works

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []
  helper(s, 0, []);
  return result;

  function helper(chars, i, slate) {
    // base case
    if (i >= chars.length) {
      result.push([...slate]);
      return;
    }

    // "choices for slate" == possible upcoming palindromes
    // then skip ahead 
    let tempStr = '';
    for (let j = i; j < chars.length; j++) {
      tempStr += chars[j];
      console.log(tempStr)
      if (isPalindrome(tempStr, i, j)) {
        console.log('palindromic tempstr', tempStr)

        slate.push(tempStr);
        helper(chars, j + 1, slate)
        slate.pop();
      }
    }
  }
  // aab
  // [["a","a","b"],["aa","b"]]
  // "cdd" xxx
  // [["c","d","d"],["c","dd"]]

  function isPalindrome(tempStr) {
    return tempStr.split('').reverse().join('') === tempStr;
  }
}