// Check If Eulerian Path Exists
// Given an undirected connected graph, check if there exists any eulerian path in it. 
// The Eulerian Path is a path in the graph that visits every edge exactly once (allowing for revisiting vertices).


/*
Asymptotic complexity in terms of the number of vertices ( = `n`) and number of edges ( = `e`):
* Time: O(n + e).
* Auxiliary space: O(n).
* Total space: O(n + e).
*/


/**
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {bool}
 */
function check_if_eulerian_path_exists(n, edges) {
  // loop, mod, count odds
  // if no odds or 2 odds return true
  // else return false

  let odds = 0;
  const degrees = {};
  edges.forEach(edge => {
    degrees[edge[0]] = degrees[edge[0]] || 0;
    degrees[edge[0]]++;
    degrees[edge[1]] = degrees[edge[1]] || 0;
    degrees[edge[1]]++;
  });

  console.log(degrees);

  Object.values(degrees).forEach(degree => {
    if (degree % 2 !== 0) {
      odds++;
    }
  })

  // if every degree is even, it has a Eulerian Cycle, which contains a Eulerian Path
  // if there are two odd degrees, it has a Eulrerian Path (start and end nodes have an extra edge)
  return odds === 0 || odds === 2
}

console.log('\n******************** OUTPUT ************\n');
let input = {
  "n": 4,
  "edges": [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 0],
    [3, 2]
  ]
}
let result = check_if_eulerian_path_exists(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')
