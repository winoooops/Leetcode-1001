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
使用贪心算法的话， 那么最优的情况一定是从左边买入， 在右边卖出