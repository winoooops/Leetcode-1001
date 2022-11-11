# 416.分割等和子集

给你一个**只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

 

## 示例

```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

```
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```


## 思路

这道题目是要找是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。那么只要找到集合里能够出现 sum / 2 的子集总和，就算是可以分割成两个相同元素和子集了。

### 0/1背包

因为这道题目中要求每个数字只能在集合中出现一次, 所以本质上和0/1背包问题是一样的. 所以我们可以用背包的逻辑来转换这道题目. 

* 背包的大小是 `sum / 2`;
* 背包中物品的 **重量** 和 **价值** 都为 `nums[i]`;
* 如果背包正好装满, 就说明了找到总和为 `sum / 2` 的元素

> 只要判断 容量为 sum/2 的背包最后是否正好能装下 sum/2 的元素即可. 

### 动态规划五部曲 

1. `dp[j]` 表示最大可以凑成的子集总和, 其中 `j` 表示背包的容量
2. 递推公式: `dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])`
3. 初始值: `dp[0] = 0`
4. 遍历顺序: 第一层根据物品的顺序遍历, 第二层根据背包的容量从大到小遍历
5. 例子推倒:
   ![416-example](../../../static/img/dp/416.png)


### 完整代码 
```typescript 
export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((prev: number, curr: number) => prev + curr, 0);
  if(sum % 2 === 1) return false; 

  const size = sum / 2; 
  const dp: number[] = new Array(size + 1).fill(0);
  dp[0] = 0;

  for(let i = 0; i < nums.length; i++) {
    for(let j = size; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[size] === size;
}
```
