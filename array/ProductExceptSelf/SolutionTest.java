package ProductExceptSelf;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "1 2 3 4, 24 12 8 6",
            "-1 1 0 -3 3, 0 0 9 0 0"
    })
    void testProductExcept(String numStr, String expectedStr)
    {
       int[] nums = Arrays.stream(numStr.split(" ")).mapToInt(Integer::parseInt).toArray();
       int[] expected = Arrays.stream(expectedStr.split(" ")).mapToInt(Integer::parseInt).toArray();

       Solution solution = new Solution();
       int[] result = solution.productExceptSelf(nums);

       Assertions.assertArrayEquals(expected, result);
    }

    @ParameterizedTest
    @CsvSource({
            "1 2 3 4, 24 12 8 6",
            "-1 1 0 -3 3, 0 0 9 0 0"
    })
    void testProductExceptSelfArray(String numStr, String expectedStr)
    {
        int[] nums = Arrays.stream(numStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] expected = Arrays.stream(expectedStr.split(" ")).mapToInt(Integer::parseInt).toArray();

        Solution solution = new Solution();
        int[] result = solution.productExceptSelfArray(nums);

        Assertions.assertArrayEquals(expected, result);
    }
}
