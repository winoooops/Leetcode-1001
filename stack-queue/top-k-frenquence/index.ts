export function topKFrequency(nums: number[], k: number): number[] {
  const pQueue: PriorityQueue = new PriorityQueue()
  const freqMap: Map<number, number> = new Map()

  for(let n of nums) {
    freqMap.set(n, (freqMap.get(n) || 0) + 1)
  }

  for(const entry of freqMap.entries()) {
    pQueue.push(entry)
    if(pQueue.size() > k) { 
      pQueue.pop()
    }
  }
  
  return pQueue.queue.map(entry => entry[0])
}

export class PriorityQueue {
  queue: number[][] 

  constructor() {
    this.queue = []
  }

  push(val: number[] ) {
    this.queue.push(val)
    // 创建小栈堆
    this.prioritize()
  }

  pop(){
    this.queue.shift()
  }

  size() {
    return this.queue.length
  }

  // 把频率最小的把元素放在最前面
  // 频率小 === 权重高 
  prioritize() {
    let tmp: number[]
    for(let i = this.size() - 1; i > 0; i--) {
      if(this.queue[i][1] < this.queue[i-1][1]) {
        tmp = this.queue[i - 1]
        this.queue[i - 1] = this.queue[i]
        this.queue[i] = tmp
      }
    }
  }
}


export function topKFrequencyII(nums: number[], k: number): number[] {
  const freqMap: Map<number, number> = new Map() 

  for(let i of nums) {
    freqMap.set(i, (freqMap.get(i) || 0) + 1 )
  }

  return [...freqMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(i => i[0])
}
