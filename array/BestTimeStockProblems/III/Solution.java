package BestTimeStockProblems.III;

public class Solution {
    public int bestTimeToSell3DP(int[] prices)
    {
        if(prices==null || prices.length==0) {
            return 0;
        }
        int[][] dp = new int[prices.length][4];

        dp[0][0] = -prices[0];
        dp[0][1] = 0;
        dp[0][2] = -prices[0];
        dp[0][3] = 0;

        for(int i = 1; i < prices.length; i++)
        {
            dp[i][0] = Math.max(dp[i-1][0], -prices[i]);
            dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
            dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] - prices[i]);
            dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] + prices[i]);
        }

        return dp[prices.length-1][3];
    }

    public int bestTimeToSell3DP2(int[] prices)
    {
        if(prices==null || prices.length==0) {
            return 0;
        }
        int dp0 = 0; // 初始值
        int dp1 = 0 - prices[0]; // 第一次买入
        int dp2 = 0; // 第一次卖出
        int dp3 = 0 - prices[0]; // 第二次买入
        int dp4 = 0; // 第二次卖出

        for(int i = 1; i < prices.length; i++)
        {
            dp1 = Math.max(dp1, dp0 - prices[i]);
            dp2 = Math.max(dp2, dp1 + prices[i]);
            dp3 = Math.max(dp3, dp2 - prices[i]);
            dp4 = Math.max(dp4, dp3 + prices[i]);
        }

        return dp4;
    }
}
