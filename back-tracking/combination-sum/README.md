# 组合总和III

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

