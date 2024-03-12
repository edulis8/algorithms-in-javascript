// Implement a SnapshotArray that supports the following interface:

// SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.

// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.

// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id


/*
Example 1:

Input: ["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]
Output: [null,null,0,null,5]
Explanation: 
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
snapshotArr.get(0,1); // 6
*/
// [{value: 5},{}]

// class or factory function called SnapshotArray

// methods:
// SnapshotArray instance accepts a length
// set(index, val)
// snap()
// get(index, snap_id)

// Time - linear for copies, all esle seems constant
// Space - array is linear, map is O(snaps * arr.length)
// Usage - per snapshot, linear
// length is 2
//  0  1
// [2, 5]
// get(snap_id = 5, index = 0)
//           i
// => snapshots for position 0
// // at index 0, we have 2
// // at index 8, we have 1
// // v2 DS is map of arrays of objects like this:
// 0: [{ snapId: 0, value: 2 }, { snapId: 8, value: 1}]
// // get index 0 at snap id 7
// 2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

// => snapshots for position 1
// 4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2


//   [{0: 2, 1: 2, 2: 2},{0: 4, 1: 5, 2: 6}]
          

// MY FIRST ATTEMPT,
// literally creates a copy of array at each snap
// times out on leetcode
class SnapshotArray {
  constructor(length) {
   // initializes an array-like data structure with the given length. Initially, each element equals 0.
    // TODO - what is our DS?
    this.arr = new Array(length).fill(0);
    this.snapCounter = 0;
    this.map = new Map(); 
    // v1 - map of snap_ids -> copies of array when snap was done.
    // v2 - map of snap_ids -> integer which is length of array when snap was done.
  }
  
  set(index, val) {
    // sets the element at the given index to be equal to val.
    this.arr[index] = val;
  }
  
  snap() {
    // takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
    // TODO: how store our snapshots, and get them by index and snap_id 

    // return int
    this.map.set(this.snapCounter, [...this.arr])
    this.snapCounter += 1;
    return this.snapCounter - 1;
  }
  
  get(index, snap_id) {
    // returns the value at the given index, at the time we took the snapshot with the given snap_id
    // lookup in hashmap the snap_id, then the index in that copy of array
    const array = this.map.get(snap_id);
    return array[index];
  }
}