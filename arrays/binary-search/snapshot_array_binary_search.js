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

class SnapshotArray {
  constructor(length) {
    // initializes an array-like data structure with the given length. Initially, each element equals 0.
    this.snapCounter = 0;
    this.historyRecords = new Map();

    // find the record with the highest snapshot ID that is less than or equal to the given snap_id
    // Store like this:
    // historyRecords: {
    //     index: [[snap_id, value]]
    //     0: [[0, 5], [1,6]]
    // }
  }

  set(index, val) {
    const record = this.historyRecords.get(index) || [];
    record.push([this.snapCounter, val]);
    this.historyRecords.set(index, record);
  }

  snap() {
    // takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
    // TODO: how store our snapshots, and get them by index and snap_id

    // hmm
    this.snapCounter += 1;
    return this.snapCounter - 1;
  }

  // Get the records associated with the given index from the historyRecords map
  get(index, snap_id) {
    const records = this.historyRecords.get(index);
    // If no records found, return 0
    if (!records) return 0;

    // Perform binary search recursively
    const binarySearch = (start, end) => {
      // Base case: If start pointer exceeds end pointer, return -1
      if (start > end) return -1;
  
      // Calculate the middle index
      // const mid = start + Math.floor((end - start) / 2);
      const mid = Math.floor((start + end) / 2);
  
      // SEARCHING FOR "the highest values that is less than or equal to the target"
      // If the snapshot ID at the middle index is less than or equal to the given snap_id
      if (records[mid][0] <= snap_id) {
        // Perform binary search on the end half of the array
        const subResult = binarySearch(mid + 1, end);
        // If subResult is not -1, return subResult, otherwise return the middle index
        // if better answer found in subResult, return it, otherwise our desired result is mid
        // because middle index here will be the highest snapshot ID that is less than or equal to the given snap_id
        // in other words if we don't find a higher value in end half of array, mid is our answer
        return subResult !== -1 ? subResult : mid;
      } else {
        // If the snapshot ID at the middle index is greater than the given snap_id
        // Perform binary search on the start half of the array
        return binarySearch(start, mid - 1);
      }
    }

    // Perform binary search starting from index 0 to records.length - 1
    const resultIndex = binarySearch(0, records.length - 1);

    // Return the value associated with the result index if found, otherwise return 0
    return resultIndex === -1 ? 0 : records[resultIndex][1];
  }

 
}
