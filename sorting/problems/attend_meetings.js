// Given a list of meeting intervals where each interval consists 
// of a start and an end time, check if a person can attend all the given meetings such that only one meeting can be attended at a time.


// {
//   "intervals": [[1, 5], [5, 8], [10, 15]]    
// }

// Output: 1 // "true"

// {
//   "intervals": [[1, 5], [4, 8]] 
// }

// Output: 0 // "false"

// brute force
// iterate thru the tuple meeting times
// iterate forward with inner loop, if either tuple number falls between another tuple, return 0, else return 1
// decrease and conquer
// in what way can first element be involved in the solution?
// [1, 5]
// only if an number in another tuple falls between these numbers
// search rest of array for a number > 1 and < 5, > than tuple[0] and < tuple[1]
// how to search faster than linear time?
// options: presort and binary search tree (log n), or presort and two pointer pass
// lets try this
// flatten rest of the array, sort it, do two pointer pass



/*
Asymptotic complexity in terms of the length of `intervals` `n`:
* Time: O(n * log(n)).
* Auxiliary space: O(1).
* Total space: O(n).
*/


// Apply primary sort on the intervals by the start time and secondary sort by the end time.
// Compare only the adjacent intervals to check if overlapping is present or not.
// If the end time of some interval is found greater than the start time of the next interval, it means these two intervals are overlapping.
//   Note: As the intervals are sorted, we can say if all the adjacent intervals are non - overlapping, intervals not adjacent are also non - overlapping.

/**
 * @param {list_list_int32} intervals
 * @return {int32}
 */
function can_attend_all_meetings(intervals) {
  // Since the meeting will be attended starting from the one with the smallest start time and moving ahead in the sorted order of the start times of the listed meetings, 
  // it will be beneficial to sort all the given intervals based on their starting times.
  // If start time is same for two intervals then sort in ascending order of end time of intervals
  sortByBeginThenEnd(intervals);
  for (let i = 0; i < intervals.length; i++) {

    if (intervals[i + 1]) {
      let endTimeCurrentInterval = intervals[i][1];
      let startTimeNextInterval = intervals[i + 1][0];
      // if end time extends into next start time, AKA if overlap found, return 0
      if (endTimeCurrentInterval > startTimeNextInterval) {
        return 0;
      }
    }
  }
  return 1;
}

function sortByBeginThenEnd(intervals) {
  intervals.sort((a, b) => {
    // Compare by start time first
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    // If start times are the same, compare by end time
    return a[1] - b[1];
  });
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "intervals": [[1, 5], [5, 8], [10, 15]]
}

let result = can_attend_all_meetings(input.intervals);
console.log('result:', result)

console.error('\n******************** ************\n')
