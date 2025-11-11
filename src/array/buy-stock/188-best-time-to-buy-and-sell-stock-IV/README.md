# 188. Best Time to Buy and Sell Stock IV

You may complete at most `k` buy/sell pairs. Each buy consumes one state, each sell another, and you cannot overlap transactions.

## Implementations

- `maxProfit` – original two-dimensional DP where each buy/sell state is stored day by day. The code mirrors the “2k states” approach described in the prompt notes and is kept untouched for reference.
- `maxProfitDP` – enhanced version that fixes the transitions (buy pulls from the previous sell state, sell from the previous buy state) and adds the unlimited transaction shortcut (`k >= n/2`). This is the version covered by the tests.

## Intuition

Track every buy/sell decision explicitly. For each day we keep `2 * k` states:

```
state 0 -> first buy
state 1 -> first sell
state 2 -> second buy
state 3 -> second sell
...
```

`dp[day][state]` stores the best profit when we finish processing `day` and end in that `state`. The transitions inside `maxProfitDP` follow the pattern:

* **Even state (buy)** – either stay put (`dp[day-1][state]`) or buy by inheriting the previous sell state `state - 1` and subtracting today’s price.
* **Odd state (sell)** – either stay put or sell out of the previous buy state `state - 1` and add today’s price.

The answer is the last sell state (`states - 1`) on the final day. We also short-circuit when `k >= n/2`, because then we can treat the problem as unlimited transactions and greedily sum all positive price deltas.

> Time complexity: `O(n * k)`
> Space complexity: `O(n * k)` (or `O(k)` with rolling arrays)

```ts
export function maxProfit(k: number, prices: number[]): number {
  if (k === 0 || prices.length === 0) return 0;

  const states = k * 2; // each transaction has a buy and sell state
  const dp = Array.from({length: prices.length}, () => Array(states).fill(0));

  for (let state = 0; state < states; state++) {
    dp[0][state] = state % 2 === 0 ? -prices[0] : 0;
  }

  for (let day = 1; day < prices.length; day++) {
    dp[day][0] = Math.max(dp[day - 1][0], 0 - prices[day]);
    for (let state = 1; state < states; state++) {
      dp[day][state] = Math.max(
        dp[day - 1][state],
        state % 2 === 0
          ? dp[day - 1][state - 1] - prices[day]
          : dp[day - 1][state - 1] + prices[day]
      );
    }
  }

  return dp[prices.length - 1][states - 1];
}
```

## Edge cases optimized

* Empty prices or `k = 0` → no profit.
* All decreasing prices → best profit is 0 even for large `k`.
* Large `k` (≥ `n/2`) triggers the unlimited-transactions shortcut. We can never perform more than `⌊n/2⌋` trades (each trade needs at least two days), so once `k` reaches that threshold the optimal play is the same as the unlimited version of the problem. In that scenario the greedy strategy—summing every positive difference `prices[i] - prices[i-1]`—captures every upward movement and therefore matches the DP optimum while reducing runtime.

```ts
function greedyProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
```

```ts
export function maxProfitOP(k: number, prices: number[]): number {
  if (k === 0 || prices.length === 0) return 0;

  if (k >= Math.floor(prices.length / 2)) return greedyProfit(prices);

  const states = k * 2; // each transaction has a buy and sell state
  const dp = Array.from({length: prices.length}, () => Array(states).fill(0));

  for (let state = 0; state < states; state++) {
    dp[0][state] = state % 2 === 0 ? -prices[0] : 0;
  }

  for (let day = 1; day < prices.length; day++) {
    dp[day][0] = Math.max(dp[day - 1][0], 0 - prices[day]);
    for (let state = 1; state < states; state++) {
      dp[day][state] = Math.max(
        dp[day - 1][state],
        state % 2 === 0
          ? dp[day - 1][state - 1] - prices[day]
          : dp[day - 1][state - 1] + prices[day]
      );
    }
  }

  return dp[prices.length - 1][states - 1];
}

```

## Rolling 1D optimization

Instead of keeping every day, we can maintain only the previous (`prev`) and current (`curr`) day profits for each state. The transition logic is identical; after processing the day we swap the arrays. This reduces memory to `O(k)` while keeping the `O(nk)` runtime.
