# 491.递增子序列 

给你一个整数数组 `nums` ，找出并返回所有该数组中不同的递增子序列，递增子序列中 **至少有两个元素** 。你可以按 **任意顺序** 返回答案。

数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

 
## 示例
```
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
```
```
输入：nums = [4,4,3,2,1]
输出：[[4,4]]
```

## 思路

![491](../../static/img/back-tracking/increasing-subsequences.png)

* 因为这里要求是自增的子序列, 所以我们不能用排序然后去重的方式去解题. => 手动判断当前元素路径最后一个元素大小
* 同一个数层里元素不可出现两次 => 数层去重, 因为是无序的, 所以用`set`做哈希来判断 

### 回溯法
1. 需要的参数: `start: number`, `path: number`
2. 递归终止的条件: `if(start >= nums.length)`
3. 单层需要处理的逻辑 
  ```
  function backTracking(start: number, path: number[]) {
    // 只收集长度大于等于2的结果 
    if(path.length >= 2) results.push([...path])

    // 如果遍历完毕, 返回 
    if(start >= nums.length) return 

    const lvlSet: Set<number> = new Set()

    // 开始循环 
    for(let i = start ; i < nums.length ; i++) {
      // 判断是否有效
      if(nums[i] < path[path.length - 1] || lvlSet.has(nums[i])) continue;  

      path.push(nums[i])
      // 记录新的元素, 这里不需要回溯, 因为只记录单层的
      lvlSet.add(nums[i])

      backTracking(i + 1, path)

      // 回溯 
      path.pop() 
    }
  }
  ```

#### 完整代码
```
export function increasingSub(nums: number[]): number[][] {
  const results: number[][] = []

  if(!nums.length) return results

  function backTracking(start: number, path: number[]) {
    if(path.length >= 2) results.push([...path])

    if(start > nums.length) return 

    const lvlSet: Set<number> = new Set()

    for(let i = start ; i < nums.length ; i++) {
      let prev = path[path.length - 1]
      if((i > 0 && nums[i] < prev) || lvlSet.has(nums[i])) continue

      path.push(nums[i])
      lvlSet.add(nums[i])

      backTracking(i + 1, path)

      path.pop()
    }
  }


  backTracking(0, [])

  return results
}
```



