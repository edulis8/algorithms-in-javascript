//BREADTH FIRST SEARCH , BFS

// LINEAR TIME, all nodes touched
// CALL STACK HEIGHT O(logn) or O(n) worst case (unbalanced)

// Level Order Traversal Of A Binary Tree
// Given a binary tree, list the node values level by level from left to right.
/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

// TIME COMPLEXITY: LINEAR. total amount of work we do is proportional to the amount of nodes. 0(n)
// SPACE: O(n) in worst case. Really n/2 because n/2 is probably the amount of nodes in the last layer (max size of queue array). That is the same as linear, though.
*/
/**
 * @param {BinaryTreeNode_int32} root
 * @return {list_list_int32}
 */
function level_order_traversal(root) {
    // edge case handling

    if (!root) return [];
    let result = [];
    let q = []; // new Queue if using some data structure
    q.push(root);


    while (q.length) { // while queue is not empty
        // result.push(q.map(node => node.value)) // THIS CAN BE DONE INSTEAD OF USING TEMP ARRAY, same idea, different place... copy array of just the node.values into result array
        // #2
        let l = q.length; // take a snapshot of the queue length, that is - record the number of nodes in the queue
        // inner loop represents a layer, which is stored in result as a subarray
        // execute this loop exactly as many times as there are number of nodes in queue now
        // REQUIRED IN ORDER TO KEEP TRACK OF LEVEL-ORDER VALUES IN A RESULT ARRAY. NOT REQUIRED IF SIMPLY PROCESSING EACH NODE ANOTHER DAY. LIKE VERTICAL-ORDER-TRAVERSIAL.
        let temp = [];

        while (l--) {
            let node = q.shift(root); // remove and get first element from queue
            if (node.left) q.push(node.left); // put its children into the q
            if (node.right) q.push(node.right);
            temp.push(node.value);
        }
        result.push(temp);
    }
    // #1
    return result;
}



