export function maxProfitGreedy(prices: number[]): number {
  if (prices.length === 0) {
    return 0;
  }
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(0, prices[i] - prices[i - 1]);
  }

  return profit;
}

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
