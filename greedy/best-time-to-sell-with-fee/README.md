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
注意:

* `0 < prices.length <= 50000`.
* `0 < prices[i] < 50000`.
* `0 <= fee < 50000`.

## 思路 

大致思路和[买卖股票的最佳时机](../best-time-to-sell/)类似, 但是这里因为有手续费的原因, 所以需要考虑到买卖利润不足以支付手续费的情况. 

### 贪心 

> 最低值买入, 最高值(算上手续费仍旧盈利)时卖出. 

所以在遍历的时候, 需要考虑买入日期和卖出日期.

* 买入日期: 遇到价更低的点就买入
* 卖出日期: 只只满足 `当前价格 > 最低价格+手续费`, 持有日期就加一, 在获利最后一天时候卖出. 
  * 情况一：收获利润的这一天并不是收获利润区间里的最后一天（不是真正的卖出，相当于持有股票），所以后面要继续收获利润。
  * 情况二：前一天是收获利润区间里的最后一天（相当于真正的卖出了），今天要重新记录最小价格了。
  * 情况三：不作操作，保持原有状态（买入，卖出，不买不卖）

```typescript
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
