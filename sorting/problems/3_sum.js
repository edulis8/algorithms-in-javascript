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

    let target = 0 - nums[i]; // target = -nums[i]

    // iterate forward
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