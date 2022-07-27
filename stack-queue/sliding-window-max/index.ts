export class MonoQueue {
  queue: number[] 

  constructor() {
    this.queue = []
  }

  // 最大值存在最前面
  push(x: number) {
    if(this.queue.length === 0) {
      return this.queue.push(x)
    }

    let last: number = this.queue[this.queue.length - 1]
    while(last && x > last) {
      this.queue.pop() 
      last = this.queue[this.queue.length - 1]
    } 

    this.queue.push(x)
  }

  // 如果窗口滑动的时候正好把最大值滑走
  pop() {
    this.queue.shift()
  }

  max() {
    return this.queue[0]
  }
}

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const monoQueue: MonoQueue = new MonoQueue() 

  for(let i = 0; i < nums.length ; i++){
    monoQueue.push(nums[i])

    if(i - k + 1 >= 0) {
      result.push(monoQueue.max())
      if(nums[i - k + 1] === monoQueue.max()) { 
        monoQueue.pop()
      }
    }
  }

  return result
}
