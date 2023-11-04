/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // dfs solution
  // 
  // traverse the tree, find p or q, 
  if (!root) return null;
  let result = null; // find lowest common ancestor
  dfs(root); // tell us if left and right have ancestor, or node itself is p or q
  return result;

  function dfs(node) {
    // have dfs tell us if left side contains p or q
    if (!node) return false;
    let leftHas = dfs(node.left);
    let rightHas = dfs(node.right);

    let currIsOne = node.val === p.val || node.val === q.val;

    // 3 booleans
    // 2 must be true for our answer
    if (leftHas + rightHas + currIsOne >= 2) result = node;

    // return true if any of these are true
    return leftHas || rightHas || currIsOne;
  }
    
};