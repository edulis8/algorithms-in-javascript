// Given a strongly connected directed graph, return its transpose. The graph will be given as a reference to one of its nodes; the rest of the graph can be discovered by walking its edges.

// Example
// Input: a node of a graph like this:

// Input

// Output: a node of a graph like this:

// Output

// Notes
// Constraints:

// 1 <= number of nodes <= 315
// Node values are unique integers, and 1 <= node value <= number of nodes
// No multiple edges (connecting any pair of nodes in one direction) or self loops (edges connecting a node with itself) in the input graph
// Description of the text format of the test cases

// You might need this for debugging your solution on IK UpLevel platform.

// Input and output file each contain a list or directed edges representing a directed graph.

// The input example

// Example

// is represented by

// {
// "edges": [
// [1, 2],
// [2, 3],
// [3, 1]
// ]
// }
// and the output

// Output

// is represented by

// [
// [2, 1],
// [3, 2],
// [1, 3]
// ]


/*



DFS 
Space: 
Linear O(eges + vertices)

Time:
Linear 
0(eges + vertices)


We create a structure that takes up memory for each vertex and edge, then we touch each one and do a constant amount of work on it.



For your reference:
const GraphNode = class {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
};
*/
/**
 * @param {GraphNode_int32} node
 * @return {GraphNode_int32}
 */
function create_transpose(node) {
  const reversedGraph = {};
  dfs(node);
  return reversedGraph[node.value];
  
  function dfs(node) {
      const tempNode = new GraphNode(node.value); // clone node
      reversedGraph[tempNode.value] = tempNode; // put cloned not into hashtable keyed on value
      
      for (let neighbor of node.neighbors) {
          if (!reversedGraph[neighbor.value]) { // if not alredy visited
              // clone neighbor
              // put in hashmap keyed on value
              // that is, call DFS on it
              dfs(neighbor);
          }
          // reverse arrows/neighbors
          reversedGraph[neighbor.value].neighbors.push(tempNode);
      }
  }
}













const GraphNode = class {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
};

/**
 * @param {GraphNode_int32} node
 * @return {GraphNode_int32}
 */
function orig_atttempt_create_transpose(node) {

  // traverse through the graph
  // 1 -> neighbor is 2
  // iterate through the neighbors, in this case it is just 2
  // push 1 (prev/parent) into 2's neighbors array
  // remove 2 from 1 (prev/parent)'s neighbors array

  // let neighbors = node.neighbors;

  // let prev = node;
  let currNode = new GraphNode(null)
  let queue = [node];

  while (queue.length && currNode.value != node.value) {
    currNode = queue.shift(); // 1

    let neighbors = currNode.neighbors;
    for (let neighbor of neighbors) {
      neighbor.neighbors.push(currNode.value)
      console.log('pushing this', currNode.value, 'into neighbors array for ', neighbor.value)
      let index = currNode.neighbors.indexOf(neighbor.value);
      currNode.neighbors.splice(index, 1)
      console.log('new currNode neighbors array', currNode.neighbors.toString())
      queue.push(neighbor);
    }
    console.log('queue', queue.map((node) => node.value))
  }

  return node;
}