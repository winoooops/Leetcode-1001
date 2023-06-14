package BestTimeStockProblems.IV;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
        "2, 2 4 1, 2",
        "2, 3 2 6 5 0 3, 7"
    })
    void testBestTimeToSell4DP(int k, String priceStr, int expected)
    {
       int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
       Solution solution = new Solution();
       int result = solution.bestTimeToSell4DP(k, prices);
       Assertions.assertEquals(expected, result);
    }


    @ParameterizedTest
    @CsvSource({
            "2, 2 4 1, 2",
            "2, 3 2 6 5 0 3, 7"
    })
    void testBestTimeToSell4DP2Array(int k, String priceStr, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.bestTimeToSell4DP2Array(k, prices);
        Assertions.assertEquals(expected, result);
    }
}
