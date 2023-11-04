// Soo notes
// idea: depth first search (bc it is the easier recursion)
// because it is a recursive tree, time complexity is exponential
// always with recursion you'll have at least one call stack per node in tree.
// tail recursion: you push down the result, and only add to the result at the end of the recursuion.



// Soo's psuedocode:
// Pattern to recognize for this: 
// ["000", "001", "010", "011", "100", "101", "110", "111"]
// 0 1 (permutation of one digit)
// put into array ->  0 + perms(n-1), 1 + perms(n-1)
// thinks is not ideal, start with "naive solution" (aka brute force-ish)



// ["0", "1"]
// map over it, add 0
// ["00", "01"].concat(["10", "11"])

// functional way
var perms = (n) =>
  (n === 1) ? ["0", "1"]
    : perms(n - 1).map(s => `0${s}`).concat(perms(n - 1).map(s => `1${s}`));


// call with node get_binary_strings.js 3
// let arg = parseInt(process.argv[2], 10)
// console.log('arg', arg);
// console.log(perms(arg));


const get_binary_strings = (n) => {
  const bsHelper = (slate, n) => {
    if (n === 0) {
      result.push(slate);
    } else {
      // divide problem into two halves
      bsHelper(slate + '0', n - 1);
      bsHelper(slate + '1', n - 1);
    }
  }


  const result = [];
  bsHelper('', n);
  return result;
}

console.log('\n******************** OUTPUT ************\n');
let input = 4;
let result = get_binary_strings(input);
console.log('result:', result)
console.log('\n******************** ************\n')

