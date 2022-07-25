# 用队列模拟栈

使用队列实现栈的下列操作：

* push(x) -- 元素 x 入栈
* pop() -- 移除栈顶元素
* top() -- 获取栈顶元素
* empty() -- 返回栈是否为空

注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

## 思路

可以使用两个队列模拟栈, 一个队列用来记录, 一个队被封.

> Typescript和Javascript没有原生的队列对象, 可以使用 `Array.prototype.push` 和 `Array.prototype.shift()` 来模拟


```typescript 
export class MyStack {
  private queueOne: number[] 
  private queueTwo: number[]

  constructor() {
    this.queueOne = []
    this.queueTwo = []
  }

  push(val: number) {
    this.queueOne.push(val)
  }

  pop(): number {
    if(this.queueOne.length <= 1) {
      return this.queueOne.shift()
    }

    while(this.queueOne.length > 1) {
      this.queueTwo.push(this.queueOne.shift())
    }

    let result = this.queueOne.shift()

    this.queueOne = this.queueTwo
    this.queueTwo = []

    return result

  }

  peek(): number {
    let result = this.pop() 
    this.push(result)

    return result
  }

  empty() {
    return this.queueOne.length === 0 
  }


  // for test only , donot submit this to LeetCode
  list() {
    return this.queueOne
  }
}
```

一个队列在模拟栈弹出元素的时候只要将队列头部的元素（除了最后一个元素外） 重新添加到队列尾部，此时在去弹出元素就是栈的顺序了。

```typescript 
export class Stack {
  private queue: number[]

  constructor() {
    this.queue = []
  }

  push(val: number) {
    this.queue.push(val)
  } 

  pop(): number | null {
    if(this.queue.length === 0) return null

    for(let i = 0 ; i < this.queue.length - 1 ; i++) {
      this.queue.push(this.queue.shift())
    }

    return this.queue.shift()
  }

  peek(): number | null {
    let res = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return this.queue.length === 0 
  }
}
```
