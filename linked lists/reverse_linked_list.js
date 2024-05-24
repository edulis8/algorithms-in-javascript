//  O(n),

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// 
//  [1] <- [2] <- [3]  ..null
//                c
//                       n
//        p 

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    // Store the next node.
    next = current.next;

    // Reverse the current node's next pointer.
    current.next = prev;

    // Move pointers forward.
    prev = current;
    current = next;
  }

  // After the loop, 'prev' will be the new head.
  return prev;
}

// Helper function to display the linked list
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("Original Linked List:");
printLinkedList(node1);

// Reverse the linked list
const reversedHead = reverseLinkedList(node1);

console.log("Reversed Linked List:");
printLinkedList(reversedHead);