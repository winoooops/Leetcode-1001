package BestTimeStockProblems.IV;

import java.util.Arrays;

public class Solution {
   public int bestTimeToSell4DP(int k, int[] prices)
   {
        if(prices.length == 0 || prices == null)
        {
            return 0;
        }
        int states = k * 2;

        int[][] dp = new int[prices.length][states];

        for(int i = 0; i < states; i++){
           dp[0][i] = i % 2 == 0 ? -prices[0] : 0;
        }

        for(int i = 1; i < prices.length; i++)
        {
           for(int j = 0; j < states; j++){
               if(j % 2 == 0) {
                   if(j == 0) {
                       dp[i][j] = Math.max(dp[i-1][j], -prices[i]);
                   } else {
                       dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-1] - prices[i]);
                   }
               } else {
                   dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-1] + prices[i]);
               }
           }
        }

        return dp[prices.length-1][states-1];
   }

   public int bestTimeToSell4DP2Array(int k, int[] prices)
   {
      int[] prev = new int[prices.length];
      int[] curr = new int[prices.length];
      int[] temp;

      for(int i = 1; i < k + 1; i++){
          int max = -Integer.MAX_VALUE;
          for(int j = 1; j < prices.length; j++)
          {
              max = Math.max(max, prev[j - 1] - prices[j-1]);
              curr[j] = Math.max(curr[j - 1], max + prices[j]);
          }
          temp = prev;
          prev = curr;
          curr = temp;
      }

      return prev[prices.length-1];
   }

}
