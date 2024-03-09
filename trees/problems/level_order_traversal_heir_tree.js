function level_order_traversal(root) {
  // edge case handling
  if (!root) return [];
  let result = [];
  let q = []; // new Queue if using some data structure
  q.push(root);
  while (q.length) {
    // while queue is not empty
    result.push(q.map((node) => node.value)); // copy array of just the node.values into result array
    let l = q.length; // take a snapshot of the queue length, that is - record the number of nodes in the queue
    // inner loop represents a layer, which is stored in result as a subarray
    // execute this loop exactly as many times as there are number of nodes in queue now
    while (l--) {
      let node = q.shift(root); // remove and get first element from queue
      // put its children into the q
      node.children.forEach((el) => {
        q.push(el);
      });
    }
  }
  return result;
}
