
/**
 * Palindromic Decomposition Of A String
Find all palindromic decompositions of a given string s.

A palindromic decomposition of string is a decomposition of the string into substrings, such that all those substrings are valid palindromes.
 * 
 * 
 * 
 * 
 * 
 * 
 * Input 
 * {"s": "abracadabra"}
 * 
Output:
["a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a", "a|b|r|a|c|a|d|a|b|r|a"]
 * 
 * 
 * @param {str} s
 * @return {list_str}
 */
function generate_palindromic_decompositions(s) {
  // permutations problem
  // every output has same number of characters ? yes
  // different number of pipes, tho
  // chars are not reordered

  // given a slate
  // 


  // t|a|c|c|a
  // t|acca
  // ta|cc|a

  // we know to add a pipe if set of characters, reversed, equals itself
  // recursive cases
  // choices for a given slot in the slate
  // a choice is either one character, or a string of upcoming characters that are palindromic

  // how know to add a pipe?

  // iterate forward, create a temp string
  // if temp string reversed === itself, add to slate


  // what is my job as a lazy manager.
  // to take the subproblem definition, and the slate,
  // out of the subproblem, find next palindrome, then remove it from subproblem handed down

  // examine my subset problem, if it is a palinrome, add a pipe

  const result = []
  helper(s, 0, '');
  return result;

  function helper(chars, i, slate) {
    // base case
    if (i >= chars.length) {
      // prob need to remove the last pipe here

      // remove that pipe
      slate = slate.slice(0, -1);
      result.push(slate);
      return;
    }

    // "choices for slate" == possible upcoming palindromes
    // then skip ahead 
    let tempStr = '';
    for (let j = i; j < chars.length; j++) {
      tempStr += chars[j];
      if (isPalindrome(tempStr, i, j)) {
        // issue was that I needed to add j + 1 here, not i + j + i or i + 1
        // pointer is at j, you need to move beyond that to not repeat chars
        helper(chars, j + 1, slate + tempStr + '|')
      }
    }
  }

  function slowerIsPalindrome(tempStr) {
    return tempStr.split('').reverse().join('') === tempStr
  }
  // faster way to see if something is a palindrome
  function isPalindrome(s, l, r) {
    while (l < r) {
      if (s.charAt(l++) != s.charAt(r--)) {
        return false;
      }
    }
    return true;
  }
}
// 'a|bb|a' - STOP THIS. You can't add extra characters to the string. just pipes.

// chars - 'abba'
// we're on b
// pass down
// a|bb
// skip next b because we visited it. 

// ["a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a", "a|b|r|a|c|a|d|a|b|r|a"]



console.log('\n******************** OUTPUT ************\n');
let input = { "s": "abbba" }
let result = generate_palindromic_decompositions(input.s);
console.log('result:', result)
console.log('\n******************** ************\n')



// subproblem = subproblem.slice(0, i) + subproblem.slice(j)
// helper(subproblem, slate + tempStr + '|')



function generate_palindromic_decompositions_alt(s) {
  const result = []
  helper(s, '');
  return result;

  function helper(subproblem, slate) {
    // base case
    if (subproblem.length === 0) {
      // prob need to remove the last pipe here
      if (slate[slate.length - 1] === '|') {
        // remove that pipe
        slate = slate.slice(0, -1);
      }
      result.push(slate);
      return;
    }


    //  "bba"  subproblem

    // slate
    // a|bb

    let tempStr = '';
    for (let i = 0; i < subproblem.length; i++) {
      tempStr += subproblem[i];
      if (tempStr.split('').reverse().join('') === tempStr) {
        // problem is I'm adding to i
        subproblem = subproblem.slice(0, i) + subproblem.slice(tempStr.length)
        helper(subproblem, slate + tempStr + '|')
      }
    }
  }
}



/*
Asymptotic complexity in terms of the length of `s` `n`:
* Time: O(2^(n-1) * n).
* Auxiliary space: O(2^(n-1) * n).
* Total space: O(2^(n-1) * n).
*/

// Check if s[l, r] is a palindrome or not.






function generate_palindromic_decompositions_java_soln_converted(s) {
  decompositions_container = []
  helper(decompositions_container, s, 0, "");
  return decompositions_container;


  function is_palindrome(s, l, r) {
    while (l < r) {
      if (s.charAt(l++) != s.charAt(r--)) {
        return false;
      }
    }
    return true;
  }

  function helper(decompositions_container, s, pos, slate) {
    n = s.length();
    // If we have reached the end, add the string.
    if (pos == n) {
      decompositions_container.add(slate);
      return;
    }
    // Try to add s[pos, i] if it is a palindrome.
    for (let i = pos; i < n; i++) {
      if (is_palindrome(s, pos, i)) {
        if (pos == 0) {
          // We are adding s[0, i] so do not put '|' before it.
          helper(decompositions_container, s, i + 1, s.substring(pos, i + 1));
        } else {
          helper(decompositions_container, s, i + 1, slate + "|" + s.substring(pos, i + 1));
        }
      }
    }
  }
}

