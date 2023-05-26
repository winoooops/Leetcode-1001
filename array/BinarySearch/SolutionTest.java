package BinarySearch;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "-1 0 3 5 9 12, 9, 4",
            "-1 0 3 5 9 12, 2, -1"
    })
    void testBinarySearch(String numString, int target, int expected) {
        Solution solution = new Solution();
        int[] nums = Arrays
                .stream(numString.split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int result = solution.BinarySearch(nums, target);

        assertEquals(expected, result);
    }
}
