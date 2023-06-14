# 买卖股票问题的公式

![tricksf](../../static/img/dp/stock-summary.png)


# 121 买卖股票的最佳时机I

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

# 122.买卖股票的最佳时机II

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

# 123.买卖股票的最佳时机III

给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成**两笔**交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。


## 示例

```
输入：prices = [3,3,5,0,0,3,1,4]
输出：6
解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
```

```
输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
```

```
输入：prices = [1]
输出：0
```

## 思路

### 动态规划
> 利用多维数组的实现第n次购买的条件的递推公式.

**DP五部曲**:
1. dp[i] 表示在第i天能获取到的最大利益, `dp[i][0]` 表示持有股票所获得的最大利润, `dp[i][0]` 表示未出有股票所获取的最大利润.
2. 递推公式: 
   * 如果第i天**第一次持有**股票, 那么就意味着可能在`i-1`天的时候已经第一次持有股票 或者是在第`i`天时候**首次购买**的股票; 
   * 如果在第i天**第一次未持有**股票, 那么就意味着在可能在第`i-1`天的时候就首次卖出股票, 或者在第`i`天的时候**首次卖出**的股票;
   * 如果在第i天**第二次持有**股票, 那么就意味着在第`i-1`天就已经第二次持有股票, 或者是在第`i`天的时候第二次购买的股票;
   * 如果在第i天**第二次未持有**股票, 那么就意味着在第`i-1`天就已经第二次持有股票, 或者在第`i`天的时候第二次购买的股票;
3. 初始值: 
   * `dp[i][0] = -price[i]` => 买
   * `dp[i][1] = 0` => 买,卖
   * `dp[i][2] = -price[i]` => 买,卖,买
   * `dp[i][3] = 0` => 买,卖,买,卖
4. 遍历方向: 按照天数遍历
5. 带入例子

```java
public class Solution {
    public int bestTimeToSell3DP(int[] prices)
    {
        if(prices==null || prices.length==0) {
            return 0;
        }
        int[][] dp = new int[prices.length][4];

        dp[0][0] = -prices[0];
        dp[0][1] = 0;
        dp[0][2] = -prices[0];
        dp[0][3] = 0;

        for(int i = 1; i < prices.length; i++)
        {
            dp[i][0] = Math.max(dp[i-1][0], -prices[i]);
            dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
            dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] - prices[i]);
            dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] + prices[i]);
        }

        return dp[prices.length-1][3];
    }
}
```

### 动态规划(空间优化版)

> 注意到在上面的例子中, 算出`dp[i][0]`之后, dp数组中的下个状态总是以来上一个状态, 因此

```java
public class Solution
{
   public int bestTimeToSell3DP2(int[] prices)
   {
      if(prices==null || prices.length==0) {
         return 0;
      }
      int dp0 = 0; // 初始值
      int dp1 = -prices[0]; // 第一次买入
      int dp2 = 0; // 第一次卖出
      int dp3 = -prices[0]; // 第二次买入
      int dp4 = 0; // 第二次卖出

      for(int i = 1; i < prices.length; i++)
      {
         dp1 = Math.max(dp1, dp0 - prices[i]);
         dp2 = Math.max(dp2, dp1 + prices[i]);
         dp3 = Math.max(dp3, dp2 - prices[i]);
         dp4 = Math.max(dp4, dp3 + prices[i]);
      }

      return dp4;
   }
}
```

# 188. Best Time to Buy and Sell Stock IV
     
You are given an integer array prices where `prices[i]` is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).



## Example

```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```
```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

## Solution 

### 二维DP

> 时间复杂度`O(nk)`, 空间复杂度`O(nk)`

```java
public class Solution {
    public int bestTimeToSell4DP(int k, int[] prices) {
        if (prices.length == 0) {
            return 0;
        }
        int states = k * 2;

        int[][] dp = new int[prices.length][states];

        for (int i = 0; i < states; i++) {
            dp[0][i] = i % 2 == 0 ? -prices[0] : 0;
        }

        for (int i = 1; i < prices.length; i++) {
            for (int j = 0; j < states; j++) {
                if (j % 2 == 0) {
                    if (j == 0) {
                        dp[i][j] = Math.max(dp[i - 1][j], -prices[i]);
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
                    }
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]);
                }
            }
        }

        return dp[prices.length - 1][states - 1];
    }
}
```


### DP with 2 arrays

** DP五部曲**
1. 使用两个dp数组`prev`和`curr`, 来表示过去和现在**每一笔(前后两次)交易里**每一天能够获得的最大利润
2. 递推公式: 
   * 那么当天能够取得的最大收益就是 **前一天的最大收益** 或者 **前一天买入今天卖出的收益** 两者的最大值; 
   * 每次交易完成时需要把截止到当前交易当前天数的最大收益储存在`prev`中
3. 遍历方向: 外层遍历交易数量, 内层遍历天数
4. 初始值: 
5. 带入例子

```java
class Solution {
   public int bestTimeToSell4DP2Array(int k, int[] prices)
   {
      int[] prev = new int[prices.length];
      int[] curr = new int[prices.length];
      int[] temp;

      for(int i = 1; i < k + 1; i++){
         int max = -Integer.MAX_VALUE;
         for(int j = 1; j < prices.length; j++)
         {
            max = Math.max(max, prev[j - 1] - prices[j-1]);
            curr[j] = Math.max(curr[j - 1], max + prices[j]);
            curr[j] = Math.max(curr[j-1], prev[j-1]-prices[j-1] + prices[j]);
         }
         temp = prev;
         prev = curr;
         curr = temp;
      }

      return prev[prices.length-1];
   }
}
```


# 714. 买卖股票的最佳时机(含手续费)

给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

## 示例

```
输入: prices = [1, 3, 2, 8, 4, 9], fee = 2 输出: 8

解释: 能够达到的最大利润: 在此处买入 prices[0] = 1 在此处卖出 prices[3] = 8 在此处买入 prices[4] = 4 在此处卖出 prices[5] = 9 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

```

```
输入：prices = [1,3,7,5,10,3], fee = 3
输出：6
```

## 思路

大致思路和 [122.买卖股票的最佳时机II] 类似, 但是这里因为有手续费的原因, 所以需要考虑到买卖利润不足以支付手续费的情况.

### 贪心

> 最低值买入, 最高值(算上手续费仍旧盈利)时卖出.


所以在遍历的时候, 需要考虑买入日期和卖出日期.
**未持有股票时**:
- 买入日期: 遇到价更低的点就买入, 不断更新最低价格

**有股票时**:
- 卖出日期: 只只满足 `当前价格 > 最低价格+手续费`, 持有日期就加一, 在获利最后一天时候卖出.
    - 情况一：收获利润的这一天并不是收获利润区间里的最后一天（不是真正的卖出，相当于持有股票），所以后面要继续收获利润。
    - 情况二：前一天是收获利润区间里的最后一天（相当于真正的卖出了），今天要重新记录最小价格了。
    - 情况三：不作操作，保持原有状态（买入，卖出，不买不卖）

```tsx
export function maxProfit(prices: number[], fee: number): number {
  if(!prices.length) return 0;

  let profit: number = 0;
  let minPrice: number = prices[0]

  for(let i = 1; i < prices.length; i++) {
    // 情况2, 买入
    if(prices[i] < minPrice) minPrice = prices[i]

    // 情况3, 买入不赚, 卖出亏本
    if(prices[i] >= minPrice && prices[i] <= minPrice + fee) continue

    // 情况1, 计算利润
    if(prices[i] > minPrice + fee) {
      profit += prices[i] - minPrice - fee;
      minPrice = prices[i] - fee; // 重点
    }
  }

  return profit
}

```

### 动态规划

```typescript
export function maxProfitDP(prices: number[], fee: number): number {
  const dp = new Array(prices.length).fill(0).map(_ => new Array(2).fill(0));

  // dp[i][0] holding
  // dp[i][1] not holding
  dp[0][0] = 0 - prices[0]
  dp[0][1] = 0;

  for(let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i -1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }

  return dp[dp.length - 1][1];
}
```

# 309.最佳买卖股票时机含冷冻期

给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

## 示例
```
输入: [1,2,3,0,2]
输出: 3
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: 
Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. 
Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
对应的交易状态为: [不操作, 买入, 卖出, 冷冻期, 不操作, 买入, 卖出]
```


## 思路 


### DP
> 考虑到冷冻期的存在, 那么就必须把前一天刚卖出和前一天未持有两个状态分开. 所以 必须存在4个状态`持有, 今天前就未持有, 今天卖出, 今天冷冻期`

DP五部曲
1. `dp[i]` means till `i`th day, the maximum profit I can earn. `dp[i][0]`,`dp[i][1]`,`dp[i][2]`,`dp[i][3]`, means the 4 states mentioned before.
2. logic in each iteration: 
   * `dp[i][0]` means holding the stock: so `i-1`th day might already hold it, or `i-1` day is a freeze day(just brough the stock today), or `i-1` day alrayd has nothing
   * `dp[i][1]` means not holding the stock(but didn't sell today): already not holding in `i-1` day, or `i-1` is freeze day 
   * `dp[i][2]` means just sold it today: it could only mean holding on `i-1` day and sell today
   * `dp[i][2]` means freeze day: it could only mean sold the stock on `i-1` day   
3. iteration direction: days
4. init values: Expept for `dp[i][0] = -prices`, everything else is `0`.
5. using an actual example
```java
public class Solution {
    public int withCoolDownDP(int[] prices)
    {
       int[][] dp = new int[prices.length][4];
       // 0 => holding, 1 => not holding, 2 => sell the stock, 3 => in freeze
       dp[0][0] = -prices[0];
       dp[0][1] = 0;
       dp[0][2] = 0;
       dp[0][3] = 0;

       for(int i = 1; i < prices.length; i++)
       {
           // holding: already hold in `i-1` day, or already sold before`i-1` buy today, or today is freeze day
           dp[i][0] = Math.max(dp[i-1][0], Math.max(dp[i-1][1]-prices[i], dp[i-1][3] - prices[i]));
           // not holding: already not holding in `i-1` day, or `i-1` is freeze day
           dp[i][1] = Math.max(dp[i-1][1], dp[i-1][3]);
           // sell today, `i-1` is freeze day, or holding on `i-1` day and sell todya
           dp[i][2] = dp[i-1][0] + prices[i];
           // freezeday => just sold on `i-1`
           dp[i][3] = dp[i-1][2];
       }

       // freeze day, already sold, or just sell
       return Math.max(Math.max(dp[prices.length-1][3],dp[prices.length-1][1]), dp[prices.length-1][2]);
    }
}

```