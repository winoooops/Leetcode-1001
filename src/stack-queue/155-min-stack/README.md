# 155. Min Stack

Design a stack that supports `push`, `pop`, `top`, and **retrieving the minimum element** in constant time.

Implement the MinStack class:

* `MinStack()` initializes the stack object.
* `void push(int val)` pushes the element val onto the stack.
* `void pop()` removes the element on the top of the stack.
* `int top()` gets the top element of the stack.
* `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.



## Example
```
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

## Solution

with a `stack` to store the actually elements and a `minStack` to store the minimal values when `stack` at a certain length

```ts
export class MinStack {
  stack: number[];
  minStack: number[];
  
  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(v: number) {
    this.stack.push(v);
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], v));
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
```
