
// Count All Subsets Of A Set Of Size N
// Given a number denoting the size of a set, count the number of unique subsets of that set.


 Math.pow(2,n)

// Example
// {
// "n": 3
// }
// Output:
// 8
// If we have a set {1, 2, 3}, then all the possible subsets are: {}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}.


/**
 * @param {int32} n
 * @return {int32}
 */


// SAME AS BELOW
// function count_all_subsets(n) {
//     if (n == 0) {
//         return 1;
//     }

//     let sub_result = count_all_subsets(Math.floor(n / 2));
//     let subsets_count = sub_result * sub_result;

//     if (n % 2 !== 0) {
//         subsets_count *= 2;
//     }

//     return subsets_count;
// }

// 4) divide_and_conquer_recursive_solution.cpp
// Observe that,

// 2n = 2 * (2^n/2 * 2^n/2) when n is odd and (n/2) is the floor division of n by 2 and,

// 2n = (2^n/2 * 2^n/2) when n is even.

// In this solution, we will use this recurrence to find the result in an optimal manner. The overall approach will be:

// Given a value n, we will first recur to find the value of 2n/2 and will store it in our result subsets_count.
// We will then update subsets_count to subsets_count * subsets_count.
// Next, we will check if the current value of n is even or odd. If it is odd, we will multiply 2 to subsets_count. Finally, we will return subsets_count.
// Time Complexity
// O(log(n)).

// The value of n gets reduced by a factor of 2 in each recursive call.

// Auxiliary Space Used
// O(log(n)).

// Since the value of n gets reduced by a factor of 2 in each recursive call, the maximum number of recursive calls in the call-stack will be O(log(n)) in the worst-case.

// Space Complexity
// O(log(n)).

// Summing up

// space taken by input,
// auxiliary space used, and
// space taken by output,
// we get O(1) + O(log(n)) + O(1) = O(log(n)).

function count_all_subsets(n) {
    // this is just a fancy and faster way of doing Math.pow(2,n)
    // 2^n
    // 2n = 2 * (2^n/2 * 2^n/2) when n is odd and (n/2) is the floor division of n by 2 and,
    // 2n = (2^n/2 * 2^n/2) when n is even.
    if (n === 0) {
        return 1;
    } else {
        // even
        // Given a value n, we will first recur to find the value of 2^n/2 and will store it in our result subsets_count.
        let subResult = count_all_subsets(Math.floor(n / 2));
        let result = subResult * subResult;
        // if odd
        // add another 2 multiplier
        return (n % 2 === 0) ? result : 2 * result;
    }
}
//    // O(log(n)).

// // Since the value of n gets reduced by a
// //  factor of 2 in each recursive call, the maximum number of recursive calls in the call-stack will be O(log(n)) in the worst-case.



console.log('\n******************** OUTPUT ************\n');
let input = 10;
let result = count_all_subsets(input);
console.log('result:', result)
console.log('\n******************** ************\n')



// NOTE: LISTING SUBSETS IS A AN EXPONTENTIAL OPERATION
// COUNTING THEM, WE HAVE THE TRICK OUTLINED ABOVE, BUT YOU PROB WON'T REMEMBER IT, 
// What you can do is YOU CAN REMEMBER THERE IS A TRICK THAT IS O(logn)
function count_all_subsets_linear(n) {
    // 2^n
    if (n === 0) return 1;
    else {
        return 2 * count_all_subsets_linear(n - 1)
    }
}
