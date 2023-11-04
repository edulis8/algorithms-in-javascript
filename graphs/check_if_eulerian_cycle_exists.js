
/**
 * 
 * Check If Eulerian Cycle Exists
Check if there exists any eulerian cycle in a given undirected 
connected graph. The Euler cycle is a path in the graph that visits every edge exactly once and starts and finishes at the same vertex.
 *
 * {
"n": 5,
"edges": [
[0, 1],
[0, 2],
[1, 3],
[3, 0],
[3, 2],
[4, 3],
[4, 0]
]
}
 * 
 * 
 * /*
Asymptotic complexity in terms of the number of vertices ( = `n`) and number of edges ( = `e`):
* Time: O(n + e).
* Auxiliary space: O(n).
* Total space: O(n + e).
*/
 * 
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {bool}
 */
function check_if_eulerian_cycle_exists(n, edges) {
  const degree = {};
  // keep track of degrees
  for (let i = 0; i < edges.length; i++) {
     // each edge increases the degree count on two vertices, because it touches two vertices
    degree[edges[i][0]] = degree[edges[i][0]] || 0
    degree[edges[i][0]]++;
    degree[edges[i][1]] = degree[edges[i][1]] || 0
    degree[edges[i][1]]++;
  }

  console.log(degree)
  
  // if every degree is even, it has a Eulerian Cycle
  return Object.values(degree).every(degree => degree % 2 === 0);
}


console.log('\n******************** OUTPUT ************\n');
let input = {
  "n": 5,
  "edges": [
    [0, 1],
    [0, 2],
    [1, 3],
    [3, 0],
    [3, 2],
    [4, 3],
    [4, 0]
  ]
}
let result = check_if_eulerian_cycle_exists(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')

// bool check_if_eulerian_cycle_exists(int n, vector<vector<int>> &edges) {

//   vector<int> degree(n);
//   for (int i = 0; i < edges.size(); i++) {
//       degree[edges[i][0]]++;
//       degree[edges[i][1]]++;
//   }

//   for (int i = 0; i < n; i++) {
//       if (degree[i] % 2 != 0) {
//           return false;
//       }
//   }

//   return true;
