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
