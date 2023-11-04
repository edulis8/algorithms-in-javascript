// O(n2), quadratic, FASTER IF MOSTLY SORTED
// Example of DECRASE AND CONQUER
// STABLE, no swapping
// IN PLACE

// Insertion Sort works
// by comparing an element with the elements to its left, 
// until it reaches an element that is smaller than it; the element is then inserted in front of the smaller element.

// In insertion sort elements are bubbled into the sorted section. (while in bubble sort the maximums are bubbled out of the unsorted section.)

function implementation(arr) {
  if (arr.length < 2) return;

  for (let i = 0; i < arr.length; i++) {
    console.log(i, '-------------');

    let j = i - 1;
    let currElement = arr[i]; // Find the right spot for it. Next to a lesser neighbor.
    console.log('current element: ', currElement)
    while (j >= 0 && currElement < arr[j]) { // while curr element is greater then left neighbor
      arr[j + 1] = arr[j] // move neighbor to the right
      j--; // decrement j so that:
      arr[j + 1] = currElement  // we can place current element where left neighbor was
      console.log(arr.toString());
    }
  }

  return arr;
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = [100,1,2,3,4,5,6,7,];  //[5, 8, 3, 9, 4, 1, 7]     // <--- UPDATE
let result = implementation(input);
console.log('result:', result)

console.error('\n******************** ************\n')

1,4,5,1001,1001,9,4,50,7,100,2
1,4,5,5,1001,9,4,50,7,100,2
1,4,4,5,1001,9,4,50,7,100,2
1,1,4,5,1001,9,4,50,7,100,2

1,4,5,0,1001,9,4,50,7,100,2
1,4,0,5,1001,9,4,50,7,100,2
1,0,4,5,1001,9,4,50,7,100,2
0,1,4,5,1001,9,4,50,7,100,2