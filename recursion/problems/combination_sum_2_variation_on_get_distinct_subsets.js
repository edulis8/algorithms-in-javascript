/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 // Each number in candidates may only be used once in the combination.
 // Sets.
 // Backtracking / short circuiting
 // sets:
    // a slate, which is an array
    // include / exclude decisions
        // push next number, 
        // or not.
    // backtracking case: 
        // array sums > target
    // base case 
        // found an array that sums to target.
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort(); // presorting
    helper (0, [])
    return result;

    function helper(i, slate) {
        if (sum(slate) === target) {
            result.push([...slate]);
            return;
        }
        if (sum(slate) > target) {
            return;
        }
        if (i === candidates.length) {
            return;
        }

        let count = 0;
        for (let j = i; j < candidates.length; j++) {
            if (candidates[i] === candidates[j]) {
                count++;
            } else {
                break;
            }
        }
        // include
        // this manager sends 1, and 1,1, to submanagers; each time it skips count ahead to avoid duplicates
       
        for (let k = 1; k <= count; k++) {
            slate.push(candidates[i]); // push 1 into candidates, 2 times
            helper(i + count, slate);
        }
        for (let p = 1; p <= count; p++) {
            slate.pop();
        }

        // exclude 1s
        helper(i + count, slate);
    }

    function sum(array) {
        return array.reduce((sum, val) => {
            return sum + val;
        }, 0)
    }
};