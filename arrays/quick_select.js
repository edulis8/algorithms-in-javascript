

// FIND KTH smallest element in an unsorted array

// QuickSelect function to find the kth smallest element in an unsorted array
function quickSelect(nums, k, start = 0, end = nums.length - 1) {
  // Partition the array and get the index of the pivot
  const pivotIndex = partition(nums, start, end);
  
  // If the pivot's index is the same as k - 1, it means the pivot is the kth smallest element
  if (pivotIndex === k - 1) {
    return nums[pivotIndex];
  } 
  // If the pivot's index is less than k - 1, it means the kth smallest element is in the right part of the array
  else if (pivotIndex < k - 1) {
    return quickSelect(nums, k, pivotIndex + 1, end);
  } 
  // If the pivot's index is greater than k - 1, it means the kth smallest element is in the left part of the array
  else {
    return quickSelect(nums, k, start, pivotIndex - 1);
  }
}

// Partition function to partition the array around a pivot
function partition(nums, start, end) {
  // Choose the last element of the current subarray as the pivot
  const pivot = nums[end];
  // Initialize i to start
  let i = start;
  
  // Iterate over the elements of the current subarray
  for (let j = start; j < end; j++) {
    // If the current element is less than or equal to the pivot
    if (nums[j] <= pivot) {
      // Swap the current element with the element at index i
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // Increment i
      i++;
    }
  }
  
  // Swap the pivot with the element at index i
  [nums[i], nums[end]] = [nums[end], nums[i]];
  // Return the index of the pivot
  return i;
}