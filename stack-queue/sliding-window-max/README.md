# 滑动窗口最大值


给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

> 在线性时间复杂度内解决此题.

## 示例

```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

```

```
输入：nums = [1], k = 1
输出：[1]
```

## 思路

### 单调(递减)队列

如果使用队列维护滑动窗口的值, 在滑动发生时元素也在队列中一进一出, 但问题是这个最大值可能发生在队列中的任意位置, 如果使用排序记录最大值的话, 出入的顺序不准确. 
> 其实队列没有必要维护窗口里的所有元素，只需要维护有 **可能成为窗口里最大值的元素** 就可以了，同时保证队里里的元素数值是由大到小的。
> 
> 那么这个维护元素单调递减的队列就叫做单调队列，即单调递减或单调递增的队列。C++中没有直接支持单调队列，需要我们自己来一个单调队列

* 把元素推进队列的时候, 会删除所有比他小的元素
  ```
  window position              Monotonic Queue       Max
  ----------------             ---------------       ---
  [1] 3 -1 -3 5 3 6 7          [1]                    1
  [1 3] -1 -3 5 3 6 7          [3]                    3
  [1 3 -1] -3 5 3 6 7          [3, -1]                3
  1 [3 -1 -3] 5 3 6 7          [3, -1, -3]            3 
  1 3 [-1 -3 5] 3 6 7          [5]                    5 
  1 3 -1 [-3 5 3] 6 7          [5, 3]                 5 
  1 3 -1 -3 [5 3 6] 7          [6]                    6 
  1 3 -1 -3 5 [3 6 7]          [7]                    7
  ```
> 执行`pop()`和`push()`的复杂度都是`O(1)`, 所以总的时间复杂度是`O(n)`; 因为Monotonic Queue最多只会有`K`个元素, 所以空间复杂度是`O(k)`

```typescript 
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
```
