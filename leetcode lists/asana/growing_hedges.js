// Sample problem: Growing Hedges
// Problem statement
// Create a function that takes in:
// an integer that represents a number of years,
// a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, and 0s represent empty spaces. 
// The function should simulate the growth of hedges over the given number of years, according to the following rules:
// An empty square which is adjacent to a hedge (including diagonally) will be filled in the next year. 
// A square which is filled with a hedge will be empty the following year if it is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. Note that hedges on the edge squares will always get enough sun.
// Any other squares will be left intact.

// The function should return the number of pairs of adjacent hedges (including diagonally) at the end of this process. We’d like you to focus on writing simple, well-structured code; you will not be graded on optimizing the performance of your solution.
// Examples:
// Example 1. If the number of years is 1, and the initial matrix is
// [[0, 0, 1],
//  [0, 0, 0]]
// the final matrix will be:
// [[0, 1, 1],
//  [0, 1, 1]]
// and the function should output 6. Here are the six pairs of adjacent hedges in this garden:
// [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],
//  [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]
// Example 2. If the number of years is 2, and the initial matrix is:
// [[1, 0, 0, 0],
// [1, 1, 0, 0],
// [1, 0, 0, 1]]

// // year 1
// [[1, 1, 1, 0],
// [1, 1, 1, 1],
//   [1, 1, 1, 1]]

// // year 2
// [[1, 1, 1, 1],
// [1, 0, 1, 1],
//   [1, 1, 1, 1]]
// // one is emptied bc it was surrounded by 1s on all eight sides

// // the final matrix will be:
// [[1, 1, 1, 1],
// [1, 0, 1, 1],
//   [1, 1, 1, 1]]
// And the function should output 21.
// Understand the problem
// As a first step, make sure that you understand the problem. Does the way the hedges grow in the given examples make sense? How about the count of 6 adjacent pairs of squares populated by hedges in the first example?

// Try to check your understanding against the second example as well. While it's not trivial to compute the exact answer to that test case, you could at least check that an estimation based on your understanding of the problem falls within the ballpark of 21. Moreover, working through the second example step-by-step is a good way to analyze how the state gets updated. Spending an extra minute to verify your understanding of the problem statement might save you 20 minutes of rewriting your solution later!


// High level solution
// Next, let’s think about how to solve the problem and organize your code. The problem statement explicitly asks you not to optimize the performance of your solution, 
// so a reasonable naive approach should be enough. We can simulate the growth of hedges one year at a time, 
// and count the number of pairs at the very end. Let’s try to express this in code. We will use Python 3, but you are not limited to any specific language.


// def populated_neighbors_after_years(garden, years):
//    for year in range(years):
//        garden = simulate_one_year_growth(garden)
//    return count_adjacent_pairs(garden)

function populatedNeighborsAfterYears(garden, years) {
  for (let i = 1; i <= years; i++) {
    garden = simulateOneYearGrowth(garden);
  }

  return countAdjacentPairs(garden);
}

let input = [
  [0, 0, 1], 
  [0, 0, 0]
];
let input2 = 
[[1, 0, 0, 0],
[ 1, 1, 0, 0],
[ 1, 0, 0, 1]]
const result = populatedNeighborsAfterYears(input2, 0);

console.log(result)


// Method and variable naming
// Note the naming of functions and variables. While there is often no single best name, especially for functions, 
// choosing names that reflect the behavior and semantic meaning of corresponding entities allows the person reading your code to understand it quicker. Compare the previous code, for example, to:


// def hedges(M, n):
//    for _ in range(n):
//        M = do_it(M)
//    return count(M)


// Doesn’t quite read the same, does it? The function names are not specific enough to know what they are up to, and we can only guess that “M” represents our garden.


// Low level implementation
// Let’s dive deeper into each of the functions we have identified. simulate_one_year_growth should create a matrix of the same dimensions as the original garden, 
// populate each square according to the rules, and return it:


// def simulate_one_year_growth(garden):
//    height = len(garden)
//    width = len(garden[0])
//    new_garden = [[0 for j in range(width)] for i in range(height)]
//    for i in range(height):
//        for j in range(width):
//            populated_neighbors = count_populated_neighbors(garden, i, j)
//            if garden[i][j] == 1 and populated_neighbors == 8:
//                new_garden[i][j] = 0
//            elif garden[i][j] == 0 and populated_neighbors > 0:
//                new_garden[i][j] = 1
//            else:
//                new_garden[i][j] = garden[i][j]
//    return new_garden

function simulateOneYearGrowth(garden) {
  const height = garden.length;
  const width = garden[0].length;
  const newGarden = JSON.parse(JSON.stringify(garden));
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const populatedNeighbors = countPopulatedNeighbors(garden, row, col);
      if (garden[row][col] == 1 && populatedNeighbors == 8) {
        // empty out this cell
        newGarden[row][col] = 0;
      } else if (garden[row][col] == 0 && populatedNeighbors > 0) {
        newGarden[row][col] = 1;
      } else {
        newGarden[row][col] = garden[row][col];
      }
    }
  }
  return newGarden;
}


// Note that we extracted a logically independent task - counting the number of populated neighbors of a 
// given square - into a separate method which we named count_populated_neighbors. 
// Leaving it inline in simulate_one_year_growth would cause simulate_one_year_growth to be bloated and harder to read. 
// Eliminating these effects is a great reason to create a new function!
// Be comfortable with your programming language
// You might also be tempted to replace the way new_garden is created with something shorter.
//  For example, it would be reasonable to assign a copy of the original garden to new_garden. 
// However, most programming languages will interpret a simple statement like “new_garden = garden” as a reference assignment, 
/// rather than a copy! Being comfortable with your programming language includes understanding such technical 
// details and correctly dealing with them. Here is a good explanation of copying things in Python:
// https://medium.com/@thawsitt/assignment-vs-shallow-copy-vs-deep-copy-in-python-f70c2f0ebd86
// Avoid code duplication
// Let’s discuss the implementation of the count_populated_neighbors function. 
// Your first impulse might be to check the square in each direction separately, and aggregate the results:

// # check the square above and to the left of (i, j)
// if garden[i - 1][j - 1] == 1:
//    count += 1
// # check the square directly above (i, j)
// if garden[i - 1][j] == 1:
//    count += 1
// [... more of this for each of the 6 remaining directions]


// Note that this will grow out of proportion rather quickly, and we didn’t even stop to check whether 
//the neighbors are actually within the garden boundaries! 
/// We should refactor this code to reduce code duplication as much as we can.


// One of the ways to avoid checking 8 neighboring squares separately is to notice that each of 
//them is at most 1 unit away from the original square horizontally, and at most 1 unit away vertically; 
// at the same time, together they constitute almost all such squares (the original square itself being the last missing piece). 
// Thus, a simple nested loop will allow us to iterate over them:


// for delta_i in (-1, 0, 1):
//    for delta_j in (-1, 0, 1):
//        if delta_i == 0 and delta_j == 0:
//            # skip over the original square
//            continue
//        neighbor_i = i + delta_i
//        neighbor_j = j + delta_j
//        [ ... check (neighbor_i, neighbor_j)]

function countPopulatedNeighbors(garden, row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        // Skip over the original square
        continue;
      }
      let neighborOfI = row + i;
      let neighborOfJ = col + j;
      
      if ( 
        neighborOfI >= 0 &&
        neighborOfI < garden.length &&
        neighborOfJ >= 0 &&
        neighborOfJ < garden[0].length
        ) {
        if (garden[neighborOfI][neighborOfJ] == 1) {
          count++;
        }
      }
    }
  }
  return count;
}


// The check needs to verify that (neighbor_i, neighbor_j) is within the garden’s boundaries, 
// and that the corresponding square contains a hedge:


// if 0 <= neighbor_i < len(garden) and 0 <= neighbor_j < len(garden[0]):
//    if garden[neighbor_i][neighbor_j] == 1:
//        # increment neighbor count for square (i, j)


// Yet again, the check can be extracted into a dedicated function for readability’s sake, but you could also argue that this piece of code is self-explanatory.


// Finally, we are left with the task of implementing count_adjacent_pairs from the main function. What happens if we take every square with a hedge, count how many populated neighbors it has, and add all these counts up into a number S? Note that every pair of populated neighboring squares will be counted exactly twice: once in the count of the first square, and once in the count of the second square. Therefore, if we divide S by 2, we obtain the exact answer to the problem. Thankfully, we already have a function that computes the number of populated neighbors for a given square, and we can utilize it to solve this subproblem!


// def count_adjacent_pairs(garden):
//    adjacent_pairs = 0
//    for i in range(len(garden)):
//        for j in range(len(garden[0])):
//            if garden[i][j] == 1:
//                adjacent_pairs += count_populated_neighbors(garden, i, j)
//    # each pair was counted twice, so divide the result by 2
//    return adjacent_pairs // 2
// Final code
// When we combine all of our functions together, we obtain this well-designed solution:

function countAdjacentPairs(garden) {
  let adjacentPairs = 0;
  const height = garden.length;
  const width = garden[0].length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (garden[row][col] == 1) {
        adjacentPairs += countPopulatedNeighbors(garden, row, col)
      }
    }
  }
  // each pair was counted twice, so divide the result by 2
  return adjacentPairs / 2
}
 
           
  

// def count_populated_neighbors(garden, i, j):
//    populated_neighbors = 0
//    for delta_i in (-1, 0, 1):
//        for delta_j in (-1, 0, 1):
//            if delta_i == 0 and delta_j == 0:
//                # skip over the original square
//                continue
//            neighbor_i = i + delta_i
//            neighbor_j = j + delta_j
//            if 0 <= neighbor_i < len(garden) and 0 <= neighbor_j < len(garden[0]):
//                if garden[neighbor_i][neighbor_j] == 1:
//                    populated_neighbors += 1
//    return populated_neighbors


// def simulate_one_year_growth(garden):
//    new_garden = [[0 for j in range(len(garden[0]))] for i in range(len(garden))]
//    for i in range(len(garden)):
//        for j in range(len(garden[0])):
//            populated_neighbors = count_populated_neighbors(garden, i, j)
//            if garden[i][j] == 1 and populated_neighbors == 8:
//                new_garden[i][j] = 0
//            elif garden[i][j] == 0 and populated_neighbors > 0:
//                new_garden[i][j] = 1
//            else:
//                new_garden[i][j] = garden[i][j]
//    return new_garden


// def count_adjacent_pairs(garden):
//    adjacent_pairs = 0
//    for i in range(len(garden)):
//        for j in range(len(garden[0])):
//            if garden[i][j] == 1:
//                adjacent_pairs += count_populated_neighbors(garden, i, j)
//    # each pair was counted twice, so divide the result by 2
//    return adjacent_pairs // 2


// def neighbors_after_years(garden, years):
//    for year in range(years):
//        garden = simulate_one_year_growth(garden)
//    return count_adjacent_pairs(garden)


// Testing
// While Asana doesn’t grade your submissions on the amount of testing you have done, it’s always a good practice to test your code!


// Let’s run it against the examples from the problem statement - do we get 6 and 21, respectively? We could go a step further and print out the garden at the end of the process to check it against the matrices in the examples. (Note that you don’t need to have a complete program to run these verifications - it’s often useful to test intermediate functions in isolation once you complete their implementation.)


// Don’t stop at testing on the examples provided to you - construct your own! Think of the following:
// What are the edge cases for this problem?
// Is there some behavior that wasn’t tested through the examples?
// Does the program work as expected for very large or very small inputs?


// An example of an edge case in this problem is when the number of years is 0. Does your approach work for this test case, or does it perform one unexpected iteration? Depending on the implementation, it could even end up in an endless loop!


// Another potential edge case is an empty garden, given that problem statement does not mention that the input matrix is non-empty. Often people add checks at the beginning of the solution to guard against such edge cases, and such a check would make sense here, even though the code produces the correct answer for an empty garden. However, be careful about adding too many custom checks. For example, you could notice that if the given matrix has no 1s, then the answer is always 0, and add a check against this to optimize performance. But note that the code would become longer as a result, and the check merely optimizes for a single test case, so for the purposes of clarity it should not be included. In general, a solution that does not require any extra boundary condition checks is the best.


// What about the behaviors not covered in tests? We can see that all 3 possible growth scenarios are utilized in the second example. However, one class of test cases that isn’t covered are matrices that have a greater height than width - and it’s indeed relatively easy to miss a bug that only manifests in such scenarios.


// Finally, how does the program behave for very large inputs? There are three types of inputs in this problem: the number of years, the dimensions of the garden, and the values inside the garden. The values in the garden are always set to 0 or 1, so they will not present an issue. Our program’s runtime scales linearly with the number of years provided, which is expected. And we always keep at most two copies of the garden in memory, so (as long as we are not heavily constrained on the usage of memory) an increase in the garden’s dimensions will not pose an issue either. In a different problem, you might notice that the memory consumption of your solution is, for example, proportional to the square of the input data’s size - in which case you should think about the limitations it imposes on your algorithm, or try to find a way to reduce memory usage.
// Final thoughts
// Now that you have thoroughly tested your solution, re-read it for any stylistic concerns and delete leftover unused code that you didn’t notice earlier. If this is an online challenge, you can submit your solution. If this is an on-site coding challenge, there is still some work to do. Try to summarize the alternatives you considered when you picked your approach. What were the reasons to pick one over another? What is the algorithmic complexity of your solution, and of the alternate approaches? Your on-site interviewer will be interested to discuss all of these questions with you.




// Summary
// Check understanding of the problem
// Verify that the examples return results that you expected.
// Think of a solution to the problem
// Don’t focus on optimizing unless explicitly requested to - a reasonable naive solution is good enough
// Implement the solution
// Break the idea apart into granular reusable methods
// Choose informative method and variable names
// Avoid code duplication
// Avoid custom checks - a generic solution is better
// Test your code
// Verify the answers for the problem examples
// Think of edge cases
// Think of test scenarios not covered in examples
// Consider your code’s performance on unusual inputs
// Final polish
// For an online challenge, review your solution and submit it
// For an on-site challenge, summarize the alternatives you considered and think about algorithmic complexity

