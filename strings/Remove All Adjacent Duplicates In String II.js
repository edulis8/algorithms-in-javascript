
// Time: 
// Time complexity: O(n)\mathcal{O}(n)O(n), where nnn is a string length. We process each character in the string once.

// Space complexity: O(n)


// ONE STACK OF TWO VALUES
// the character and the duplicateCount
var removeDuplicates = function (s, k) {
  const stack = [];
  for (const char of s) {
      // determinte duplicateCount, check last item in stack, if same as char, add one to last value of duplicateCount
      // otherwise set to 1
      let duplicateCount = 1;

      const lastItem = stack[stack.length - 1];
      if (lastItem?.char === char) {
          duplicateCount = lastItem.duplicateCount + 1;
      }

      stack.push({
          char,
          duplicateCount
      });

      if (duplicateCount === k) {
          for (let i = 1; i <= k; i++) {
              stack.pop();
          }
      }

  }

  return stack.map(el => el.char).join('');
};