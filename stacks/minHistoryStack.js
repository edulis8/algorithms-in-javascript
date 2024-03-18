
var MinStack = function() {
  this.minHistoryStack = []; // keeps record of min in stack
  this.stack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (!this.minHistoryStack.length) {
      this.minHistoryStack.push(val);
      return;
  }

  // if val smaller than last item in history, push it
  if (val <= this.minHistoryStack[this.minHistoryStack.length - 1]) {
      this.minHistoryStack.push(val)
  } else {
      // if not smaller, just push the last item, again.
      this.minHistoryStack.push(this.minHistoryStack[this.minHistoryStack.length - 1])
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  // check if stack last item is same as minHistoryStack last item
  this.minHistoryStack.pop();
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  console.log('stack', this.stack)
  console.log('minHistory', this.minHistoryStack)
  return this.minHistoryStack[this.minHistoryStack.length -1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/