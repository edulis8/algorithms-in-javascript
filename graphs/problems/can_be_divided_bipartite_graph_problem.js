/**
 * 
 * 
 * Friendly Groups
There are n people living in a town. Some of them dislike each other. 
Given the value of n and two equal length integer arrays called dislike1 and dislike2. For each i in [0, dislike1_size - 1], the person dislike1[i] 
dislikes the person dislike2[i]. Check if we can divide the people of the town into two sets such that each person belongs to 
exactly one set and no two persons disliking each other belong to the same set.

Example One
{
"num_of_people": 5,
"dislike1": [0, 1, 1, 2, 3],
"dislike2": [2, 2, 4, 3, 4]
}
Output:

1
The people can be partitioned into two sets [0, 1, 3] and [2, 4].

Example Two
{
"num_of_people": 4,
"dislike1": [0, 0, 0, 1, 2],
"dislike2": [1, 2, 3, 2, 3]
}
Output:

0
Notes
People are numbered from 0 to n - 1.

Constraints:

1 <= n <= 2*103
0 <= number of disliking pairs <= min((n * (n - 1))/2, 104)



DIVIDE INTO TWO GROUPS
WITHIN A GROUP, NO EDGES CAN CONNECT TO EACH OTHER - THAT WOULD BE AN EDGE BETWEEN TWO PEOPLE WHO DISLIKE EACHOTHER
CYCLE OF ODD LENGTH -> NOT BIPARTITE (NO SOLUTION)
CYCLE OF EVEN LENGTH -> BIPARTITE (YES SOLUTION)

TREE GRAPHS ARE BIPARTITE BECAUSE EACH LEVEL OR "GROUP" IS SEPARATE BY A TREE EDGES. THINK OF A AND B GROUPS
SO IF WE BUILD A TREE AND IT HAS NO CROSS EDGES (BFS) OR BACK EDGES (DFS) THEN IT IS BIPARTITE

DFS
level numbers don't mean anything like in BFS
binary labels matter - two different colors, for example. two teams.


 * @param {int32} num_of_people
 * @param {list_int32} dislike1
 * @param {list_int32} dislike2
 * @return {bool}
 */
function can_be_divided(num_of_people, dislike1, dislike2) {
  // DFS solution. There is a BFS solution outlined below
  const adjList = buildAdjList();
  console.log('adjlist', adjList)
  const visited = new Array(num_of_people).fill(false);
  const parentAndColorOfNode = new Array(num_of_people).fill(false);

  for (let node = 0; node < num_of_people; node++) {
    if (!visited[node]) {
      // store myTeam inside the parent array as an object
      // each layer of recursion will have a different myTeam, myTeam true or myTeam false
      parentAndColorOfNode[node] = { parent: null, myTeam: true };
      if (dfs(node) === false) return false
    }
  }
  return true;

  function dfs(node) {
    visited[node] = true;
    for (const neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        // create a tree edge, continue recursion
        // set color of neighbor to be opposite of node we're processing
        parentAndColorOfNode[neighbor] = { parent: node, myTeam: !parentAndColorOfNode[node].myTeam };
        if (dfs(neighbor) === false) return false; // violation found by a subordinate
      } else {
        // only looking at non-parents, check neighbors for same team connection
        // that's a dislike-dislike connection, a violation, return false
        if (neighbor !== parentAndColorOfNode[node].parent 
          && parentAndColorOfNode[neighbor].myTeam === parentAndColorOfNode[node].myTeam) {
          console.log('there is an edge between', node, 'and its non-parent neighbor', neighbor, 'creating a dislike relationship within teams (creating a cycle in the tree of odd lengh)')
          return false; // violation found by me, not bipartite
        }
      }
    }
    return true;
  }

  function buildAdjList() {
    const adjList = new Array(num_of_people).fill(0).map(() => []);
    for (let i = 0; i < dislike1.length; i++) {
      let start = dislike1[i];
      let end = dislike2[i]
      adjList[start].push(end);
      adjList[end].push(start);
    }
    return adjList
  }
}

console.log('\n******************** OUTPUT ************\n');
let input = {
    "num_of_people": 4,
    "dislike1": [0, 0, 0, 1, 2],
    "dislike2": [1, 2, 3, 2, 3]
    }
let result = can_be_divided(input.num_of_people, input.dislike1, input.dislike2);
console.log('result:', result)
console.log('\n******************** ************\n')



// BFS PSUEDO CODE


function bfs(source) {
  distance[source] = 0; // keep a distance array
  // where parent array is set in loop
  parent[neighbor] = node;
  distance[neighbor] = 1 + distance[node];
  // where returning
  if (distance[neighbor] == distance[node]) {
    return false; // not bipartite, a connection between this node and its neighbor 
  }

  // at end of bfs
  return true
}