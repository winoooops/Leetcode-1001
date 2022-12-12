# 377. 组合总和 Ⅳ

给你一个由 不同 整数组成的数组 `nums` ，和一个目标整数 `target` 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。


## 示例

```
输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
```

```
输入：nums = [9], target = 3
输出：0
```

## 思路 

因为同一个元素可以出现好多次， 所以这里需要用到**完全背包**的思路， 也就是每一个数字都可以被重复使用。注意， 这里顺序的不同代表新的组合， 所以本质上是一个排列问题。 

> 求组合数是外层遍历物品， 内层遍历背包； 求排列数就是外层遍历背包， 内层遍历物品。 

```typescript 
export function combinationSum(nums: number[], target: number) {
  const dp: number[] = new Array(target + 1).fill(0);

  dp[0] = 1; 

  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      // 需要判断是否有意义
      if (i >= nums[j]) {
        dp[i] = dp[i] + dp[i - nums[j]]
      }
    }
  }

  return dp[target];
}
```




 