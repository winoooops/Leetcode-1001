package MinSizeSubarraySum;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "7, 2 3 1 2 4 3, 2",
            "11, 1 1 1 1 1 1 1 1, 0",
            "4, 1 4 4, 1"
    })
    void testMinSubArrayLen(int target, String numString, int expected) {
        Solution solution = new Solution();
        int[] nums = Arrays.stream(numString.split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int result = solution.minSubArrayLen(target, nums);

        assertEquals(expected, result);
    }
}
