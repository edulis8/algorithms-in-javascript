// Subsets With Duplicate Characters
// Given a string that might contain duplicate characters, find all the possible distinct subsets of that string.

// Example One
// {
// "s": "aab"
// }
// Output:

// ["", "a", "aa", "aab", "ab", "b"]
// Example Two
// {
// "s": "dc"
// }
// Output:

// ["", "c", "cd", "d"]
// Notes
// All the subset strings should be individually sorted.
// The order of the output strings does not matter.
// Constraints:

// 1 <= length of the string <= 15
// String consists of lowercase English letters
/**
 * @param {str} s
 * @return {list_str}
 */
function get_distinct_subsets(s) {
  const result = [];
  // presort, so we can process all duplicates at the same time. 
  // ** Alternative: hash map with frequencies...
  const arr = s.split('');
  arr.sort();
  helper(arr, 0, []);
  return result;

  function helper(arr, i, slate) {
    // Base Case
    if (i === arr.length) {
      result.push(slate.join(''));
      return;
    } else {
      // Recursive Case
      // determine count of a duplicate
      let count = 0;
      for (let j = i; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        } else {
          break;
        }
      }
      // exclusion case, skip ahead by count so as not to re-use any duplicates
      helper(arr, i + count, slate)
      // inclusion cases
      // loop from 1 to count
      // add arr[i] - the duplicate - to slate 
      // call helper
      // end loop
      for (let k = 1; k <= count; k++) {
        slate.push(arr[i]);
        helper(arr, i + count, slate)
      }
      // new loop to remove/pop elements from the slate
      for (let l = 1; l <= count; l++) {
        slate.pop()
      }
    }
  }
}


console.log('\n******************** OUTPUT ************\n');
let input = {
"s": "1111"
}

let result = get_distinct_subsets(input.s);
console.log('result:', result)
console.log('\n******************** ************\n')




function get_distinct_subsets_using_string_slate(s) {
  const result = [];
  // presort, so we can process all duplicates at the same time. Alternative: hash map with frequencies...
  const arr = s.split('');
  arr.sort();
  s = arr.join('')
  helper(s, 0, '');
  return result;

  function helper(string, i, slate) {
    // Base Case
    if (i === s.length) {
      result.push(slate);
      return;
    } else {
      // Recursive Case
      // determine count of a duplicate
      let count = 0;
      for (let j = i; j < string.length; j++) {
        if (string[i] === string[j]) {
          count++;
        } else {
          break;
        }
      }
      // exclusion case, skip ahead by count so as not to re-use any duplicates
      helper(string, i + count, slate)
      // inclusion cases
      // loop from 1 to count
      // add arr[i] - the duplicate - to slate 
      // call helper
      // end loop
      for (let k = 1; k <= count; k++) {
        slate = slate + arr[i]
        helper(string, i + count, slate)
      }
    }
  }
}


// HASH MAP - BAD IDEA because of the requirement "All the subset strings should be individually sorted."
// HAVE TO LISTEN TO REQUIREMENTS!
// this would work if not for that requirement
function get_distinct_subsets_using_map_not_presorting(s) {
  const result = [];
  const arr = s.split('');
  
  // note about reduce. Tally/accumulator comes first, then item.
  // const freqMap = arr.reduce((map, item) => {
  //     map.set(item, map.get(item) || 0) 
  //     map.set(item, map.get(item) + 1);
  //   return map;
  // }, new Map());

  const freqMap = arr.reduce((map, item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
    return map;
  }, new Map());

  console.log('map', freqMap)
  helper(arr, 0, []);
  return result;

  function helper(arr, i, slate) {
    // Base Case
    if (i === arr.length) {
      result.push(slate.join(''));
      return;
    } else {
      // Recursive Case
      // determine count of a duplicate
      let count = freqMap.get(arr[i]);
      // exclusion case, skip ahead by count so as not to re-use any duplicates
      helper(arr, i + count, slate)
      // inclusion cases
      // loop from 1 to count
      // add arr[i] - the duplicate - to slate 
      // call helper
      // end loop
      for (let k = 1; k <= count; k++) {
        slate.push(arr[i]);
        helper(arr, i + count, slate)
      }
      // new loop to remove/pop elements from the slate
      for (let l = 1; l <= count; l++) {
        slate.pop()
      }
    }
  }
}
