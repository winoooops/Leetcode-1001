# 121. Best Time to Buy and Sell Stock I

Given stock prices `prices[i]` on day `i`, choose one buy day and one later sell day to maximize profit. If the price never increases, profit is `0`.

## Examples
```
Input:  [7,1,5,3,6,4]
Output: 5  // buy at 1 (day 2), sell at 6 (day 5)
```
```
Input:  [7,6,4,3,1]
Output: 0  // price never rises
```

## Approaches

### Brute Force (O(n²))
Check every `(buy, sell)` pair:
- For each day `i`, try selling on all future days `j > i`.
- Track `profit = max(profit, prices[j] - prices[i])`.
Simple to reason about but too slow for long inputs.

### Single-Pass Greedy (O(n) / O(1))
Maintain the cheapest price seen so far and the best profit:
1. Initialize `minPrice = prices[0]`, `profit = 0`.
2. For each `price`:
   - `minPrice = min(minPrice, price)` (best buying price so far).
   - `profit = max(profit, price - minPrice)`.
3. Return `profit`.
This matches `maxProfitGreedy`; it constantly asks “if I sold today, how much would I make based on the best buy so far?”

```ts
export function maxProfitGreedy(prices: number[]): number {
  let profit = 0;
  let min = prices[0];

  for (const price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }

  return profit;
}
```

### Dynamic Programming (Explicit Table)
Model the problem with two states per day:
- `dp[i][0]`: max profit on day `i` **while holding** a stock.
- `dp[i][1]`: max profit on day `i` **without holding** a stock.

Transitions (only one buy and one sell allowed):
```
dp[i][0] = max(dp[i-1][0], -prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-1][0] + prices[i])
```
Base case:
```
dp[0][0] = -prices[0]
dp[0][1] = 0
```
Answer: `dp[n-1][1]`.

```ts
export function maxProfitDP(prices: number[]): number {
  const dp: number[][] = Array.from(prices).map(_ => new Array(2));
  // 0 => holding stock, 1 => not holding stock
  dp[0][0] = 0 - prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], 0 - prices[0]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  return dp[prices.length - 1][1];
}
```

### Optimized DP (Rolling Variables)
Observe that each state depends only on the previous day, so we can compress the table into two scalars:
```
holder    // profit while holding a stock
nonHolder // profit without holding
```
Initialization:
```
holder = -prices[0]
nonHolder = 0
```
Iteration:
```
holder = max(holder, -prices[i])
nonHolder = max(nonHolder, holder + prices[i])
```
Result: `nonHolder`. This is exactly `maxProfitDPOP` and mirrors the greedy logic while keeping the DP interpretation.

```ts
export function maxProfitDPOP(prices: number[]): number {
  let holder = -prices[0];
  let nonHolder = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const newHolder = Math.max(holder, -price);
    const newNonHolder = Math.max(nonHolder, holder + price);
    holder = newHolder;
    nonHolder = newNonHolder;
  }

  return nonHolder;
}
```

## Complexity Summary
| Approach               | Time  | Space | Notes                                   |
| ---------------------- | ----- | ----- | --------------------------------------- |
| Double loop            | O(n²) | O(1)  | TLE for large inputs                    |
| Greedy min-track       | O(n)  | O(1)  | Recommended practical solution          |
| DP (table)             | O(n)  | O(n)  | Makes the state transitions explicit    |
| Optimized DP (rolling) | O(n)  | O(1)  | Same as greedy but framed as DP states  |
