// Convert Edge List To Adjacency Matrix
// Convert the given edge list to the adjacency matrix of an undirected connected graph.
// The adjacency matrix is a matrix with rows and columns labeled by graph vertices, with a 1 or 0 in position (u, v) according to whether vertices u and v are adjacent or not.

// Example
// {
// "n": 5,
// "edges": [
// [0, 1],
// [1, 4],
// [1, 2],
// [1, 3],
// [3, 4]
// ]
// }
// Output:

// [
// [0, 1, 0, 0, 0],
// [1, 0, 1, 1, 1],
// [0, 1, 0, 0, 0],
// [0, 1, 0, 0, 1],
// [0, 1, 0, 1, 0]
// ]
// Notes
// There are n nodes in the graph, and each node has a distinct value from 0 to n - 1.
// Edges are given as a list of pairs. Each pair [u, v] represents an undirected edge between node u and node v.
// The list won't contain duplicate edges. That is, if [u, v] is present, then there will be no other occurrence of [u, v] or [v, u].
// If there is an edge between node u and node v, the value at position (u, v) of the adjacency matrix is 1; otherwise, it is 0.
// Constraints:

// 1 <= n <= 103
// 0 <= number of edges <= (n * (n - 1)) / 2
// 0 <= value of each node <= n - 1
// The graph won't contain self loops.



/**
 * /*
Asymptotic complexity in terms of the number of vertices `n` and number of edges `e` in the graph:
* Time: O(e).
* Auxiliary space: O(1).
* Total space: O(n * n). <--- the matrix

 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_list_bool}
 */

function convert_edge_list_to_adjacency_matrix(n, edges) {
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  console.log('result before algo', result)
  for (const [start, end] of edges) {
    result[start][end] = 1
    result[end][start] = 1
  }

  return result;
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
let result = convert_edge_list_to_adjacency_matrix(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')
