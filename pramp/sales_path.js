
// FIND CHEAPEST SALES PATHG in an N-ARY TREE
// DFS
// LINEAR TIME
// NO EXTRA SPACE


function getCheapestCost(rootNode) {
  let globalMinPathSum = Infinity;
  helper(rootNode, rootNode.cost);
  
  return globalMinPathSum;
  
  function helper(node, pathSum) {
    // base case
    if (!node.children.length) {
      globalMinPathSum = Math.min(pathSum, globalMinPathSum);
      return;
    } else {
      // loop
      for (let i = 0; i < node.children.length; i++) {
        const childNode = node.children[i];
        helper(childNode, pathSum + childNode.cost)
      }
    }
    
  }
}



// 

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

// Creating nodes
const one = new Node(0);
const two = new Node(5);
const three = new Node(3);
const four = new Node(6);
const five = new Node(4);
const six = new Node(2);
const seven = new Node(0);

// Building the tree structure
one.children = [two, three, four];
two.children = [five];

// Calculate and print the cheapest cost
console.log(getCheapestCost(one));

 

//7 since it’s the minimal Sales Path cost 
// (there are actually two Sales Paths in the tree whose cost is 7: 0→6→1 and 0→3→2→1→1)





// n-ary tree
// DFS search
// keep a min tracker variable
// base case would have entire path sum
// only update min tracker if this path is less than current min