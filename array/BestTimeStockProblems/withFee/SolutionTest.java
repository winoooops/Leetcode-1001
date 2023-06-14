package BestTimeStockProblems.withFee;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "1 3 2 8 4 9, 2, 8",
            "1 3 7 5 10 3, 3, 6"
    })
    void testWithFeeDP(String priceStr, int fee, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.withFeeDP(prices, fee);
        Assertions.assertEquals(expected, result);
    }

    @ParameterizedTest
    @CsvSource({
            "1 3 2 8 4 9, 2, 8",
            "1 3 7 5 10 3, 3, 6"
    })
    void testWithFeeGreedy(String priceStr, int fee, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.withFeeGreedy(prices, fee);
        Assertions.assertEquals(expected, result);
    }

}
