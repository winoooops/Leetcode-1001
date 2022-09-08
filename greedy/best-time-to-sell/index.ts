export function maxProfit(nums: number[]): number {
  let profit: number = 0

  for(let i = 1; i < nums.length; i++){
    profit += Math.max(nums[i] - nums[i - 1], 0)
  }

  return profit
}

export function maxProfitWithDP(nums: number[]): number {
  const dp: number[][] = new Array(nums.length).fill(0).map(_ => new Array(2).fill(0))
  
  // 因为初始持有现金为0
  // 初始购买股票的话
  dp[0][0] = 0 - nums[0]
  // 初始不购买股票的湖
  dp[0][1] = 0
  
  for(let i = 1; i < nums.length ; i++) {
    // 从i - 1天开始便持有股票, 那么今天的所得现金就是昨天的所得现金dp[i - 1][0]
    // 从i 天开始持有股票, 那么今天所得现金就是昨天不持有股票的所得现金减去今天的股票价格 dp[i-1][1] - nums[i]
    dp[i][0] = Math.max(dp[i-1][0], dp[i - 1][1] - nums[i])

    // 如果从i - 1天就不再持有股票, )所得的现金就是昨天的不持有股票的现金dp[i-i][1]
    // 如果从i天开始不持有股票, 所得现金就是dp[i - 1][0] + nums[i]
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + nums[i])
  }

  return dp[nums.length - 1][1]
}
