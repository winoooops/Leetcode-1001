package BestTimeStockProblems.withCooldown;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "1 2 3 0 2, 3",
            "3 2 6 5 0 3, 7"
    })
    void testWithFreezeDP(String priceStr, int expected)
    {
        int[] prices = Arrays.stream(priceStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.withCoolDownDP(prices);

        Assertions.assertEquals(expected, result);
    }
}
