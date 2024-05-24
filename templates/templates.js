
/*
3Es
* Excitement 
* Enthusiasm + Curiosity
* Expertise + Prep
3Cs
* Calm
* Centered
* Confident

® Understanding problem statement (make sure to look at the constraints as well) - 2-5 mins 
® Nailing down the approach — 5 to 10 mins 
® Clean Implementation — 10 to 15 mins 
® Walk through of the test case — 3 to 5 mins 
® Time and space complexity discussion + follow up questions if any : -~ 2mins 

brute force
implement: skeleton the solution with name functions and vars, params


*/
// BINARY SEARCH RECURSIVE TEMPLATE
function binarySearch(arr, target) {
  return helper(arr, target, 0, arr.length - 1);
}

function helper(arr, target, start, end) {
  if (start > end) {
    return -1; // Element not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Element found at index `mid`
  } else if (arr[mid] < target) {
    return helper(arr, target, mid + 1, end); // Search the right half. IMPORTANT add 1 to mid.
  } else {
    return helper(arr, target, start, mid - 1); // Search the left half. IMPORTANT subtract 1 from mid.
  }
}

// GRAPH DFS ADJLIST TEMPLATE ("TOWN JUDGE")
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

// GRAPH DFS MATRIX TEMPLATE
function islands(grid) {
  let islands = 0;

  // this makes sure you hit all unconnected pieces of the graph
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] !== 'V' && grid[row][col] == "1") { // if a non-visited "1"
        islands++;
        dfs(row, col);
      }
    }
  }

  return islands;

  function dfs(x, y) {
    grid[x][y] = "V";
    for (let [row, col] of getNeighborsWithMap(grid, x, y)) {
      if (grid[row][col] !== 'V' && grid[row][col] == "1") {
        dfs(row, col)
      }
    }
  }

  function getNeighbors(grid, row, col) {
    const result = []
    if (row + 1 < grid.length) result.push([row + 1, col]);
    if (row - 1 >= 0) result.push([row - 1, col]);
    if (col + 1 < grid[0].length) result.push([row, col + 1]);
    if (col - 1 >= 0) result.push([row, col - 1]);
    return result;
  }
}

// GENERATE ALL SUBSETS TEMPLATE - combinatorial recursion
function generate_all_subsets(s) {
  const result = [];
  subsetHelper(s, 0, '');
  return result;

  // helper will take a slate (partial solution) and the remaining subproblem
  function subsetHelper(problem, i, slate) {
    if (problem.length === i) {
      result.push(slate)
      return;
    }

    // hand slate and subproblem to two subordinates
    // include first element in subproblem
    subsetHelper(problem, i + 1, `${slate}${problem[i]}`);
    // exclude first element in subproblem
    subsetHelper(problem, i + 1, slate);
  }
}

// TREE BFS TEMPLATE
function right_view(root) {
  if (!root) return [];
  const result = [];
  const q = [root];

  while (q.length) {
    // snapshot of q
    // pop off nodes
    // put their children in the q
    // 
    let length = q.length;

    let rightMost;
    // this is a layer
    while (length--) {
      let node = q.shift()
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
      // so let's day these nodes just got processed
      //[node1,node2] layer one - last processed is rightmost
      // [node2,node3,node4,node5] layer two - last processed is rightmost
      rightMost = node.value
    }
    result.push(rightMost)
  }
  return result;
}

// TREE DFS TEMPLATE
function path_sum(root, k) {
  if (!root) return false;

  let result = false;

  dfs(root, k);
  return result;


  function dfs(node, target) {
    if ((!node.left && !node.right) || result) { // short circuiting!
      // leaf level processing. Base case
      // If the remaining target value equals this leaf node's value, then the sum of the path from the root to this node equals the original target sum k.
      // IF TARGET === this leaf nodes value, then target - node.value == 0.
      if (target - node.value === 0) {
        result = true;
      }
      return;
    }
    if (node.left) {
      dfs(node.left, target - node.value);
    }
    if (node.right) {
      dfs(node.right, target - node.value);
    }
  }
}



// N-ARY TREE DFS TEMPLATE
function find_height(root) {
  if (!root) return 0; // may not need
  let globalMax = 0;
  helper(root, 0);
  return globalMax;

  function helper(node, counter) {π
    // base case, leaf worker
    // check if no children
    // 
    if (!node.children || !node.children.length) {
      // add one to counter to count the last edge
      globalMax = Math.max(globalMax, counter);
      return;
    }

    console.log(counter)
    counter = counter + 1;
    // recursive cases, internal workers
    node.children.forEach(child => {
      helper(child, counter); // BE CAREFUL ABOUT COUNTER++ here , it created a bug
    })
  }
}


// DP / MEMOIZATION / COUNTING COMBINATIONS TEMPLATE
var coinChange = function (coins, amount) {

  // you don't want to redo work.
  // Key.         Value
  // arguments => result for those arguments.

  // How to add a cache without bothering to know anything about the code:
  // 1. Create the cache, outside the function.
  // 2. Check the cache before doing any work (within the function).
  // 3. Before returning, save the result in the cache.


  // 1. No amount means no coins.
  // 2. Consider each coin that we could give.
  // 3. Avoid coins that are too big or coins that lead to impossible situations.
  // 4. Keep the smallest number of coins.
  // 5. Add a cache.

  const memo = new Map();
  return helper(amount);

  function helper(amount) {
      if (amount === 0) {
          return 0;
      }
      if (memo.has(amount)) {
          return memo.get(amount)
      }

      let best = Infinity;
      for (let i = 0; i < coins.length; i++) {
          const coin = coins[i];

          if (coin > amount) continue;

          const coinsUsedGettingToEnd = helper(amount - coin);
          if (coinsUsedGettingToEnd < 0) {
              continue;
          }
          best = Math.min(best, coinsUsedGettingToEnd + 1) // plus the coin we just used
      }
      memo.set(amount, best);
      return best === Infinity ? -1 : best;
  }
};


// PERMUATIONS TEMPLATE (combinatorial recursion)
function letter_case_permutations(s) {
  const result = [];
  const helper = (slate, subproblemString) => {
    // base case
    if (subproblemString.length === 0) {
      result.push(slate);
      return;
    }
    // make choice
    // hand off partial solution and rest of string
    // if current element is a number, no choice ot make
    if (!isNaN(Number(subproblemString[0]))) {
      helper(slate + subproblemString[0], subproblemString.slice(1))
    } else {
      helper(slate + subproblemString[0].toLowerCase(), subproblemString.slice(1))
      helper(slate + subproblemString[0].toUpperCase(), subproblemString.slice(1))
    }
  }

  helper('', s);
  return result;
}

// TREE DFS BOTTOM UP AND GLOBAL VARIABLE TEMPLATE
function countUnivalSubtrees(root) {
  // Initialize the count of univalue subtrees
  let count = 0;

  // Call the helper function on the root of the tree
  dfs(root);

  // Return the count of univalue subtrees
  return count;

  // Helper function to check if a subtree is a univalue subtree
  function dfs(node) {
      // If the node is null, it's a univalue subtree
      if (node === null) return true;

      // Check if the left and right subtrees are univalue subtrees
      let left = dfs(node.left);
      let right = dfs(node.right);

      // If both the left and right subtrees are univalue subtrees
      if (left && right) {
          // If the left child exists and its value is not the same as the node's value, it's not a univalue subtree
          if (node.left && node.val !== node.left.val) return false;

          // If the right child exists and its value is not the same as the node's value, it's not a univalue subtree
          if (node.right && node.val !== node.right.val) return false;

          // If the node's value is the same as its children's values, increment the count and return true
          count++;
          return true;
      }

      // If either the left or right subtree is not a univalue subtree, return false
      return false;
  }
}

