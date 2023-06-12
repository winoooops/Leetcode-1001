package BestTimeStockProblems.III;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "3 3 5 0 0 3 1 4, 6",
            "1 2 3 4 5, 4",
            "7 6 5 3 1, 0",
            "1,0"
    })
    void testBestTimeToSellStock3DP(String priceStr, int expected)
    {
       int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
       Solution solution = new Solution();

       int result = solution.bestTimeToSell3DP(prices);
       Assertions.assertEquals(expected, result);
    }


    @ParameterizedTest
    @CsvSource({
            "3 3 5 0 0 3 1 4, 6",
            "1 2 3 4 5, 4",
            "7 6 5 3 1, 0",
            "1,0"
    })
    void testBestTimeToSellStock3DP2(String priceStr, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();

        int result = solution.bestTimeToSell3DP2(prices);
        Assertions.assertEquals(expected, result);
    }
}
