// TAKE TOO LONG

// WATCH LEETCODE EDITORIAL VID
https://leetcode.com/problems/decode-ways/editorial/


function decodeVariations(S) {
  /**
  @param S: string
  @return: integer
  */
  let count = 0;
  const alphabet = new Set([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
  ])

  helper(S, 0, '') // slate -> combination

  return count;

  function helper(string, i, slate) {
    // base case
    if (i === string.length) {
      console.log(slate)
      count++;
      return;
    }

    helper(string, i + 1, slate + string[i])

    if (i + 1 < string.length) {
      const toAdd = string[i] + string[i + 1];
      if (alphabet.has(Number(toAdd))) {
        console.log('toAdd', toAdd)
        slate = slate + toAdd;
        helper(string, i + 2, toAdd)
      }
    }
  }
}
// const input = '226'
// const result = _decodeVariations(input);
// console.log('result', result)


function _decodeVariations(S) {
  let count = 0;
  const alphabet = new Set([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'
  ]);
  // Create a Set to memoize results for a particular position.
  const memo = new Set();
  helper(S, 0, '');
  return count;

  function helper(string, i, slate) {
    // Check if we've already memoized this position with the same slate.
    if (memo.has(i)) {
      return;
    }

    // base case
    if (i === string.length) {
      count++;
      return;
    }

    helper(string, i + 1, slate + string[i]);

    if (i + 1 < string.length) {
      const toAdd = string[i] + string[i + 1];
      if (alphabet.has(toAdd)) {
        slate = slate + toAdd;
        helper(string, i + 2, toAdd);
      }
    }

    // Memoize the result for this position and slate.
    memo.add(i);
  }
}

/*
input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to
'1262': 'AZB', 1 26 2
 'ABFB', 1 2 6 2
'LFB', 12 6 2
*/


// a letter is 1 -> 26
// 2 digits max

// we can pick 1 digits or 2 digits

// manager
// passes subproblem to submanager
// manager makes 2 decisions
// 1 append to "slate"
// 12 append to slate
// pass rest of string to submanagers




/**
 * Deals with zeros
 * Takes too long.
 * maybe some backtracking or memoization
 */
var numDecodings = function (S) {
  /**
  @param S: string
  @return: integer
  */
  let count = 0;
  const alphabet = new Set([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
  ])

  helper(S, 0, '') // slate -> combination

  return count;

  function helper(string, i, slate) {
    // base case
    if (i === string.length) {
      console.log('slate', slate)
      count++;
      return;
    }

    const newSlate = slate + string[i]
    if (newSlate[0] != 0) {
      if (alphabet.has(Number(string[i]))) {
        helper(string, i + 1, slate + string[i])
      }

    }


    if (i + 1 < string.length) {
      const toAdd = string[i] + string[i + 1];
      if (alphabet.has(Number(toAdd))) {
        if (toAdd[0] != 0) {
          slate = slate + toAdd;
          helper(string, i + 2, toAdd)
        }

      }
    }
  }
}
const input = '11111'
const result = numDecodings(input);
console.log('result', result)

/*
input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to
'1262': 'AZB', 1 26 2
 'ABFB', 1 2 6 2
'LFB', 12 6 2
*/


// a letter is 1 -> 26
// 2 digits max

// we can pick 1 digits or 2 digits

// manager
// passes subproblem to submanager
// manager makes 2 decisions
// 1 append to "slate"
// 12 append to slate
// pass rest of string to submanagers   


// 1262


alphabet = {
   '1':
   '2':
   '3':
   '4':
   '5':
   '6':
   '7':
   '8':
   '9':
   '10':
   '11':
   '12':
   '13':
   '14':
   '15':
   '16':
   '17':
   '18':
   '19':
   '20':
   '21':
   '22':
   '23':
   '24':
   '25':
   '26':
}

