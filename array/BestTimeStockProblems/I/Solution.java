package BestTimeStockProblems.I;

/**
 * TODO: add javadoc
 *
 * @author wwang
 */
public class Solution {
    public int bestTimeToSellDP(int[] prices)
    {
        int[][] dp = new int[prices.length][2];
        // dp[i][0] => holding the stock
        // dp[i][1] => not holding the stock
        dp[0][0] = 0 - prices[0];
        dp[0][1] = 0;

        for(int i = 1; i < prices.length; i++)
        {
            // because I can only buy and sell for once, so it could be 0 - prices[i]
            dp[i][0] = Math.max(dp[i-1][0], - prices[i]);
            dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] + prices[i]);
        }

        return dp[prices.length - 1][1];
    }

    public int bestTimeToSellGreedy(int[] prices)
    {
        int min = Integer.MAX_VALUE;
        int profit = 0;

        for(int i = 0; i < prices.length; i++)
        {
            min = Math.min(min, prices[i]);
            profit = Math.max(profit, prices[i] - min);
        }

        return profit;
    }
}
