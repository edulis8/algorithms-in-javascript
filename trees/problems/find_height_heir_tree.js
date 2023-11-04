// TEST

// Height Of A Tree
// Given a tree, find its height: number of edges in the longest path from the root to any node.

// Return the number of edges in the longest path from the root to any node.
// Constraints:

// 1 <= number of nodes <= 105


// EDGES = NODES - 1
// NOT A BINARY TREE - it is a heirarchical tree

// THIS is a MAX problem
// I THINK IT IS TOP DOWN
// USE DFS - get to a leaf node, keep track of edges on the way down
// UPDATE GLOBAL MAX

// TIME COMPLEXITY: O(n)
// SPACE: O(height) aka O(n) in worst case

/*
For your reference:
const TreeNode = class {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
};
*/
/**
 * @param {TreeNode_int32} root
 * @return {int32}
 */
function find_height(root) {
  if (!root) return 0; // may not need
  let globalMax = 0;
  helper(root, 0);
  return globalMax;

  function helper(node, counter) {
    // base case, leaf worker
    // check if no children
    // 
    if (!node.children || !node.children.length) {
      // add one to counter to count the last edge
      globalMax = Math.max(globalMax, counter);
      return;
    }

    console.log(counter)
    counter = counter + 1;
    // recursive cases, internal workers
    node.children.forEach(child => {
      helper(child, counter); // BE CAREFUL ABOUT COUNTER++ here , it created a bug
    })
  }
}


function find_height_bottom_up(root) {
  if (!root || !root.children.length) { 
    return 0;
  }
  let maxHeight = 0;

  root.children.forEach(child => {
    let height = find_height_bottom_up(child);
    maxHeight = Math.max(maxHeight, height);
  })

  return maxHeight + 1;
}


// for leetcode version, which counts nodes, not edges

function maxDepth(root) {
  if (!root) { 
    return 0;
  }
  let maxHeight = 0;

  root.children.forEach(child => {
    let height = maxDepth(child);
    maxHeight = Math.max(maxHeight, height);
  })

  return maxHeight + 1;
}