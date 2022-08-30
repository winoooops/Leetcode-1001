# 78.子集 

给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

## 示例
```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

```
输入：nums = [0]
输出：[[],[0]]
```

## 思路

子集问题与分割问题,, 组合问题不同的是, 它收集的是所有的树节点的结果.
![subset](../../static/img/back-tracking/subset.png)

### 回溯

回溯三步走
1. 需要的参数: `path: number[]`, `startIdx: number`
2. 递终止的条件: `if(startIdx >= nums.length)`
3. 单层需要处理的逻辑 


#### 完整代码
```typescript 
export function subsets(nums: number[]): number[][] {
  const results: number[][] = [] 
  if(!nums.length) return results

  function backTracking(startIdx: number, path: number[]) {
    results.push([...path])

    if(startIdx >= nums.length) {
      return 
    }

    for(let i = startIdx ; i < nums.length ; i++) {
      path.push(nums[i])

      backTracking(i + 1, path)

      path.pop()
    }
  }

  backTracking(0, [])

  return results
}
```

---

# 90. Subsets II 
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 

## 示例
```
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

```
输入：nums = [0]
输出：[[],[0]]
```

## 思路

本体和子集II类似, 也是需要对数层进行去重的. 也就采用排序加数层去重的方式解题. 

```typescript
export function subsetsWithDup(nums: number[]): number[][] {
  const results: number[][] = [] 
  const used: boolean[] = new Array(nums.length).fill(false)
  if(!nums) return results

  nums.sort((a,b) => a - b)

  function backTrack(startIndex: number, path: number[]){
    results.push([...path])

    if(startIndex >= nums.length) return 

    for(let i = startIndex ; i < nums.length ; i++) {
      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue 

      path.push(nums[i])
      used[i] = true 

      backTrack(i + 1, path)

      path.pop()
      used[i] = false 
    }
  }

  backTrack(0, [])

  return results
}

```



