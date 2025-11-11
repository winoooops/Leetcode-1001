export function maxProfitWithTwoTransactions(prices: number[]): number {
  if (prices.length === 0) return 0;

  // dp[i] stands for the max profit one can have in i day, where
  //  * dp[i][0] means holding the stock for the 1st time
  //  * dp[i][1] means have sold the stock for the 1st time
  //  * dp[i][2] means holding the stock for the 2nd time
  //  * dp[i][3] means have sold the stock for the 3rd time
  const dp = Array.from({length: prices.length}, () => [0, 0, 0, 0]);

  dp[0][0] = 0 - prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0 - prices[0];
  dp[0][3] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], 0 - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]);
  }

  return dp[prices.length - 1][3];
}

export function maxProfitWithTwoTransactionsOP(prices: number[]): number {
  if (prices.length === 0) return 0;

  let firstBuy = 0 - prices[0];
  let firstSell = 0;
  let secondBuy = 0 - prices[0];
  let secondSell = 0;

  for (let i = 1; i < prices.length; i++) {
    firstBuy = Math.max(firstBuy, 0 - prices[i]);
    firstSell = Math.max(firstSell, firstBuy + prices[i]);
    secondBuy = Math.max(secondBuy, firstSell - prices[i]);
    secondSell = Math.max(secondSell, secondBuy + prices[i]);
  }

  return secondSell;
}
