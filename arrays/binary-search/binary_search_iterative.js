// Returns index of target or -1 if not found.
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Element found at index `mid`
    } else if (arr[mid] < target) {
      start = mid + 1; // Search the right half. IMPORTANT add 1 to mid.
    } else {
      end = mid - 1; // Search the left half. IMPORTANT subtract 1 from mid.
    }
  }

  return -1; // Element not found
}