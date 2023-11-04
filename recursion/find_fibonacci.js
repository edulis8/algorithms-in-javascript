
/**
 * @param {int32} n
 * @return {int32}
 */


// BAD RECURSIVE SOLUTION
// TIME COMPLEZITY: EXPONENTIAL
// function find_fibonacci(n) {
//   console.log(n)
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return find_fibonacci(n - 1) + find_fibonacci(n - 2)
//   }
// }

//==============

// MEMOIZED / DYNAMIC PROGRAMMING / CACHED IN ARRAY SOLUTION
// LINEAR
// function find_fibonacci_dp(n) {
//   let dp = [];
//   dp[0] = 0;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//       dp[i] = dp[i - 1] + dp[i - 2]; // Building the dp array.
//   }
//   return dp[n];
// }

//==============

// LINEAR
// SPACE OPTMIIZED; NO ARRAY
// function find_fibonacci_space_optimized(n) {
//   if (n == 0) {
//       return 0;
//   }
//   let super_previous = 0;
//   let previous = 1;
//   for (let i = 2; i <= n; i++) {
//       let current = super_previous + previous;
//       super_previous = previous;
//       previous = current;
//   }
//   return previous;
// }


// recursive solution
// LINEAR
function find_fibonacci(n, b1 = 0, b2 = 1) {
  if (n === 0) {
    return b1;
  } else {
    return find_fibonacci(n - 1, b2, b1 + b2)
  }
}

// console.log('\n******************** OUTPUT ************\n');
// let input = 33;
// let result = find_fibonacci(input);
// console.log('result:', result)
// console.log('\n******************** ************\n')


var hashmap = {}
let count = 0
var fib = function (n, name) {
  console.log('map', hashmap)
  count++
  // base case
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  if (hashmap[n]) {
    console.log(name, ' :accessing hashmap for:', n)
    return hashmap[n];
  }


  // 3 
  let answer = fib(n - 1, 'first') + fib(n - 2, 'second');
  // only add to hashmap if not there already

  console.log(name, ' :adding to hashmap n: ', n, 'answer', answer)
  hashmap[n] = answer;

  return answer;

};

let resultFib = fib(7)
console.log(resultFib);
console.log('count of calls', count)