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
