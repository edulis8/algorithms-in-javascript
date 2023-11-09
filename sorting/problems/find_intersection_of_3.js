/**
 * 
 * Intersection Of Three Sorted Arrays
Given three arrays **sorted in the ascending order**, return their intersection sorted array in the ascending order.

Example One
{
"arr1": [2, 5, 10],
"arr2": [2, 3, 4, 10],
"arr3": [2, 4, 10]
}
Output:

[2, 10]


 * @param {list_int32} arr1
 * @param {list_int32} arr2
 * @param {list_int32} arr3
 * @return {list_int32}
 */

// three pointer pass
function find_intersection(arr1, arr2, arr3) {
  const result = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    let value1 = arr1[i];
    let value2 = arr2[j];
    let value3 = arr3[k];

    if (value1 === value2 && value1 === value3) {
      result.push(value1);
      i++;
      j++;
      k++;
    } else if (value1 < value2 || value1 < value3) {
      // increment the pointers if they're less than one of the other pointers
      i++; // 
    } else if (value2 < value1 || value2 < value3) {
      j++;
    } else if (value3 < value1 || value3 < value2) {
      k++;
    }

  }

  return result.length > 0 ? result : [-1];
}


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "arr1": [1, 2, 2, 2, 9],
  "arr2": [1, 1, 2, 2],
  "arr3": [1, 1, 1, 2, 2, 2]
  }



// {
//   "arr1": [2, 5, 10, 2],
//   "arr2": [2, 3, 4, 10],
//   "arr3": [2, 4, 10]
// }

// {
//   "arr1": [1, 2, 3],
//   "arr2": [],
//   "arr3": [2, 2]
// }




let result = find_intersection(input.arr1, input.arr2, input.arr3);
console.log('result:', result)

console.error('\n******************** ************\n')




// Eric solution
// DOESN"T WORK BECAUSE WE NEED TO NOT KEEP DUPLICATES FROM ANY ARRAY
// throw two arrays into 2 maps that keeps frequency
// iterate over third array, if present in map, and freq >= 1, push to result array
// could also be a Set actually
// function find_intersection(arr1, arr2, arr3) {
//   const result = [];
//   const map1 = arr1.reduce((map, item) => {
//     map[item] = map[item] || 0;
//     map[item]++;
//     return map;
//   }, {});

//   console.log(map1)

//   const map2 = arr2.reduce((map, item) => {
//     map[item] = map[item] || 0;
//     map[item]++;
//     return map;
//   }, {});

//   arr3.forEach(el => {
//     if (map1[el] && map2[el]) {
//       result.push(el)
//     }
//   })

//   console.log(map2)

//   return result.length > 0 ? result : [-1];
// }