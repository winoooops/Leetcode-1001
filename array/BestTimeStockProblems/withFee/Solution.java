package BestTimeStockProblems.withFee;

public class Solution {
    public int withFeeDP(int[] prices, int fee)
    {
        int[][] dp = new int[prices.length][2];
        dp[0][0] = -prices[0];
        dp[0][1] = 0;

        for(int i = 1; i < prices.length; i++)
        {
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
            dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i] - fee);
        }

        return dp[prices.length-1][1];
    }

    public int withFeeGreedy(int[] prices, int fee)
    {
        int profit = 0;
        int minPrice = prices[0];

        // buying:
        // if prices[i] < minPrice, buy in

        // selling:
        // 1) if prices[i] > minPrice + fee
        for(int i = 1; i < prices.length; i++)
        {
            if(prices[i] < minPrice) {
               minPrice = prices[i];
            } else if( prices[i] > minPrice + fee) {
                profit += prices[i] - minPrice - fee;
                // deduct fee to prevent further calculation where `futherProfit < fee`
                minPrice = prices[i] - fee;
            }
        }

        return profit;

    }
}
