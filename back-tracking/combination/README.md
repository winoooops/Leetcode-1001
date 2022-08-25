# 77. 组合 

给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

## 示例
```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

## 思路

因为 `k` 不确定, 所以无法准确地知道需要嵌套几层`for`循环, 所以需要使用**递归**来解决嵌套层数的问题-每一层递归嵌套一个for循环

例如: n为4, k为2的话就是需要2层递归, 用树形结构可以方便进行理解. 

![combination](../../static/img/back-tracking/combination.png)

### 回溯三部走

需要的全局参数:
  * `combination: number[][]` 用来记录结果
  * `path: number[]` 用来记录单层的结果
1. 递归需要的参数: `backTracking(n: number, k: number, left: number){}`
2. 回溯终止条件: `if(path.length === k) return combination.push(path)`
3. 单层搜索的过程: 
  ```typescript
  for(let i = left; i <= length; i++) {
    // 处理节点
    path.push(nums[i])

    // 递归 
    backTracking(n, k, i + 1)

    // 回溯
    path.pop(nums[i])
  }
  ```

### 剪枝优化

注意到以n=4, k=2的例子来说, 
* 第一层的i可以到3
* 第二层的i可以到4 
* 没有第三层 


所以我们可以进行剪枝优化, 如果我们需要k个元素, 在进入每一层循环的时候,已知:
* 已经选择的长度为`path.lengh`, 
* 还需要`k - path.length`个

那么每一层可以到达的元素为`n - (k - path.length) + 1`个

所以每一个单层遍历都可以写成如下
```typescript
function backTracking(n: number, k: number, left: number) {
  if(path.length === k) return result.push(path) 

  for(let i = left; i < n - (k - path.length) + 1; i++) {
    path.push(i)

    backTracking(n, k, i + 1)

    path.pop()

  }
}
```

### 最终代码
```typescript 
export function combinations(n: number, k: number) {
  function backTracking(n: number, k: number , start: number, path: number[]) {
    // 注意这里需要复制path这个数组, 因为for循环存在执行栈里会等到结束时候才执行, 不准确
    if(path.length === k) return result.push([...path])

    for(let i = start ; i <= n - (k - path.length) + 1; i++) {
      path.push(i)

      backTracking(n, k, i+1, path)

      path.pop()
    }
  }

  const result: number[][] = []
  backTracking(n, k, 1, [])

  return result
}
```
