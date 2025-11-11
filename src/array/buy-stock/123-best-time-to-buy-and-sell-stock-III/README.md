# 123. Best Time to Buy and Sell Stock III

## Problem
`prices[i]` gives the stock price on day `i`. You may complete **at most two** buy/sell transactions and cannot hold more than one share at a time. Return the maximum profit.

Examples:
- `[3,3,5,0,0,3,1,4]` → 6 (buy 0→sell 3, buy 1→sell 4)
- `[1,2,3,4,5]` → 4 (single buy on day 1, sell on day 5)
- `[7,6,4,3,1]` → 0 (no profitable trade)
- `[1]` → 0 (not enough days)

## Dynamic Programming (4 States)
Track four states per day representing the best cash balance after each step in the sequence buy → sell → buy → sell:

| State | Meaning | Initialization |
| --- | --- | --- |
| `dp[i][0]` | First buy (currently holding) | `-prices[0]` |
| `dp[i][1]` | First sell (no position) | `0` |
| `dp[i][2]` | Second buy (holding again) | `-prices[0]` |
| `dp[i][3]` | Second sell (final cash) | `0` |

Why is the second-buy state also `-prices[0]`? Think of day 0 as having `0` cash for every “pre-trade” state. Buying—even if it eventually belongs to the second transaction—still costs `prices[0]`, so we start that state at `0 - prices[0]` to keep the recurrence consistent without special cases.

Transitions:
- `dp[i][0] = max(dp[i-1][0], -prices[i])`  
  (either keep holding from yesterday or buy today as first trade)
- `dp[i][1] = max(dp[i-1][1], dp[i-1][0] + prices[i])`  
  (either keep cash from previous sell or sell first position today)
- `dp[i][2] = max(dp[i-1][2], dp[i-1][1] - prices[i])`  
  (either keep second holding or buy again after first sell)
- `dp[i][3] = max(dp[i-1][3], dp[i-1][2] + prices[i])`  
  (either keep final cash or complete the second sell today)

Answer: `dp[n-1][3]`.

```ts
export function maxProfitWithTwoTransactions(prices: number[]): number {
  if (prices.length === 0) return 0;
  const dp = Array.from({length: prices.length}, () => [0, 0, 0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = -prices[0];
  dp[0][3] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]);
  }

  return dp[prices.length - 1][3];
}
```

## Space Optimization
Each state depends only on the previous day, so the DP table can be flattened to four scalars:

```ts
export function maxProfitWithTwoTransactionsOptimized(prices: number[]): number {
  if (prices.length === 0) return 0;
  let firstBuy = -prices[0];
  let firstSell = 0;
  let secondBuy = -prices[0];
  let secondSell = 0;

  for (let i = 1; i < prices.length; i++) {
    firstBuy = Math.max(firstBuy, -prices[i]);
    firstSell = Math.max(firstSell, firstBuy + prices[i]);
    secondBuy = Math.max(secondBuy, firstSell - prices[i]);
    secondSell = Math.max(secondSell, secondBuy + prices[i]);
  }

  return secondSell;
}
```

This achieves `O(n)` time and `O(1)` additional space while preserving the same transitions as the full DP table.
