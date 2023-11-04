// Construct A Binary Search Tree From Its Preorder Traversal
// Construct a Binary Search Tree whose preorder traversal matches the given list.



function build_binary_search_tree(preorder) {
    const inorder = [...preorder].sort((a,b) => a-b);
    
    // map that stores value -> index from inorder array
    const map = inorder.reduce((map, item, index) => {
      map[item] = index;
      return map
  }, {}) 
    // preorder first value is root
    // inorder mid value is also root
    // inorder to left  of this midpoint is left subtree, to the right is right subtree
    

    //     numLeft         numRight
    // x [left subtree] [right subtree]
    // [left subtree] x [right subtree]
    // diagram this out ^^

    // x or rootnode [startP + 1 to startP + numLeft] [startP + numLeft + 1, endP]
    // [startI, rootIndex - 1] rootindex or x [rootIndex + 1, endI]

    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);


    // {
    //   "preorder": [1, 0, 2]
    //   }

    function helper(preorder, startP, endP, inorder, startI, endI) {
      // base case
      if (startP > endP) return null; // size is 0
      if (startP === endP) { // problem set of one
        return new BinaryTreeNode(preorder[startP]);
      }
      // else
      // turn first node into a treenode
      let rootnode = new BinaryTreeNode(preorder[startP])

      let rootIndex = map[preorder[startP]]; // this is "x"

     // figure out which is left subtree and which is right. map built above out of inorder to lookup rootindex which is the middle value in the inorder array

      // feed left subtree to one helper, right to the other

      let numLeft = rootIndex - startI;
      // let numRight = endI - rootIndex;
      // left
      rootnode.left = helper(preorder, startP + 1, startP + numLeft, inorder, startI, rootIndex - 1)
      // right
      rootnode.right = helper(preorder, startP + numLeft + 1, endP, inorder, rootIndex + 1, endI)
      
      return rootnode;
    }
}


const BinaryTreeNode = class {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
};


console.log('\n******************** OUTPUT ************\n');
// MAKE SURE TO UPDATE THIS:
const input ={"preorder": [1, 0, 2]}
let result = build_binary_search_tree(input.preorder);
console.log('result:', result)

console.error('\n******************** ************\n')
