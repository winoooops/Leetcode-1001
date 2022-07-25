# 栈实现队列

请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

* void push(int x) 将元素 x 推到队列的末尾
* int pop() 从队列的开头移除并返回元素
* int peek() 返回队列开头的元素
* boolean empty() 如果队列为空，返回 true ；否则，返回 false


## 示例

```
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

```

## `O(n)`的解法思路

为了满足队列的**FIFO**的特性，我们需要用到两个栈，用它们其中一个来反转元素的入队顺序，用另一个来存储元素的最终顺序。

* `Stack.pop()`: remove the last element from the stack
* `Queue.pop()`: remove the first element from the queue

```typescript
export class MyQueue {
   private stackOne: number[] 
   private stackTwo: number[]

   constructor() {
     this.stackOne = []
     this.stackTwo = []
   }

   push(v: number) {
     this.stackOne.push(v)
   }

   pop() {
     while(this.stackOne.length > 0) {
       this.stackTwo.push(this.stackOne.pop())
     }

     let tmp = this.stackTwo.pop()

     while(this.stackTwo.length > 0) {
       this.stackOne.push(this.stackTwo.pop())
     }

     return tmp
   }

   peek() {
     while(this.stackOne.length > 0) {
       this.stackTwo.push(this.stackOne.pop())
     }

     let tmp = this.stackTwo[this.stackTwo.length - 1]

     while(this.stackTwo.length > 0) {
       this.stackOne.push(this.stackTwo.pop())
     }

     return tmp
   }

   empty() {
     return this.stackOne.length === 0 && this.stackTwo.length === 0
   }
 }

```

## `O(1)`解法思路
在`push`数据的时候，只要数据放进输入栈就好，但在`pop`的时候，操作就复杂一些，输出栈如果为空，就把进栈数据全部导入进来（注意是全部导入），再从出栈弹出数据，如果输出栈不为空，则直接从出栈弹出数据就可以了。

最后如何判断队列为空呢？如果进栈和出栈都为空的话，说明模拟的队列为空了。

> peek()的实现，可以直接复用pop()。
> push的时间复杂度为`O(1)`, pop和peek的时间复杂度均是`O(1)`

```typescript
export class MyQueue {
  private stackIn: number[] 
  private stackOut: number[]

  constructor() {
    this.stackIn = []
    this.stackOut = []
  }

  push(v: number){
    this.stackIn.push(v)
  }

  pop(){
    if(this.stackOut.length === 0) this.dump()  
    return this.stackOut.pop()
  }

  peek() {
    if(this.stackOut.length === 0) this.dump() 
    return this.stackOut[this.stackOut.length - 1]
  }

  empty() {
    return this.stackIn.length === 0 && this.stackOut.length === 0
  }

  private dump() {
    while(this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop())
    }
  }
}
```

