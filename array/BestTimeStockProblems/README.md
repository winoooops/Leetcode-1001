# 121 买卖股票的最佳时机

You are given an array prices where `prices[i]` is the price of a given stock on the ith day.

You want to maximize your profit by choosing **a single day to buy** one stock and choosing **a different day** in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



## Example

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Solution

### Dynamic Programming
#### DP五部曲
1. dp的含义： `dp[i]` 表示在某天能够获得的最大收益， `dp[i][0]`表示持有股票的最大收益 , `dp[i][1]`表示卖出股票的最大收益
2. dp的递推公式
   * 如果持有股票， 那么可能是前一天已经持有股票`dp[i-1][0]`， 或者今天买入（注意本题目只允许购买一次， 所以为`0 - prices[i]`）
   * 如果不持有股票， 那么可能前一天已经卖出`dp[i-1][1]`， 或者今天卖出`dp[i-1][0] + prices[i]`
3. 初始值：`dp[0][0] = 0 - prices[0]; dp[0][1] = 0` 
4. 确定遍历方向: 按照股票方向
5. 带入例子
```java
public class Solution {
    public int bestTimeToSellDP(int[] prices)
    {
        int[][] dp = new int[prices.length][2];

        // dp[i][0] => holding the stock
        // dp[i][1] => not holding the stock
        dp[0][0] = 0 - prices[0];
        dp[0][1] = 0;

        for(int i = 1; i < prices.length; i++)
        {
            // because I can only buy and sell for once, so it could be 0 - prices[i]
            dp[i][0] = Math.max(dp[i-1][0], - prices[i]);
            dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] + prices[i]);
        }

        return dp[prices.length - 1][1];
    }
}
```


### 贪心
使用贪心算法的话， 那么最优的情况一定是在最小值时买入， 在最大值时候卖出(考虑到必须先买入再卖出）。

```java
public class Solution
{
   public int bestTimeToSellGreedy(int[] prices)
   {
      int min = Integer.MAX_VALUE;
      int profit = 0;

      for(int i = 0; i < prices.length; i++)
      {
         min = Math.min(min, prices[i]);
         profit = Math.max(profit, prices[i] - min);
      }

      return profit;
   }
}

```

# 122.买卖股票的最佳时机

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

## 示例

```
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4。随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

```
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 思路

### 贪心

贪心之处:在对于某一个交易来说, 获取最大收益的方式是每次只收取获利的交易

```typescript 
export function maxProfit(nums: number[]): number {
  let profit: number = 0

  for(let i = 1; i < nums.length; i++){
    profit += Math.max(nums[i] - nums[i - 1], 0)
  }

  return profit
}
```

### 动态规划

1. dp数组的每一个元素表示某一天能够获得的收益, 其中`dp[i][0]`表示某天持有股票说的现金, `dp[i][1]`表示不持有股票所得现金.
2. 递归公式:
* `dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - nums[i])`
* `dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])`
3. 初始化
* `dp[0][0] = 0 - nums[0]`
* `dp[0][1] = nums[0]`
4. 遍历顺序按照数组遍历
5. 举例

```typescript
export function maxProfit(nums: number[]): number {
  let profit: number = 0

  for(let i = 1; i < nums.length; i++){
    profit += Math.max(nums[i] - nums[i - 1], 0)
  }

  return profit
}

export function maxProfitWithDP(nums: number[]): number {
  const dp: number[][] = new Array(nums.length).fill(0).map(_ => new Array(2).fill(0))
  
  // 因为初始持有现金为0
  // 初始购买股票的话
  dp[0][0] = 0 - nums[0]
  // 初始不购买股票的湖
  dp[0][1] = 0
  
  for(let i = 1; i < nums.length ; i++) {
    // 从i - 1天开始便持有股票, 那么今天的所得现金就是昨天的所得现金dp[i - 1][0]
    // 从i 天开始持有股票, 那么今天所得现金就是昨天不持有股票的所得现金减去今天的股票价格 dp[i-1][1] - nums[i]
    dp[i][0] = Math.max(dp[i-1][0], dp[i - 1][1] - nums[i])

    // 如果从i - 1天就不再持有股票, )所得的现金就是昨天的不持有股票的现金dp[i-i][1]
    // 如果从i天开始不持有股票, 所得现金就是dp[i - 1][0] + nums[i]
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + nums[i])
  }

  return dp[nums.length - 1][1]
}
```




