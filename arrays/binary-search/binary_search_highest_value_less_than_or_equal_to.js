// Function to perform binary search to find the highest value that is less than or equal to the target
function binarySearch(arr, target) {
  return helper(arr, target, 0, arr.length - 1);
}

// Helper function for binary search
function helper(arr, target, start, end) {
  // Base case: If start pointer exceeds end pointer, return the index of the element that is less than or equal to the target
  if (start > end) {
      return end;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // If the middle element is less than or equal to the target
  if (arr[mid] <= target) {
      // If the next element after the middle element is greater than the target or the middle element is the last element
      // Return the index of the middle element
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
          return mid;
      } else {
          // Otherwise, search the right half
          return helper(arr, target, mid + 1, end);
      }
  } else {
      // If the middle element is greater than the target, search the left half
      return helper(arr, target, start, mid - 1);
  }
}