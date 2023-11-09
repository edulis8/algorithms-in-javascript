
/*
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.
*/


//TIME O(N), 
//  This is because you need to visit each integer in the nested list exactly once to calculate the sum.

// recursive
// optional var depth set to 1
var depthSum = function(nestedList, depth = 1) {
  let sum = 0
  // iterate over list
  for (let i = 0; i < nestedList.length; i++) {
    // if a number
    if (nestedList[i].isInteger()) {
      // multiply by its depth and add to sum
      sum += nestedList[i].getInteger() * depth;
    } else {
      // if a list, pass list into recursive function, add 1 to depth
      sum += depthSum(nestedList[i].getList(), depth + 1);
    }
  }
  // return the sum
  return sum
};