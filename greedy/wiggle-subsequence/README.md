# 376.摆动序列

如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。

例如， `[1, 7, 4, 9, 2, 5]` 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。

相反，`[1, 4, 7, 2, 5]` 和 `[1, 7, 4, 5, 5]` 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。

**子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序.**

给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。

## 示例

```
输入：nums = [1,7,4,9,2,5]
输出：6
解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。
```

```
输入：nums = [1,17,5,10,13,15,10,5,16,8]
输出：7
解释：这个序列包含几个长度为 7 摆动序列。
其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。
```
## 思路 

### 贪心算法 

这里的关键是“本题要求通过从原始序列中删除一些（也可以不删除）元素来获得子序列，剩下的元素保持其原始顺序.”这句话.

从局部最优的角度出发, 那就要求我们删除单调区间上的节点; 从整体最优的角度出发, 这么做就能够保证整个序列有最多的局部峰值

> 实际操作上，**其实连删除的操作都不用做**，因为题目要求的是最长摆动子序列的长度，所以只需要统计数组的峰值数量就可以了（相当于是删除单一坡度上的节点，然后统计长度）


```typescript 
export function wiggleMaxLength(nums: number[]): number {
  let count: number = 1 
  if(nums.length <= 1) return count 

  let preDiff: number = 0 
  let currDiff: number = 0 

  for(let i = 1; i < nums.length; i++) {
    currDiff = nums[i] - nums[i - 1]

    if(
      (preDiff <= 0 && currDiff > 0) || 
      (preDiff >= 0 && currDiff < 0)
    ) {
      preDiff = currDiff
      count++
    }
  }

  return count 
}
```

## 动态规划

注意到此题只问了最长的摆动序列很容易可以发现，对于我们当前考虑的这个数，要么是作为山峰（即nums[i] > nums[i-1]），要么是作为山谷（即nums[i] < nums[i - 1]）,

对于动态规划的数组来说, 每一个元素都是一个长度为2的数组, 分别对应着波峰或者波谷
初始状态`dp[i][0] = dp[i][1] = 1`
* 设dp状态`dp[i][0]`，表示考虑前i个数，第i个数作为山峰的摆动子序列的最长长度
* 设dp状态`dp[i][1]`，表示考虑前i个数，第i个数作为山谷的摆动子序列的最长长度

则转移方程为：

`dp[i][0] = max(dp[i][0], dp[j][1] + 1)`，其中`0 < j < i`且`nums[j] < nums[i]`，表示将nums[i]接到前面某个山谷后面，作为山峰。
`dp[i][1] = max(dp[i][1], dp[j][0] + 1)`，其中`0 < j < i`且`nums[j] > nums[i]`，表示将nums[i]接到前面某个山峰后面，作为山谷。

```typescript 
export function wiggleMaxLengthWithDP(nums: number[]): number {
  const count: number = 1 
  if(nums.length <= 1) return count 

  const dp: number[][] = new Array(nums.length).fill(0).map(_ => [])
  dp[0][0] = 1 // 第一个数同时为波峰和波谷
  dp[0][1] = 1

  for(let i = 1; i < nums.length; i++) {
    dp[i][0] = 1 
    dp[i][1] = 1

    for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
    }

    for (let j = 0; j < i; j++) {
        if (nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
    }
  }

  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
}
```
