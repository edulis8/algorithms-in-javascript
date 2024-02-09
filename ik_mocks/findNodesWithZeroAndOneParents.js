// Let’s say you are given a list that consists of (parent, child) pairs and each individual is assigned a unique number. In this list, A parent can have multiple children and a child can have at most 2 parents. Your task is to write a function that takes in this list and return two collections;
// One containing all individuals with zero parents and
// One containing all individuals with exactly one known parent 

// inpuy is array of two-value arrays.
// output is two arrays [[], []]


// 


// array.length >= 1 

// parentChildPairs = [
//     (1, 3), (2, 3), (3, 6), (5, 6),
//     (5, 7), (4, 5), (4, 8), (4, 9), (9, 11)
// ]

// Output may be in any order:
// findNodesWithZeroAndOneParents(parentChildPairs) => [
//   [1, 2, 4],       // Individuals with zero parents
//   [5, 7, 8, 9, 11] // Individuals with exactly one parent
// ]
// n: number of pairs in the input


// [parent, child]

// parentChildPairs = [
//     [1, 3], [2, 3], [3, 6], [5, 6],
//     [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
// ]

// 1 is a parent, but not a child, 4 is parent of multiple but not a child
// 5 is child of 4, 

//   [1, 2, 4],       // Individuals with zero parents
//   [5, 7, 8, 9, 11] // Individuals with exactly one parent

// series of pairwise relationships
// directed graph, eges are child -> parent 

// 
// parent -> children
/*
{
    1: [3],
    5: [4],
    4: [5,8,9]   
}

// children -> parents adjList
{
    3: [1,2]
    1: [], // no edges to any parents
    2: [],
    5: [4]
}

*/

// can we model this a graph?
// what is our approach to solving
parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
]

// 1 - 11
// 10

const result = solution(parentChildPairs);
console.log({result})

time: O(n)

1   2    4
\ /   / | \
3   5  8  9
\ / \     \
 6   7    11




// children -> parents
// { '1': [],
// '2': [],
// '3': [ 1, 2 ],
// '4': [],
// '5': [ 4 ],
// '6': [ 3, 5 ],
// '7': [ 5 ],
// '8': [ 4 ],
// '9': [ 4 ],
// '11': [ 9 ] }
// }

//
// edge cases: empty, invalid non-integer inputs

//space: O(n) // linear

function solution(input) {
 const adjList = createAdjList(input);
 const zeroParents = [];
 const oneParent = [];
 
 for (let key in adjList) {
     const parents = adjList[key];
     if (parents.length === 0) {
         zeroParents.push(Number(key))
     }
     if (parents.length === 1) {
        oneParent.push(Number(key))
     }
 }
 
 return [zeroParents, oneParent];
}
 
function createAdjList(array) {
 const adjList = {};
 
 
 
 for (const [parent, child] of array) {
     adjList[parent] = (adjList[parent] || []);
     adjList[child] = (adjList[child] || []);
     // one way child-> parents
     adjList[child].push(parent)
 }
 console.log(adjList);
 return adjList;
}
 
