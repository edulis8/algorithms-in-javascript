// BFS Traversal Of A Graph
// Given an undirected graph, perform a Breadth-First Search Traversal on it.


// {
// "n": 6,
// "edges": [
// [0, 1],
// [0, 2],
// [0, 4],
// [2, 3]
// ]
// }
// Output:

// [0, 1, 2, 4, 3, 5]
// Below are some other following valid outputs if the BFS traversal starts from the vertex 0:

// [0, 1, 4, 2, 3, 5]
// [0, 2, 1, 4, 3, 5]
// [0, 2, 4, 1, 3, 5]
// [0, 4, 1, 2, 3, 5]
// [0, 4, 2, 1, 3, 5]
// BFS starting from another node will also be considered valid.

// Notes
// There are n nodes in the graph and each node has a distinct value from 0 to n-1.
// Edges are represented in the form of a two-dimensional list where each inner list consists of two values [u, v]. This represents an undirected edge from node u to node v.
// The list won't contain duplicate edges. That is, if [u, v] is present, then there will be no other occurrence of [u, v] or [v, u].
// If multiple BFS traversals exist, you may return any.
// Constraints:

// 1 <= n <= 104
// 0 <= number of edges <= 104
// 0 <= value of each vertex <= n - 1
// No self loop is present.
/**
 * 


/*
Asymptotic complexity in terms of the number of vertices `v` and number of edges `e` in the graph:
* Time: O(v + e).
* Auxiliary space: O(v + e).
* Total space: O(v + e).
*/

// MY NOTES: WE'RE NOT BUILDING A TREE HERE
// SO THERE'S NOT A CAPTURED ARRAY OR A PARENT ARRAY
/*
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_int32}
 */
function bfs_traversal(n, edges) {
    let result = [];
    let adjList = new Array(n).fill(0).map(() => [])

    for (let [start, end] of edges) {
        adjList[start].push(end);
        adjList[end].push(start);
    }

    let visited = new Array(n).fill(false);
    // outer loop used to hit unconnected parts of the graph
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i);
        }
    }
    return result;

    function bfs(node) {
        let queue = [];
        queue.push(node);
        visited[node] = true;
        while (queue.length) {
            let current = queue.shift();
            /// processing step
            result.push(current); // processing step
            //
            let neighbors = adjList[current];
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }
}

console.log('\n******************** OUTPUT ************\n');
let input = {
    "n": 6,
    "edges": [
        [0, 1],
        [0, 2],
        [0, 4],
        [2, 3]
    ]
}
let result = bfs_traversal(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')
