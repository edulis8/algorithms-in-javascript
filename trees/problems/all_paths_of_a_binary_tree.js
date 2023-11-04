
// Print All Paths Of A Tree
// Given a binary tree, return all paths from root to leaf.

// 

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
 * @return {list_list_int32}
 */
function all_paths_of_a_binary_tree(root) {
  // dfs
  // when you reach a leaf, push slate to global result
  // slate will get a value, then have it removed
  if (!root) return [];
  const result = [];
  helper(root, [])
  return result;

  function helper(node, slate) {
    // important that this is NOT if (!node) because that will run two times for each leaf node (leaf nodes have "two null children"). 
    //So you end up with duplicates.
    if (!node.left && !node.right) { 
      result.push([...slate, node.value])
      return;
    }

    slate.push(node.value);
    if (node.left) { // 
      helper(node.left, slate);

    }
    if (node.right) {
      helper(node.right, slate);

    }
    slate.pop()
  }
}



// NOTE 
// THIS TEMPLATE
// BASE CASE RUNS TWICE FOR EACH LEAF NODE, BUT DOES NOTHING
// IF THERE'S ACTUALL PROCESSING / COPYING / PUSHING THAT NEEDS TO BE DONE
// DON'T WRITE IT LIKE THIS
// WRITE IT LIKE THE ABOVE
// TO ENSURE COPYING ONLY HAPPENS ONCE
// function preorder(root) {
//   // base case
//   const result = [];
//   helper(root);
//   return result;

//   function helper(node) {
//     if (node === null) return;
//     result.push(node.value);
//     helper(node.left)
//     helper(node.right)
//   }
// }