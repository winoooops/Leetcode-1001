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
