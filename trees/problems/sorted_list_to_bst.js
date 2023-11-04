
// Convert Sorted List To Binary Search Tree
// Given a linked list with elements sorted in ascending order, convert it into a height-balanced binary search tree.

// Time Complexity
// O(node_count).

// To convert the linked list into an array: O(node_count).
// Time taken to create a single BST node: O(1).
// Number of nodes created: O(node_count).

// Auxiliary Space Used
// O(node_count).

// To create an array of size node_count: O(node_count).
// Size of the recursive call stack in the worst-case: O(log(node_count)).

// Space Complexity
// O(node_count).

// Space used for input: O(node_count).
// Auxiliary space used: O(node_count).
// Space used for output: O(node_count).
// So, total space complexity: O(node_count).



/*
For your reference:
const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {LinkedListNode_int32} head
 * @return {BinaryTreeNode_int32}
 */
function sorted_list_to_bst(head) {
    // convert linked list to sorted array
    const sortedArray = []
    while (head.next) {
        sortedArray.push(head.value);
        head = head.next;
    }

    return helper(sortedArray, 0, sortedArray.length - 1)

    // divide and conquer
    // create a node out of the midpoint, hand left and right parts of array to subordinate
    //  return root
    function helper(arr, start, end) {
        if (start > end) {
            return null;
        }
        if (start === end) {
            return new BinaryTreeNode(arr[start]);
        }
        let midpoint = Math.floor((start + end) / 2); // add start and end together and divide by two to get the midpoint
        let root = new BinaryTreeNode(arr[midpoint]);
        root.left = helper(arr, start, midpoint - 1)
        root.right = helper(arr, midpoint + 1, end)
        return root
    }
}


const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

console.log('\n******************** OUTPUT ************\n');
// MAKE SURE TO UPDATE THIS:
const input = [100, 1, 89, 3, 66, 5, 6, 7];     // <--- UPDATE [5, 8, 3, 9, 4, 1, 7];
let result = sorted_list_to_bst(input);
console.log('result:', result)

console.error('\n******************** ************\n')
