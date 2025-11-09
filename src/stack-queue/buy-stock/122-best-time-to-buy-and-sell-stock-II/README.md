# 122. Best Time to Buy and Sell Stock II

## Problem
`prices[i]` gives the stock price on day `i`. You may complete as many buy/sell transactions as you like, but you must sell before buying again. Return the maximum profit.

Examples:
- `[7,1,5,3,6,4]` → 7 (buy 1 sell 5, then buy 3 sell 6)
- `[1,2,3,4,5]` → 4 (buy day 1, sell day 5)
- `[7,6,4,3,1]` → 0 (no profitable trade)

## Greedy
Every positive price difference contributes to the total profit, so summing all upward moves is optimal when there is no transaction fee.

```ts
export function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(prices[i] - prices[i - 1], 0);
  }
  return profit;
}
```

## Dynamic Programming
Define `dp[i][0]` as the cash on day `i` while holding a stock and `dp[i][1]` as the cash while not holding a stock.

Transitions:
- `dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i])`
- `dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i])`

Initialization:
- `dp[0][0] = -prices[0]`
- `dp[0][1] = 0`

Answer: `dp[n - 1][1]`.

```ts
export function maxProfitDP(prices: number[]): number {
  if (prices.length === 0) {
    return 0;
  }
  // dp[i] stands for the maxProfit of the given day
  // const dp = Array.from({length: prices.length}, () => [0, 0]);
  const dp = Array.from({length: prices.length}, () => [0, 0]);
  // 0 means the max profit of holding
  // 1 means the max profit of not holding
  dp[0][0] = 0 - prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    // the max profit of holding a stock could be:
    //   a) already holding the stock
    //   b) have cash and choose to buy the stock today
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    // the max profit of not holding a stock could be:
    //   a) already holding nothing but cash
    //   b) have the stock and decide to sell today
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  return dp[prices.length - 1][1];
}
```
