/**
 * 
 * TOPICS:
  Array
Hash Table
Union Find
 * 
 * 
REDO USING SET AND ONLY LOOKING 
AT NUMBERS AT BEGINNING OF SEQUENCES
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // brute force n^3
  // helper function doesArrayContainNumberOneGreater (array.includes(num))
  // loop
  // if 

  // dump nums into a set
  // loop over nums
  // if currentNum - 1 exists in set, ignore it
  // else
  // loop looking for num + 1, until find number that breaks sequence

  let longestStreak = 0;
  const set = new Set(nums);

  nums.forEach(num => {
      if (!set.has(num - 1)) {
          // look for sequence
          localCounter = 1;
          while (set.has(num + localCounter)) {
              localCounter += 1;
          }
          longestStreak = Math.max(longestStreak, localCounter)
          
      }
  })

  return longestStreak;
}

 // [100,4,200,1,3,2]