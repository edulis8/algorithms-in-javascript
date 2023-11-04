



// /**
//  * @param {int32} n
//  * @return {list_list_int32}
//  */
// const result = [];

// function tower_of_hanoi(n) {
//     // Write your code here.
//     helper(n, 1, 2, 3);
//     return result;
// }

// function helper(n, source, aux, dest) {
//     if (n === 1) {
//         result.push([source, dest]);
//         return;
//     }    
//     helper(n-1, source, dest, aux);
//     result.push([source, dest]);
//     helper(n-1, aux, source, dest);
// }



// READ STATEMENT
// SOURCE IS 1, AUX 2, DESTINATION is 3!
function tower_of_hanoi(n, source = 1, aux = 2, dest = 3, result = []) {
  if (n === 1) {
    // console.log(`move disk from ${source} to ${dest}`);
    result.push([source, dest]);
    return result;
  } else {
    // source is source
    // auxiliary becomes destination
    // destination used as auxiliary
    tower_of_hanoi(n - 1, source, dest, aux, result);
    // console.log(`move disk from ${source} to ${dest}`);
    result.push([source, dest]);
    // auxiliary becomes source
    // source used as auxiliary
    // destination is destination
    tower_of_hanoi(n - 1, aux, source, dest, result);
  }

  return result;
}
console.log('\n******************** OUTPUT ************\n');
let result = tower_of_hanoi(1);
console.log('result:', JSON.stringify(result))
console.log('\n******************** ************\n')

