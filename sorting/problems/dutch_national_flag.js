// Dutch National Flag
// Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.

// Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.

// This is an important problem in search algorithms theory proposed by Dutch computer scientist Edsger Dijkstra. 
// Dutch national flag has three colors (albeit different from ones used in this problem).

// Example
// {
// "balls": ["G", "B", "G", "G", "R", "B", "R", "G"]
// }
// Output:

// ["R", "R", "G", "G", "G", "G", "B", "B"]
// There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

// Notes
// Constraints:

// 1 <= n <= 100000
// Do this in ONE pass over the array, NOT TWO passes
// Solution is only allowed to use constant extra memory


/**
 * @param {list_char} balls
 * @return {list_char}
 */
function dutch_flag_sort(balls) {
  // all the red balls go first, then green and then blue ones.
  // R,G,B
  // pivots:
  let rPointer = 0;
  let gPointer = 0;
  for(let i = 0; i < balls.length; i++) {
    if (balls[i] === 'G') {
      // B blue gets swapped with G green
      let temp = balls[i]; // B blue gets swapped with G green
      balls[i] = balls[gPointer]; // green
      balls[gPointer] = temp;
      gPointer++;
    } else if (balls[i] === 'R') {
      // Swap blue with green
      let temp = balls[i]; // B blue gets swapped with G green
      balls[i] = balls[gPointer]; // green overwrites blue
      balls[gPointer] = temp;
      // swap green with red
      let temp2 = balls[gPointer]; // G green
      balls[gPointer] = balls[rPointer]; // red overwrites green
      balls[rPointer] = temp2;
      gPointer++;
      rPointer++;
    }
  }
  return balls;
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
"balls": ["G", "B", "G", "G", "R", "B", "R", "G"]
}
let result = dutch_flag_sort(input.balls, input.target);
console.log('result:', result)

console.error('\n******************** ************\n')


//LOMUTO's PARTIONING
//  we're moving the smaller numbers to the left side of the pivot
let smallerPointer = start; // the Pivot

// biggerPointer starts one to the right of smaller
for (let biggerPointer = start + 1; biggerPointer <= end; biggerPointer++) {
  // if bigger pointer hits a number that is less than the pivot
  if (arr[biggerPointer] < arr[start]) {
    smallerPointer++; // we move smaller pointer forward
    // swap(arr[biggerPointer], arr[smallerPointer])
    let temp = arr[biggerPointer]; // swap smaller number with bigger number (we're moving the smaller numbers to the left side of the subarray)
    arr[biggerPointer] = arr[smallerPointer];
    arr[smallerPointer] = temp;
  }
}

