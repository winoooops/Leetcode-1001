package BestTimeStockProblems.II;

/**
 * TODO: add javadoc
 *
 * @author wwang
 */
public class Solution {
    public int bestTimeToSellIIDP(int[] prices)
    {
        int[][] dp = new int[prices.length][2];
        dp[0][0] = 0 - prices[0];
        dp[0][1] = 0;

        for(int i = 1; i < prices.length; i++)
        {
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
            dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
        }

        return dp[prices.length-1][1];
    }

    public int bestTimeToSellIIGreedy(int[] prices)
    {
        int profit = 0;
        for(int i = 1; i < prices.length; i++)
        {
            profit += Math.max(0, prices[i] - prices[i - 1]);
        }

        return profit;
    }
}
