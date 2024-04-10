/**
 * 
 * 
 * 
 * 
 * 
 * 
IMPORTANT NOTE:
What if capacity = 1 and we call put again with a new key? You can imagine the headache that might ensue - we need to delete the only existing node, which means we are deleting both the head and tail. Then we need to add the new node, but since the linked list is empty again, we will be setting the new node as the head and tail again.

The cleanest way to handle the empty list case is by using sentinel nodes.

We will have our head and tail attributes both set to dummy nodes. The "real" head will be head.next and the "real" tail will be tail.prev. These dummy nodes sit just "outside" of our linked list. What is the purpose? We never want head or tail to be null.

 */


class ListNode {
  constructor(key, val) {
      this.val = val;
      this.key = key;
      this.next;
      this.prev;
  }
}

/**
* @param {number} capacity
*/
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0; // so we know when we're over capacity
  this.end = new ListNode(-1, -1); // 1. so we know where to insert or place an update node
  this.head = new ListNode(-1, -1); // keep ref to head, if head is moved, set head to be head.next
  this.head.next = this.end;
  this.end.prev = this.head;

  this.map = new Map();
  // 1: Node1
  // 2: Node2

};
LRUCache.prototype._moveBack = function (key, value) {
  const node = this.map.get(key);
  // remove node by stitching together its prev and its next
  node.prev.next = node.next;
  node.next.prev = node.prev;

  // add
  const previousEnd = this.end.prev; // end is a dummy, so real end is this.end.prev
  previousEnd.next = node; // node is now at end
  node.prev = previousEnd; // node's prev is previous end
  node.next = this.end; // our dummy value takes the final ending spot
  this.end.prev = node; // stick dummy end to node

  // const node = this.map.get(key);
  // node.val = value ? value : node.val;
  // // put at back, if we're putting the head at back, set head to be head's child
  // if (this.head === node && node.next) {
  //     this.head = this.head.next; // if this is end, next is null
  //     this.head.prev = null;
  //     this.head.next = this.head.next || node; // if only 2 values
  // }

  // const oldEnd = this.end;
  // this.end = node;
  // node.prev = oldEnd;
  // node.next = null;
  return node;
}
/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  // Return the value of the key if the key exists, otherwise return -1.

  // put node at end
  // if it is the head (has no prev), update head var to be node.next
  // return node's value

  if (this.map.has(key)) {
      return this._moveBack(key).val;
  }

  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  // Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. 
  // If the number of keys exceeds the capacity from this operation, evict the least recently used key.

  // if does not exist, create node, initialize everything (head, end, size)

  // if exists, access via this.map and update value
  // if does not exist, insert at end
  // now check if over capacity, if so, remove head
  // set head to be head.next
  let node;
  if (this.map.has(key)) {
      node = this._moveBack(key) // removes old version, adds new to end
  } else if (!this.map.has(key)) {
      // insert at end
      node = new TreeNode(key, value);
      // if (this.map.size === 0) {
      //     this.head = node;
      //     this.end = node;
      // }
      this.map.set(key, node);

      // add
      const previousEnd = this.end.prev;
      previousEnd.next = node;
      node.prev = previousEnd;
      node.next = this.end;
      this.end.prev = node;
  }

  if (this.map.size > this.capacity) {

      const nodeToDelete = this.head.next; // head.next because head is dummy head

      node.prev.next = node.next;
      node.next.prev = node.prev;

      this.map.delete(nodeToDelete.key);


  }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// JAVASCRIPT SOLUTION
// USE MAP

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // This map will hold the keys and values of the cache
  }

  get(key) {
    let val = this.map.get(key);
    if (val === undefined) return -1; // If the key does not exist in the cache, return -1

    // If the key exists, remove it from the current position and set it again to the end of the map
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key); // If the key exists, remove it from the current position

    this.map.set(key, value); // Set the new key and value at the end of the map

    // If the size of the map exceeds the capacity of the cache, remove the least recently used key (which is the first key of the map)
    if (this.map.size > this.capacity) {
      let firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
  }
}