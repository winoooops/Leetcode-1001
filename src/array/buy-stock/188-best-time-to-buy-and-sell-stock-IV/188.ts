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

function greedyProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

export function maxProfit1D(k: number, prices: number[]): number {
  if (k === 0 || prices.length === 0) return 0;
  if (k >= Math.floor(prices.length / 2)) return greedyProfit(prices);
  const states = k * 2;
  const dp: number[] = Array(states - 1).fill(0);

  for (let i = 0; i < states; i++) {
    dp[i] = i % 2 === 0 ? 0 - prices[0] : 0;
  }

  for (let day = 1; day < prices.length; day++) {
    for (let state = 0; state < states; state++) {
      if (state === 0) {
        dp[state] = Math.max(dp[state], -prices[day]);
      } else {
        const pnl = state % 2 === 0 ? -prices[day] : prices[day];
        dp[state] = Math.max(dp[state], dp[state - 1] + pnl);
      }
    }
  }

  return dp[states - 1];
}
