# 53.最大子树组和

给你一个整数数组 nums ，请你找出一个具有**最大和**的**连续子数组**（子数组最少包含一个元素），返回其最大和。

## 示例 
```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

```
输入：nums = [1]
输出：1
```

```
输入：nums = [5,4,-1,7,8]
输出：23
```

## 思路 

### 贪心
> 不能让**“连续和”为负数**的时候加上下一个元素，而不是**不让“连续和”加上一个负数**。

贪心所在处: 当最大连续和为负数的时候抛弃, 因为负数只会拉低总和所以需要立即放弃. 如此一来, 全局就能够取到最大和. 


```typescript 
export function maxSubArray(nums: number[]): number {
  let sum: number = 0 
  let result: number = -Infinity

  for(let i = 0; i < nums.length ;i++) {
    sum += nums[i]
    result = Math.max(result, sum)
    if(sum < 0) sum = 0
  }

  return result
}
```

### 动态规划
```typescript 
export function maxSubArrayWithDP(nums: number[]): number {
  if(!nums.length) return 0

  let result = nums[0]
  const dp: number[] = []
  dp[0] = nums[0]

  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    result = Math.max(result, dp[i])
  }

  return result
}
```

