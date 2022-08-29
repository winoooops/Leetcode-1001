# 39.组合总和

给你一个**无重复元素**的整数数组 `candidates` 和一个目标整数 `target` ，找出 `candidates` 中可以使数字和为目标数 `target` 的 **所有** 不同组合 ，并以列表形式返回。你可以按 **任意顺序** 返回这些组合。

`candidates` 中的 **同一个** 数字可以 **无限制重复被选取** 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 `target` 的不同组合数少于 150 个。

* `1 <= candidates.length <= 30`
* `1 <= candidates[i] <= 200`
* `candidate` 中的每个元素都 互不相同
* `1 <= target <= 500`


## 示例

![combination-sumII](../../static/img/back-tracking/combination-sum1.png)
> 注意图中叶子节点的返回条件，因为本题没有组合数量要求，仅仅是总和的限制，所以递归没有层数的限制，只要选取的元素总和超过target，就返回！

### 回溯 

1. 递归的参数: `nums: number[]`, 不需要返回值, 需要全局变量`result: number[][]`, `sum: number`
2. 递归终止的条件: `if(sum >= target) return result.push(path)` 
3. 单层递归需要处理
   ```typescript
    function backTracking(index: number, path: number[], sum: number) {
      // 剪枝: 大于目标值就不用继续往下走了
      if(sum > target) return 

      // 遇到符合条件的推入栈
      if(sum === target) {
        return result.push([...path])
      }

      // 从给定的index开始循环(从0开始会出现重复的)
      for(let i = index ; i < candidates.length ; i++) {
        // 处理节点
        sum += candidates[i]
        path.push(candidates[i])

        // 注意, 这里传入i的值来去重
        backTracking(i, path, sum)
        
        // 回溯
        sum -= candidates[i]
        path.pop()
      }
    }
   ```
### 完整代码
```typescript
export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [] 
  if(!candidates.length) return result

  function backTracking(index: number, path: number[], sum: number) {
    // 剪枝: 大于目标值就不用继续往下走了
    if(sum > target) return 

    if(sum === target) {
      return result.push([...path])
    }

    
    for(let i = index ; i < candidates.length ; i++) {
      sum += candidates[i]
      path.push(candidates[i])

      // 注意, 这里传入i的值来去重
      backTracking(i, path, sum)

      sum -= candidates[i]
      path.pop()
    }
  }

  backTracking(0, [], 0)
  return result
}
```
---
# 40. 组合总和II 
给定一个数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的每个数字在每个组合中只能使用一次。

说明： 所有数字（包括目标数）都是正整数。 解集不能包含重复的组合。

## 示例

```
输入: candidates = [10,1,2,7,6,1,5], target = 8, 
输出: [ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]
```

```
输入: candidates = [2,5,2,1,2], target = 5, 
输出: [[1,2,2],[5]]
```

## 思路 

### 树层去重

![combination-sum2](../../static/img/back-tracking/combination-sum2.png)

> 因为数组中含有重复的元素, 那么就有可能在组合的时候出现重复的答案, 所以需要树层进行去重. 

注意这里同一个数字在一个组合中可以被重复使用, 但是两个组合不可以相同, 并且`condidate` 里面含有重复的元素. 用树状图来理解的话就是同一个树层里面不可以有两个重复的元素, 这里推荐使用一个数组来记录在树中出现的元素. 这样在递归的时候就可以很方便找到同树层里下一个元素是否重复. 

```typescript 
export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [] 
  if(!candidates.length) return result

  candidates.sort((a,b) => (a - b))
  
  const used = new Array(candidates.length).fill(false)

  function backTracking(path: number[], index: number, sum: number) {
    if(sum > target) return 

    if(sum === target) return result.push([...path])

    for(let i = index ; i <= candidates.length ; i++) {
      // used[i - 1] === true的话表示在同一个树枝中出现过, 满足条件 
      // used[i - 1] === false 的话表示在上一个树层中出现过, 不满足条件, 直接跳过 
      if(i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] == false) {
        continue
      } 

      path.push(candidates[i])
      sum += candidates[i]
      used[i] = true

      backTracking(path, index + 1, sum)

      used[i] = false
      path.pop()
      sum -= candidates[i]
    }
  }

  backTracking([], 0, 0)
  return result
}


```
### set

---
# 216.组合总和III

找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

* 只使用数字1到9
* 每个数字 **最多使用一次** 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

## 示例 

```
输入: k = 3, n = 7 输出: [[1,2,4]]
```

```
输入: k = 3, n = 9 输出: [[1,2,6], [1,3,5], [2,3,4]]
```

![combination-sum](../../static/img/back-tracking/combination-sum.png)

## 思路 

### 回溯
在[1,2,3,4,5,6,7,8,9]中找到和为 `n` 的 `k` 个数的集合

相当于就是一棵深度为 `k`, 宽度为 `n` 的 *N叉树*

根据回溯模板不难写出

```typescript 
export function combinationSum(n: number, k: number): number[][] {
  let sum: number = 0 
  const path: number[] = []

  function backTracking(start: number) {
    if(sum > n) return 
    if(path.length === k) { 
      if(sum === n) {
        result.push([...path])
      }
      return
    }

    for(let i = start ; i <= 9 - (k - path.length) + 1; i++) {
      sum += i
      path.push(i)

      backTracking(i + 1)

      sum -= i
      path.pop()

    }
  }

  const result: number[][] = []


  backTracking(1)

  return result
}
```

