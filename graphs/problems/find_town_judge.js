/*
Find The Town Judge
Find the judge among a group of people in a town.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
Example One
{
"n": 4,
"trust": [
[1, 4],
[2, 4],
[3, 4]
]
}
Output:

4
Person-1 trusts person-4.
Person-2 trusts person-4.
Person-3 trusts person-4.
Everyone trusts the person-4 and the person-4 trusts no one.

Example Two
{
"n": 3,
"trust": [
[1, 2],
[2, 3],
[3, 1],
[3, 2]
]
}
Output:

-1
Notes
There are n persons in the town, and each person is represented by a unique number from 1 to n.
Trust among the people is represented in a two-dimensional list where each inner list consists of two values [u, v]. 
This represents that the person numbered u trusts the person numbered v.
If the town judge doesn't exist, return -1.
Constraints:

1 <= n <= 104
0 <= size of the input list <= 105
1 <= value of each element of the input list <= n
The input list won't contain duplicate pairs.
The values in individual pairs won't be equal.
*/




/**
 * @param {int32} n
 * @param {list_list_int32} trust
 * @return {int32}
 */
function find_town_judge(n, trust) {
  // adjList
  // [
  //     null,
  //     [4],//1
  //     [4],//2
  //     [4]//3
  //     [] //4 -- 

  // ]

  // other idea
  // create hashmap of potential judges
  // dfs traverse the graph, 
  //count trust for judges, 
  // if a node 
  //return judge whose trust count is n-1

  const adjList = buildAdjListDirected(n, trust);
  const visited = new Array(n + 1).fill(false);
  const potentialJudgeMap = {};
  adjList.forEach((nodeList, nodeName) => {
    if (nodeList && !nodeList.length) {
      potentialJudgeMap[nodeName] = 0;
    }
  })

  console.log('potentialJudgeMap', potentialJudgeMap)
  for (let v = 1; v <= n; v++) {
    // removed: !visited[v] && 
    if (!visited[v] && !potentialJudgeMap[v]) {
      dfs(v);
    }
  }

  // go thru potentialJudgeMap, find value that is n-1, if not return -1

  console.log('visited', visited)
  console.log('map', potentialJudgeMap)
  const judge = Object.keys(potentialJudgeMap).find((key) => potentialJudgeMap[key] === n - 1)
  return judge ? Number(judge) : -1;


  function dfs(node) {
    console.log('node', node)
    visited[node] = true;

    for (let i = 0; i < adjList[node].length; i++) {
      let neighbor = adjList[node][i];
      // count a potential judge here. It is okay if it has been visited!
      if (potentialJudgeMap[neighbor] || potentialJudgeMap[neighbor] == 0) {
        potentialJudgeMap[neighbor]++;
      }

      // only recurse if not visited, so we avoid stack overflow!
      if (!visited[neighbor]) {
        dfs(neighbor);
      }

    }
  }

  function buildAdjListDirected(n, trust) {
    const adjList = new Array(n + 1).fill(0).map(() => []);

    for (const [start, end] of trust) {
      adjList[start].push(end);
    }
    adjList[0] = null; // skip 0, we're working with 1...n
    console.log(adjList)
    return adjList;
  }
}


console.log('\n******************** OUTPUT ************\n');

const input =
// {
//   "n": 3,
//   "trust": [
//     [1, 2],
//     [2, 3],
//     [3, 1],
//     [3, 2]
//   ]
// }


{
  "n": 4,
  "trust": [
    [1, 4],
    [2, 4],
    [3, 4]
  ]
}

let result = find_town_judge_iterative(input.n, input.trust);
console.log('result:', result)
console.log('\n******************** ************\n')




/*

SIMPLE ITERATIVE SOLUTION:


Asymptotic complexity in terms of number of people (= `n`) and size of the `trust` list (= `e`):
* Time: O(e).
* Auxiliary space: O(n).
* Total space: O(n + e).
*/

function find_town_judge_iterative( n, trust) {
  if (trust.length < n - 1) { // everybody (except judge) trusts the judge
      return -1;
  }

  if (n == 1) return 1;

  const trustScores = {};

  trust.forEach(edge => {
    /// if you are truster --
    trustScores[edge[0]] = trustScores[edge[0]] || 0;
    trustScores[edge[0]]-- // trusting somebody else, you can't be the judge
    trustScores[edge[1]] = trustScores[edge[1]] || 0;
    // if you are person trusted ++
    trustScores[edge[1]]++; // being trusted boosts you up, 
  })
      

  const judge = Object.keys(trustScores).find((key) => trustScores[key] === n - 1); // you're the judge if everyone else trust you, n-1 ppl
  return judge ? Number(judge) : -1;
}
