/**
 * https://leetcode.com/problems/accounts-merge/description/
 * Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.



Approach:
This is a undirected graph, unconnected.
Note: vertices are not "people", but accounts
1) make map of emails to nodes (nodes are represented as indices in the accounts input array). Exclude duplicates.
2) make an adjacency map connecting pairs of emails by iterating thru all the nodes in the map, creating an edge between nodes with shared emails. Exclude dups.
3) DFS on all components
4) after DFSing on a component, we have a set of all the emails in that component, 
5) we just need to sort it, and prepend the name, and push that to our result array


 * 
 * 
 * 
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  // hmap
  // email address -> all nodes it is in
  // "johnsmith@mail.com": [0, 1, 5], // connect 0 to 1, and 1 to 5

  // iterate thru arrays and connect pairs both ways
  // {
  //  "johnsmith@mail.com": [0, 1], // connect 0 to 1
  //   "john_newyork@mail.com": [0],
  //   "john00@mail.com": [1],
  //    "mary@mail.com": [2],
  //    "johnnybravo@mail.com": [3]
  // }

  // Create hashmap, email address -> all nodes it is in
  const emailToNodesMap = {};
  accounts.forEach((account, nodeIndex) => {
    account.forEach((email, emailIndex) => {
      if (emailIndex !== 0) {
        emailToNodesMap[email] = emailToNodesMap[email] ?? [];

        if (!emailToNodesMap[email].includes(nodeIndex)) {
          emailToNodesMap[email].push(nodeIndex);
        }
      }
    });
  });

  // console.log({ emailToNodesMap });
  // Create adjMap
  // adjMap
  // {
  //     0: [1], // x
  //     1: [0], // x
  //     2: [],
  //     3: []
  // }
  // iterate thru emailToNodesMap arrays and connect pairs both ways
  const adjMap = {};
  Object.keys(emailToNodesMap).forEach((email) => {
    const edgesForEmail = emailToNodesMap[email];
    edgesForEmail.forEach((edge, i) => {
      const nextEdge = edgesForEmail[i + 1];
      adjMap[edge] = adjMap[edge] ?? [];
      if (nextEdge) {
        adjMap[nextEdge] = adjMap[nextEdge] ?? [];
        if (!adjMap[edge].includes(nextEdge)) {
          adjMap[edge].push(nextEdge);
        }
        if (!adjMap[nextEdge].includes(edge)) {
          adjMap[nextEdge].push(edge);
        }
      }
    });
  });

  // console.log({ adjMap })
  // last stage: find connected components
  const result = [];
  const visited = new Set();
  let emailSet = new Set();

  for (const v of Object.keys(adjMap)) {
    // REMEMBER TO NOT DFS ON VISITED NODES
    console.log({ visited });
    const n = Number(v);
    if (!visited.has(n)) {
      // each iteration here, this is one connected component
      dfs(n);
      if (emailSet.size > 0) {
        const emailsSorted = [...emailSet].sort();
        const name = accounts[n][0];
        result.push([name, ...emailsSorted]);
      }
      emailSet = new Set();
    }
  }

  function dfs(node) {
    visited.add(node);

    // every email for this node goes in set
    const emails = accounts[node];
    emails.forEach((email, i) => {
      if (i !== 0) {
        // don't add the name in here
        emailSet.add(email);
      }
    });

    for (const neighbor of adjMap[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }
  return result;
};

// last stage: find connected components

// hmap
// email address -> all nodes it is in
// "johnsmith@mail.com": [0, 1, 5], // connect 0 to 1, and 1 to 5

// iterate thru arrays and connect pairs both ways
// {
//  "johnsmith@mail.com": [0, 1], // connect 0 to 1
//   "john_newyork@mail.com": [0],
//   "john00@mail.com": [1],
//    "mary@mail.com": [2],
//    "johnnybravo@mail.com": [3]
// }

// use a Set, created during traversal, sort, put in output
// Set(emails per connected component)

// adjList
// {
//     0: [1], // x
//     1: [0], // x
//     2: [],
//     3: []
// }

// separete verticies from people
// every line is a vertex
// if two nodes have same email, put an edge

// Input: accounts = [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];

// Output: [
//   ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], // a Set of size 3
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];

// [[0,1],[],[1],[2],[3]]
//.   0.   1. 2.  3.  4
