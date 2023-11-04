// Segregate Even And Odd Numbers
// Given an array of numbers, rearrange them in-place so that even numbers appear before odd ones.

// Example
// {
// "numbers": [1, 2, 3, 4]
// }
// Output:
// [4, 2, 3, 1]
// The order within the group of even numbers does not matter; same with odd numbers. So the following are also correct outputs: [4, 2, 1, 3], [2, 4, 1, 3], [2, 4, 3, 1].

// Notes
// It is important to practice solving this problem by rearranging numbers in-place.
// There is no need to preserve the original order within the even and within the odd numbers.
// We look for a solution of the linear time complexity that uses constant auxiliary space.
// Constraints:

// 1 <= length of the array <= 105
// 1 <= element of the array <= 109



// BRUTE FORCE:
// loop, create a map with "odd" and "even" keys, push odds and evens into array
// concat those two arrays.
/**
 * @param {list_int32} numbers
 * @return {list_int32}
 */
function segregate_evens_and_odds(numbers) {
    // My QuickSort Code, just the PARTITIONING PART
    // let smallerPointer = start; // the Pivot
    // for (let biggerPointer = start + 1; biggerPointer <= end; biggerPointer++) {
    //   // if bigger pointer hits a number that is less than the pivot
    //   if (arr[biggerPointer] < arr[start]) {
    //     smallerPointer++; // we move smaller pointer forward
    //     let temp = arr[biggerPointer]; // swap smaller number with bigger number (we're moving the smaller numbers to the left side of the subarray)
    //     arr[biggerPointer] = arr[smallerPointer];
    //     arr[smallerPointer] = temp;
    //   }
    // }

    // [1, 2, 3, 4]
    // PARTITIONING CODE
    let evenPointer = 0; // keeps track of the index of "even area" plus one. At the beginning, even area doesn't exist so it is 0
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            // found an even number, let's place it in the left side, the "even side"
            let temp = numbers[i];
            numbers[i] = numbers[evenPointer];
            numbers[evenPointer] = temp;
            evenPointer++;
        }
    }
   return numbers;
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
"numbers": [1, 2, 3, 4]
}

let result = segregate_evens_and_odds(input.numbers, input.target);
console.log('result:', result)

console.error('\n******************** ************\n')




// BRUTE FORCE WITH JS MAP

// function segregate_evens_and_odds(numbers) {
//     const map = new Map([
//         ['odd', []],
//         ['even', []],
//       ]);

//     numbers.forEach(el => {
//         if (el % 2 === 0) {
//             map.get('even').push(el)
//         } else {
//             map.get('odd').push(el)
//         }
//     })

//     return map.get('even').concat(map.get('odd'));
// }