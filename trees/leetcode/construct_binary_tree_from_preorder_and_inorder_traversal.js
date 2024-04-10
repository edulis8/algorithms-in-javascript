// Copilot solution:
// Function to build a binary tree from its preorder and inorder traversals

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function buildTree(preorder, inorder) {
  // Create a map of the inorder traversal for quick access to the root index
  const inorderMap = inorder.reduce((acc, curr, i) => {
    acc[curr] = i; // Map each value to its index
    return acc;
  }, {});

  // Call the helper function with the initial indices for the preorder and inorder arrays
  return helper(0, preorder.length - 1, 0, inorder.length - 1);

  // Helper function to construct the binary tree
  function helper(startPre, endPre, startIn, endIn) {
    // Base case: if the start index is greater than the end index, return null
    if (startPre > endPre || startIn > endIn) {
      return null;
    }

    // Create a new node for the current root (the first element in the current preorder array)
    const node = new TreeNode(preorder[startPre]);
    // Find the index of the root in the inorder array
    const rootIndex = inorderMap[node.val];

    // Construct the left subtree by recursively calling the helper function with the appropriate indices:
    // - The start index for the preorder array is incremented by 1 because the next element in the preorder array is the root of the left subtree
    // - The end index for the preorder array is the start index plus the size of the left subtree (which is the root index in the inorder array minus the start index of the inorder array)
    // - The start index for the inorder array remains the same
    // - The end index for the inorder array is the root index minus 1 because the elements before the root in the inorder array form the left subtree
    const numLeft = rootIndex - startIn; // the difference between the root index in the inorder array and the start index of the inorder array.
    node.left = helper(startPre + 1, startPre + numLeft, startIn, rootIndex - 1);
    // LEFT: increment startPre by 1, endPre is startPre incremented by numLeft, startIn is same, endIn is rootIndex-1

    // Construct the right subtree by recursively calling the helper function with the appropriate indices:
    // - The start index for the preorder array is the end index of the left subtree plus 1 (which is the start index plus the size of the left subtree plus 1)
    // - The end index for the preorder array remains the same
    // - The start index for the inorder array is the root index plus 1 because the elements after the root in the inorder array form the right subtree
    // - The end index for the inorder array remains the same
    node.right = helper(startPre + numLeft + 1, endPre, rootIndex + 1, endIn);
    // RIGHT: add numLeft+1 to startPre, leave endPre same, startIn becomes rootIndex+1, endIn same

    // Return the constructed binary tree
    return node;
  }
}

// Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
// Output: [3, 9, 20, null, null, 15, 7]

// Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
// Output: [3, 9, 20, null, null, 15, 7]

// Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
// Output: [3, 9, 20, null, null, 15, 7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
ERIC ATTEMPT 3/27/24 With Justin Hong
NOT A BST
tree construction of a BT, not a BST

 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // inorder -
  // pre order[0] is root.  

  // find 3 in inorder
  // divide into two halfs
  // left [9]
  // right half [20,15,7]

  // right_half_preorder[0] is root of right subtree
  // inorder_right_subtree: [15,20,7]
  //
  const inorderMap = inorder.reduce((acc, curr, i) => {
      acc[curr] = i;
      return acc;
  }, {})

  return helper(0, preorder.length, 0, inorder.length); // TreeNode (root)

  function helper(startPre, endPre, startIn, endIn) {
      if (startPre > endPre) {
          return null;
      }
      if (startPre === endPre) {
          return new TreeNode(preorder[startPre]);
      }

      const node = new TreeNode(preorder[startPre]); // 3
      const rootIndex = inorderMap[node.val]; // "mid" = 1

      const numLeft = rootIndex - startIn; // 1 value, [9];
      const numRight = endIn - rootIndex; // 4 - 1 = 3  [15,20,7]

      // left side [9]
      node.left = helper(startPre + 1, startPre + numLeft, startIn, rootIndex - 1)

      // right side []
      node.right = helper(startPre + numLeft, endPre, rootIndex + 1, endIn);

      return node;
  }

  
  
};

// Input: preorder = [3, - 9,20,15,7], inorder = [9, 3,- 15,20,7]
// Output: [3,9,20,null,null,15,7]