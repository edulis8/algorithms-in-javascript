// O(n2), quadratic
// STABLE - no swapping
// Example of BRUTE FORCE
// IN PLACE
// Also an example of DECREASE AND CONQUER - you start with one side (in this case the left), "assume rest of array is already sorted", put the element in the right place 
// in bubble sort the maximums are bubbled out of the unsorted section. (While in insertion sort elements are bubbled into the sorted section)

function implementation(arr) {
  // iterate forwards (for)
  // store curr in temp variable
  // while loop goes backwards - while red >= 0 or next item is > red
  // move next item to the right. Continuous swapping.

  for (let i = 0; i < arr.length; i++) {
    console.log(i, '-------------');
    let tempElement = arr[i];
    let redIndex = i;
    // iterate backwards as long as left neighbor is greater
    console.log('current element: ', tempElement)
    while (redIndex >= 0 && arr[redIndex - 1] > tempElement) {
      redIndex--;
      arr[redIndex + 1] = arr[redIndex]; // bubble everything greater than element to the right
      console.log(arr.toString());
    }
    // Done with iteration, found smaller left neighbor
    arr[redIndex] = tempElement; // place element next to smaller neighbor
  }

  return arr;
}


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = [100,1,2,3,4,5,6,7];     // <--- UPDATE [5, 8, 3, 9, 4, 1, 7];
let result = implementation(input);
console.log('result:', result)

console.error('\n******************** ************\n')
