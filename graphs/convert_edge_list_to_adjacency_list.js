// Convert Edge List To Adjacency List
// Convert the given edge list to the adjacency list of an undirected connected graph.
// An adjacency list represents a graph as a list of lists. 
// The list index represents a vertex, and each element in its inner list represents the other vertices that form an edge with the vertex.


// There are n nodes in the graph, and each node has a distinct value from 0 to n - 1.
// Edges are given as a list of pairs. Each pair [u, v] represents an undirected edge between node u and node v.
// The list won't contain duplicate edges. That is, if [u, v] is present, then there will be no other occurrence of [u, v] or [v, u].
// ****Every inner list of the output list should hold the nodes in ascending order.***
/**
 * 
 * 
 * 
 * /*
Asymptotic complexity in terms of the number of vertices `n` and number of edges `e` in the graph:
* Time: O(n * log(e)).
* Auxiliary space: O(1).
* Total space: O(n + e).
*/



 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_list_int32}
 */
// function convert_edge_list_to_adjacency_list(n, edges) {
//   // iterate over edges
//   // index is the node, or position in result array.
//   // put second vertex of edge into the list for the first vertex of edge
//   // put the first vertex of edge into list for second vertex of edge

//   const result = [];

//   edges.forEach(edge => {
//     result[edge[0]] = result[edge[0]] || [];
//     result[edge[0]].push(edge[1]);

//     result[edge[1]] = result[edge[1]] || [];
//     result[edge[1]].push(edge[0]);
//   })

//   return result;
// }


function convert_edge_list_to_adjacency_list(n, edges) {
  const output = new Array(n).fill(0).map(() => [])

  for (const [start, end] of edges) {
    output[start].push(end)
    output[end].push(start)
  }

  for (const list of output) {
    list.sort((a, b) => a - b)
  }

  return output
}


console.log('\n******************** OUTPUT ************\n');
let input = {
  "n": 5,
  "edges": [
    [0, 1],
    [1, 4],
    [1, 2],
    [1, 3],
    [3, 4]
  ]
}
let result = convert_edge_list_to_adjacency_list(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')
