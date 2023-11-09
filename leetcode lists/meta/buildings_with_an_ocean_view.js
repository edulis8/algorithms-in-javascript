// /**
//  * @param {number[]} heights
//  * @return {number[]}
//  */

//  // [4,2,3,1]
//      0-1-2-3

//  [3, 2, 0]


// LINEAR TIME
// LINEAR SPACE
var findBuildings = function(heights) {
  // result is index-based
  const result = [heights.length - 1]; // put leftmost building in the result array, it can always see ocean

  for (let i = heights.length - 2; i >= 0; i--) { // iterate backward from len-2
     
      const currentBuilding = heights[i]; // 
      const lastBuildingIndex = result[result.length - 1]; // be careful with values and indexes!

      if (currentBuilding > heights[lastBuildingIndex]) {
          result.push(i);
      }
  }

  // remember to reverse!
  return result.reverse();
};


// USES A MAXHEIGHT, BUT THAT IS THE LAST INDEX
// var findBuildings = function(heights) {
//     const results = []; // Array to collect the results
//     let maxHeight = -Infinity; // Keeping the lowest value to track heights

//     // Going from reverse direction since ocean is on the right
//     for (let i = heights.length - 1; i >= 0; i--) {
//         if (heights[i] > maxHeight) {
//             // If the current building is taller than the tallest building that we have seen so far
//             // then add it to the result
//             results.push(i);
//         }
//         // Track the height of the tallest building seen
//         maxHeight = Math.max(maxHeight, heights[i]);
//     }

//     // Reversing results since it's expected in that order
//     return results.reverse();
// };


// // last building always has an ocean view
// // lets put it (index) into a result array
// // then iterate backward over heights
// // check last height in result array, if current element is greater than it, push to result array, else ignore
// //
//  // [4,2,3,1]


//  // [1,3,2,4]


// WORKS BUT TAKES MORE TIME, UNSHIFT PROB TAKES A LOT OF TIME AND ITS IN A LOOP
// var findBuildings = function(heights) {
//   // result is index-based
//   const result = [heights.length - 1];

//   for (let i = heights.length - 2; i >= 0; i--) {
//       const currentBuilding = heights[i]; 
//       const lastBuildingIndex = result[0]; 
//       if (currentBuilding > heights[lastBuildingIndex]) {
//           result.unshift(i);
//       }
//   }

//   return result;
// };

