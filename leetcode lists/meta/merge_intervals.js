/**
 * 
 * 56. Merge Intervals
Medium
21.1K
712
company
Facebook
company
Amazon
company
Bloomberg

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping. INCLUSIVE. SAME ELEMENTS STILL MERGE
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104


nlogn
no extra space

 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // first sort by start value, so each set of intervals that can be merged will apear as a contiguous run

  //we will merge these runs together below

  for (let i = 1; i < intervals.length; i++) { // iterate from index 1
    let [x, y] = intervals[i];
    let [prevX, prevY] = intervals[i - 1];
    if (x <= prevY) { // if current first element is less than previous ending, then current interval can either envelope or fit into the last one
      // update the last element to be the greater of the two merged intervals. Current interval is either enveloping or fitting into the last one
      intervals[i - 1][1] = Math.max(y, prevY); 
      // remove the merged one
      intervals.splice(i, 1); // splice(index, 1) means remove one item at that index
      // rewind index now that we've removed
      i--;
    }
  }
  return intervals;
};

[1,2][2,1000]