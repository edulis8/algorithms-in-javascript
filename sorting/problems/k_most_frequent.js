
/**
 * K Most Frequent Words
Given a number and a list of words, return the given number of most frequent words.


"words": ["car", "bus", "taxi", "car", "driver", "candy", "race", "car", "driver", "fare", "taxi"]

car - 3
driver - 2
taxi 2
bus -1 // but lexig. sorted first


input
{
"k": 4,
"words": ["car", "bus", "taxi", "car", "driver", "candy", "race", "car", "driver", "fare", "taxi"]
}

["car", "driver", "taxi", "bus"]
 * 

/*
Asymptotic complexity in terms of the length of `words` ( = `n`):
* Time: O(n * log(n)). // the sorting
* Auxiliary space: O(n). // one or more aux arrays of length n
* Total space: O(n).
*/

 * 
 * @param {int32} k
 * @param {list_str} words
 * @return {list_str}
 */
function k_most_frequent(k, words) {
  // first thought, would use hash map, easier to reason about for me, 
  // you still have to return the values sorted by frequency of highest to lowest, which could be done by sorting the result array with a particular algo
  // which is more efficient than sorting the entire input array, unless k = n, 

  // you can also presort and do a linear scan. nlogn by definition, because sorting input array. 
  // i'm not sure how you'd do this exactly, how you'd keep track of the words and their frequency. could think about it but it will take me time.
  const map = words.reduce((map, word) => {
    map[word] = map[word] || 0;
    map[word]++;
    return map;
  }, {}) // n space

  console.log(map)

  const arrOfTuples = Object.entries(map) // n space again
  console.log(arrOfTuples)

  arrOfTuples.sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  }); // O(nlogn) ... you have to sort it all
  // my solution might be faster than below, because i only sort once

  // const result = []
  // for (let i = 0; i < k; i++) {
  //   result.push(arrOfTuples[i][0])
  // }

  // return result

  return arrOfTuples.slice(0, k).map((el) => el[0]) // linear on smaller array

  // array of tuples, value and frequency
  // sort it based on frequency, secondly on lexig. order - sorting algo is the hard part
  // return first k values

  // other idea
  // words.sort()
  // linear scan, keep a count of duplicates (how?)... not sure

}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "k": 4,
  "words": ["car", "bus", "taxi", "car", "driver", "candy", "race", "car", "driver", "fare", "taxi"]
}

let result = k_most_frequent(input.k, input.words);
console.log('result:', result)

console.error('\n******************** ************\n')



/**
 * @param {int32} k
 * @param {list_str} words
 * @return {list_str}
 */
//time: O(nlogn), space: O(n);
function k_most_frequent_alt(k, words) {
  // PRE-SORT
  let sorted = words.sort(); //quicksort O(nlogn);
  let frequencies = []; // O(n) aux space
  let count = 1;

  // LINEAR SCAN 
  for (let i = 0; i < sorted.length; i++) { //O(n)
    if (sorted[i] === sorted[i + 1]) {
      // if duplicate, increment count
      count++;
    } else {
      frequencies.push([sorted[i], count]);
      count = 1;
      // if not duplicate, push a tuple to the frequencites aray of [value, count], ['car', 3]
    }
  }
  let result = frequencies.sort((a, b) => b[1] - a[1]).map(x => x[0]); // sort by frequencies number
  return result.slice(0, k);
}
