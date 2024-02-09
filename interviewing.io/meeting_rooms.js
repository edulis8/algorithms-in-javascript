
/*
FEEDBACK
say "i wanna use a set _BECAUSE_ of constant time deletion, insertion, lookup".
express proaactively the time complexity

- Good naming conventions on variables
- Good commenting


THIS PROBLEM
https://leetcode.com/problems/meeting-rooms-ii/description/


https://seanprashad.com/leetcode-patterns/
https://www.techinterviewhandbook.org/coding-interview-prep/
Given a list of intervals of meetings start time and end time
Return whether a person can join all the meetings.

meeting times: [[0,30],[5,10],[15,20]]
output: false



*/

// if a meeting overlaps another you can't attend both
// if a meeting 

// what is an overlap
  // if end time is greater than start time for another meeting, then return false
  // when meeting[i][1] > meeting[n][0]

// [[9,10], [5, 7], [7, 8], [12, 20], [1, 4]]

// Sorted
// [[1,4], [5, 7], [7, 8], [9,10], [12, 20]]
// i.endTime < (i+1).start if false
// i.endTime > (i+1+k).start ? true
// is endtime > startime

// if no overlap between two, skip to next meeting
// no need for two loops

// compare i to i + 1
// either overlap (return false)
// or move on to i + 1

// sort, single iteration

function canPersonJoinAllMeetings(meetings) {
  meetings.sort((a, b) => {
    return a[0] - b[0]; //99%
  });

  for (let i = 0; i < meetings.length - 1; i++) {
    // compare i to i + 1
      // if endtime > next start time return false
    const currEndTime = meetings[i][1];
    const nextStartTime = meetings[i + 1][0];
    if (currEndTime > nextStartTime) {
      // found an overlap
      return false;
    } 
  }
  return true;
}

const input = [[0,30],[5,10],[15,20]];

const result = solution(input);

console.log(result)

// number of meeting rooms 1 if no overlap
// keep track of current meetings, delete past meetings
// if start > prev end, remove it
// keep track of max meetings happening at the same time

// set {endTimes}
// if set has value less than curr start time
// max counter of size of this array (WHAT MATTERS)
// [7,7,12,]
/*
{
  7: 10
  12: 1
}

don't need to sort
loop 1 find max end time
create aray of that length init to 0s
linear time. various loops but not nested.

currTime : 9
endTimesOfCon: 10, 8, 11
concurrMeetings = 3
arr = 0 1 2 3  4 5 6   7 8  9  10  11 12
          1 0 -1 1 1  -1 1  0   0  -1 -1
                                       i
maxSeen = 2
concurr = 0


[ [5, 7],  [8, 9], [9, 10], [10, 11] [2,4], [6, 12],] /\
[2,4]
arr[size] = latest meeting end time in the input
arr[startTime] += 1
arr[endTime] -= 1
*/
/*
[[1,3], [5, 8], [3,4]] min number of meeting rooms 1
    .     .        new     


DS: (6,12), (8,9)
[[2,4], [5, 7], [6, 12], [8, 9], [9, 10], [10, 11]] // 3
          A       B        A
                
                  __a   
                __a
              __a
          ________________
          b
  ____  ____
   a    a
1 2 3 4 5 6 7 8 9 10 11 12
*/

// 
// loop look at curr meeting
  // loop look at all others
  // quadratic


// sorting
// nlogn
// 