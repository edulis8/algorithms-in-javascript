
// MAXIMUM SUBSTRING WITH NO DUPLICATE CHARS

const solution = (s) => {
  // Type your solution here
  let result = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (set.has(char)) {
          result = Math.max(result, set.size);
          set.clear();
          set.add(char); 
      } else {
         set.add(char); 
      }
  }
    
    // make sure last substring is counted!
    // Note this was off by 1 or 2 on the tests
  result = Math.max(result, set.size);
  return result;
};


// CHAT GPT ANSWER
// sliding window, dynamically sized
// This version of the function uses two pointers, left and right, to create a sliding window. It efficiently finds the longest substring 
// without repeating characters by moving the left pointer to the right when a repeating character is encountered. 
// This approach has a time complexity of O(n), where n is the length of the input string.
const solution2 = (s) => {
  let result = 0;
  const charSet = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    while (charSet.has(char)) { // delete left until charSet no longer has char, so no repeats will exist
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(char);
    result = Math.max(result, right - left + 1);
  }

  return result;
};

// set
// abc
// bca
// cab
// abc
// // cb
// const input = "abcabcbbpoiuy";
// console.log(solution(input)); // Output: 3 (for the substring "abc")




//1123223

const solution_input_is_nums = (n) => {
  const s = n.toString();
  let left = 0;
  let result = 0;
  const set = new Set();
  
  for (let right = 0; right < s.length; right++){
      let char = s[right];
      while(set.has(char)) { // deletes everything up to current
          set.delete(s[left]);
          left++;
      }
      set.add(char);
      result = Math.max(result, right - left + 1);
  }

  return result;
};


const input = 1123223;
console.log(solution_input_is_nums(input)); // Output: 3 (for the substring "123")
