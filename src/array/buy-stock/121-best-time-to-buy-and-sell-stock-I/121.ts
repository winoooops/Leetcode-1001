export function maxProfitGreedy(prices: number[]): number {
  let profit = 0;
  let min = prices[0];

  for (const price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }

  return profit;
}

export function maxProfitDP(prices: number[]): number {
  const dp: number[][] = Array.from(prices).map(() => new Array(2));
  // 0 => holding stock, 1 => not holding stock
  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  return dp[prices.length - 1][1];
}

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
