package BestTimeStockProblems.II;

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
        "7 1 5 3 6 4, 7",
        "1 2 3 4 5, 4",
        "7 6 4 3 1, 0"
    })
    void testStockIIDP(String pricestr, int expected)
    {
        int[] prices = Arrays.stream(pricestr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.bestTimeToSellIIDP(prices);

        Assertions.assertEquals(expected, result);
    }

    @ParameterizedTest
    @CsvSource({
            "7 1 5 3 6 4, 7",
            "1 2 3 4 5, 4",
            "7 6 4 3 1, 0"
    })
    void testStockIIGreedy(String pricestr, int expected)
    {
        int[] prices = Arrays.stream(pricestr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.bestTimeToSellIIGreedy(prices);

        Assertions.assertEquals(expected, result);
    }
}
