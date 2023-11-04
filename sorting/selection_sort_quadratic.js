// O(n2), quadratic
// NOT STABLE, too much swapping
// Example of BRUTE FORCE
// IN PLACE


// [1, 7, 3, 8, 4, 5, 9]
function selection_sort(arr) {
  // outer loop
      // inner loop -> look forward
      // save min index
  // swap curr with min
  
  for (let i = 0; i < arr.length; i++) {
      // arr[i] is current item 
      let minIndex = i;
      
      for(let j = i; j < arr.length; j++) {
          // if "red" item is less than min item
          let setMinIndex = arr[j] < arr[i];
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      // swap
     // if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
     // }
  }
  
  return arr;
}




[4,3,2,1]



console.log('\n******************** OUTPUT ************\n');

const input = [1, 7, 3, 8, 4, 5, 9]
let result = selection_sort(input);
console.log('result:', result)

console.error('\n******************** ************\n')

