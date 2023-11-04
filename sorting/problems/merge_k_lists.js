// input

// {
//   "lists": [
//   [1, 3, 5],
//   [3, 4],
//   [7]
//   ]
// }

// output
// [1, 3, 3, 4, 5, 7]

// BRUTE FORCE
  // concatenante all the lists and .sort()
  // for each list
    // newArr.concat(list)  // quadratic here! looping twice
  // sort

// NEVERMIND, WTF IS A LINKED LIST AGAIN?
  function merge_k_lists(lists) {
    const arr = [].concat(...lists);
    arr.sort((a,b) => a-b)
    return arr 
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input =  {
     "lists": [
     [1, 3, 5],
     [3, 4],
     [7]
     ]
   }     
let result = merge_k_lists(input.lists);
console.log('result:', result
)
console.error('\n******************** ************\n')
