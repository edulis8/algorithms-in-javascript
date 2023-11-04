/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};




*/
/**
 * @param {BinaryTreeNode_int32} root
 * @return {int32}
 */
function height_of_binary_tree(root) {
  // top down 
  // do a depth first search
  // keep a global max
  // update max if local max is greater than local

  if (!root) return 0;
  let globalMax = 0;
  helper(root, 1)
  return globalMax;

  function helper(node, level) {
    // base case
    if (!node.left && !node.right) {
      globalMax = Math.max(globalMax, level)
      return;
    }

    // recursive case
    if(node.left) {
      helper(node.left, level + 1)
    }
    if(node.right) {
      helper(node.right, level + 1)
    }
  }
}

// function find_height_heir_tree(root) {
//   if (!root) return 0; 
//   let globalMax = 0;
//   helper(root, 0);
//   return globalMax;

//   function helper(node, counter) {
//     // base case, leaf worker
//     // check if no children
//     // 
//     if (!node.children || !node.children.length) {
//       // add one to counter to count the last edge
//       globalMax = Math.max(globalMax, counter);
//       return;
//     }

//     console.log(counter)
//     counter = counter + 1;
//     // recursive cases, internal workers
//     node.children.forEach(child => {
//       helper(child, counter); // BE CAREFUL ABOUT COUNTER++ here , it created a bug, you don't want to increment WITHIN THE LOOP!
//     })
//   }
// }