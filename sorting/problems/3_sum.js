// OICE - inputs, outputs, edge cases, constraints
// Given an integer array arr of size n, find all magic triplets in it.

// Magic triplet is a group of three numbers whose sum is zero.

// Note that magic triplets may or may not be made of consecutive numbers in arr.

// **Edge case: arr may contain duplicate numbers**

// input:
// {
// "arr":[4, -2, -2, -1, -3]
// }

// output:
// ["-2,-2,4", "-3,-1,4"]

// BEST SOLUTION IS QUADRATIC
function implementation(arr) {
  console.log('arr', arr)
  // Brute force would be three loops, but would be cubic (n^3), we can do better. (You'd try adding all the numbers together.)
  // decrease and conquer approach makes sense
  // take firstElement, 
  // then search rest of array for two elements that add up to -firstValue (target - firstValue, or 0 - firstValue)
  // twoSum(restOfArray, -firstValue) -> return two elements, not two indices, if they exist

  // psuedocode:
  // loop over arr
  // twoSum(restOfArray, -firstValue) -> return two elements, not two indices, if they exist
  // create with arr[i] and those two elements as a string, push to result array.
  // FYI this is quadratic and probably not the best answer.

  const lookup = {};
  const magicTriplets = new Set();
  // make a element -> index lookup
  arr.forEach((el, i) => { lookup[el] = i });

  // iterate over array, hand "rest of array" and target to twoSum
  arr.forEach((el, i) => {
    const subarray = [...arr.slice(0, i), ...arr.slice(i + 1)];
    let twoSumResult = twoSum(subarray, -el, i);
    console.log('twoSumResult', twoSumResult)
    if (twoSumResult) {
      let triplet = [...twoSumResult, arr[i]];
      triplet.sort((a, b) => a - b);
      console.log('triplet', triplet)
      let stringifiedTriplet = triplet.toString();
      if (!magicTriplets.has(stringifiedTriplet)) {
        magicTriplets.add(stringifiedTriplet);
      }
    }
  });

  function twoSum(subarray, target, targetIndex) {
    // create Set of all values in array
    // iterate from subArray first element forward
    // search for a value that, added to element, equals target
    // you can't REPEAT a value
    console.log('target', target)
    for (var j = 0; j < subarray.length; j++) {
      let searchedForElement = target - subarray[j];

      // we've removed target from the array to be searched. We also have to remove/skip it from the lookup. So we don't count it twice.
      if (lookup[searchedForElement] && lookup[searchedForElement] !== j && lookup[searchedForElement] !== targetIndex) {
        return [subarray[j], searchedForElement]
      }
    }
    return false;
  }

  return [...magicTriplets];
}


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "arr": [4, -2, -2, -1, -3] // [4, -2, -1, 0] // THIS NEEDS TO BE INVESTIGATED when there's time
}

let result = threeSum(input.arr);
console.log('result:', result)

console.error('\n******************** ************\n')

function threeSum(nums) {
  // holds the result triplets, ensures not duplicates
  let numChildHashMap = new Map();
  let result = [];

  if (nums.length < 3) return result;

  for (let i = 0; i < nums.length; i++) {
    let numHashMap = new Map();

    let target = -nums[i]; // target = -nums[i]

    // iterate forward
    // nums[i] + nums[j] - nums[i] - num[j] = 0
    for (let j = i + 1; j < nums.length; j++) {

      // if map has our searchedForElement, create triplet
      if (numHashMap.has(target - nums[j])) {
        let tempOutput = [nums[i], (target - nums[j]), nums[j]];

        tempOutput.sort();
        if (!numChildHashMap.get(tempOutput.toString())) {
          numChildHashMap.set(tempOutput.toString(), 1);
          result.push(tempOutput.toString());
        }
      }
      // if not, add number to map
      numHashMap.set(nums[j], j);
    }
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * returns as array of arrays.
 * 
 * Approach 3: "No-Sort"
What if you cannot modify the input array, and you want to avoid copying it due to memory constraints?

We can adapt the hashset approach above to work for an unsorted array. 
We can put a combination of three values into a hashset to avoid duplicates. 
Values in a combination should be ordered (e.g. ascending). Otherwise, we can have results with the same values in the different positions.

Algorithm

The algorithm is similar to the hashset approach above. We just need to add few optimizations so that it works efficiently for repeated values:

Use another hashset dups to skip duplicates in the outer loop.
Without this optimization, the submission will time out for the test case with 3,000 zeroes. This case is handled naturally when the array is sorted.
Instead of re-populating a hashset every time in the inner loop, we can use a hashmap and populate it once.
 Values in the hashmap will indicate whether we have encountered that element in the current iteration. 
 When we process nums[j] in the inner loop, we set its hashmap value to i. This indicates that we can now use nums[j] as a complement for nums[i].
This is more like a trick to compensate for container overheads. The effect varies by language, e.g. for C++ it cuts the runtime in half. Without this trick the submission may time out.
 */
function threeSum(nums) {
  const res = new Set(); // result set, doesn't store repeats
  const dups = new Set(); // skip duplicates in outer loop
  const seen = new Map(); // {complement => i}

  for (let i = 0; i < nums.length; i++) {
      if (!dups.has(nums[i])) {
          for (let j = i + 1; j < nums.length; j++) {
              const complement = -nums[i] - nums[j]; // complement is what will reduce other two nums to 0
              if (seen.has(complement) && seen.get(complement) === i) { // i here indicates that we can now use nums[j] as a complement for nums[i].
                  const triplet = [nums[i], nums[j], complement];
                  triplet.sort((a, b) => a - b); // sort and stringify to avoid repeats
                  res.add(JSON.stringify(triplet));
              }
              seen.set(nums[j], i); // When we process nums[j] in the inner loop, we set its hashmap value to i
          }
          dups.add(nums[i]);
      }
  }

  return Array.from(res).map((triplet) => JSON.parse(triplet));
}

/*
Complexity Analysis

Time Complexity: O(n2)

 ). We have outer and inner loops, each going through nnn elements.

While the asymptotic complexity is the same, this algorithm is noticeably slower than the previous approach. Lookups in a hashset, though requiring a constant time, are expensive compared to the direct memory access.

Space Complexity: O(n) for the hashset/hashmap.

For the purpose of complexity analysis, we ignore the memory required for the output. However, in this approach we also store output in the hashset for deduplication. In the worst case, there could be O(n2)\mathcal{O}(n^2)O(n 
2
 ) triplets in the output, like for this example: [-k, -k + 1, ..., -1, 0, 1, ... k - 1, k]. Adding a new number to this sequence will produce n / 3 new triplets.
*/