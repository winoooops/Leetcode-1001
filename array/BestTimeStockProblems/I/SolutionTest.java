package BestTimeStockProblems.I;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

/**
 * TODO: add javadoc
 *
 * @author wwang
 */
public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "7 1 5 3 6 4, 5",
            "7 6 4 3 1, 0"
    })
    void testDP(String priceStr, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.bestTimeToSellDP(prices);

        Assertions.assertEquals(expected, result);
    }

    @ParameterizedTest
    @CsvSource({
            "7 1 5 3 6 4, 5",
            "7 6 4 3 1, 0"
    })
    void testGreedy(String priceStr, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.bestTimeToSellGreedy(prices);

        Assertions.assertEquals(expected, result);
    }
}
