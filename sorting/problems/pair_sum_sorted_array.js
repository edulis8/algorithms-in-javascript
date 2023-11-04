// {
//     "numbers": [1, 2, 3, 5, 10],
//     "target": 7
// }
// Output:
// [1, 3]


// Given an array sorted in non-decreasing order and a target number, find the indices of the two values from the array that sum up to the given target number.

function implementation(nums, target) {
    // it is already pre-sorted
    // we could use a binary search tree to search for target - n[i], or a hash table
    // but since it is already pre-sorted and indices will be preserved, we can use a two pointer pass

    // Two pointer pass
    // linear or O(n)

    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[j] === target - nums[i]) return [i, j]; // in other words, if nums[i] + nums[j] == target, 
        else if (nums[j] > target - nums[i]) { // in other words, if nums[i] + nums[j] > target
            // we decrement j, the larger number, to keep searching/adding through the numbers less than j
            j--;
        } else { // in other words, if nums[i] + nums[j] < target
            i++; // we increment i, the smaller number, to keep searching/adding thru the numbers greater than i
        }
    }

    return [-1, -1];
}



console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
    "numbers": [1, 2, 3, 5, 10],
    "target": 7
}

let result = implementation(input.numbers, input.target);
console.log('result:', result)

console.error('\n******************** ************\n')

