/**
 * @param {string} s
 * @return {string}

LINEAR TIME
LINEAR SPACE

DATA STRUCTURE:
STACK
 */
var removeDuplicates = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!stack.length) {
            stack.push(char);
            continue;
        } else {
            if (char === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
    }
    // return joined stack
    return stack.join('');
};

// Input: s = "abbaca"
// Output: "ca"

// brute force
// check if next char is same, remove both chars if so.

// DS
// map
// stack

// Input: s = "azxxzy"
// Output: "ay"

// abbbaca
// LIFO
// [a,b,a]