// check_if_sum_possible
/**
 * @param {list_int64} arr
 * @param {int64} k
 * @return {bool}
 */
function check_if_sum_possible(arr, k) {
  // we need to check all subsets if they sum to K, return and don't continue to search.

  // generate an e/i tree
  // can there be dups? does it matter? [1,1,1,1] if target is 2, multiple ways of getting 2, stop at first one

  // helper get subproblem and a slate of possible sets
  let result = 0;
  helper(arr, 0, [])
  return !!result;

  function helper(arr, i, slate) {
    // break case / solution found case
    // look at requiements. NON-EMPTY SET
    // result === 1 here is "short circuiting"
    if ((slate.length > 0 && sum(slate) === k) || result === 1) {
      result = 1;
      return;
    }
    // base case, no solution found for subproblem
    if (i === arr.length) {
      return;
    }

    // recursive cases
    // exclude value from set
    helper(arr, i + 1, slate);

    // include value in set
    slate.push(arr[i]);
    helper(arr, i + 1, slate);
    slate.pop();
  }

  function sum(arr) {
    return arr.reduce((tally, item) => {
      return tally + item;
    }, 0);
  }
}




console.log('\n******************** OUTPUT ************\n');
let input = {
  "arr": [1,2,3],
  "k": 6
  }


// {
//   "arr": [2, 6, 8],
//   "k": 6
//   }

let result = check_if_sum_possible_alt(input.arr, input.k);
console.log('result:', result)
console.log('\n******************** ************\n')



function check_if_sum_possible_alt(arr, k) {
  // we need to check all subsets if they sum to K, return and don't continue to search.

  // generate an e/i tree
  // can there be dups? does it matter? [1,1,1,1] if target is 2, multiple ways of getting 2, stop at first one

  // helper get subproblem and a slate of possible sets
  return helper(arr, 0, [])

  function helper(arr, i, slate) {
    // break case / solution found case
    // look at requiements. NON-EMPTY SET
    // result === 1 here is "short circuiting"
    if ((slate.length > 0 && sum(slate) === k)) {
      return true
    }
    // base case, no solution found for subproblem
    if (i === arr.length) {
      return;
    }

    let found = false;
    // recursive cases
    // exclude value from set
    found = helper(arr, i + 1, slate);

    if (found) return true;

    // include value in set
    slate.push(arr[i]);
    found = helper(arr, i + 1, slate);
    slate.pop();
    if (found) return true;


    return false;
  }

  function sum(arr) {
    return arr.reduce((tally, item) => {
      return tally + item;
    }, 0);
  }
}