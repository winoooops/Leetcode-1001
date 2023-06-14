package BestTimeStockProblems.withCooldown;

public class Solution {
    public int withCoolDownDP(int[] prices)
    {
       int[][] dp = new int[prices.length][4];
       // 0 => holding, 1 => not holding, 2 => sell the stock, 3 => in freeze
       dp[0][0] = -prices[0];
       dp[0][1] = 0;
       dp[0][2] = 0;
       dp[0][3] = 0;

       for(int i = 1; i < prices.length; i++)
       {
           // holding: already hold in `i-1` day, or already sold before`i-1` buy today, or today is freeze day
           dp[i][0] = Math.max(dp[i-1][0], Math.max(dp[i-1][1]-prices[i], dp[i-1][3] - prices[i]));
           // not holding: already not holding in `i-1` day, or `i-1` is freeze day
           dp[i][1] = Math.max(dp[i-1][1], dp[i-1][3]);
           // sell today, `i-1` is freeze day, or holding on `i-1` day and sell todya
           dp[i][2] = dp[i-1][0] + prices[i];
           // freezeday => just sold on `i-1`
           dp[i][3] = dp[i-1][2];
       }

       // freeze day, already sold, or just sell
       return Math.max(Math.max(dp[prices.length-1][3],dp[prices.length-1][1]), dp[prices.length-1][2]);
    }
}
