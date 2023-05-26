package SquareSortedArray;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "-4 -1 0 3 10,0 1 9 16 100",
            "-7 -3 2 3 11,4 9 9 49 121"
    })
    void testSqureSortedArray(String numString, String expectedString) {
        Solution solution = new Solution();

        int[] nums = Arrays.stream(numString.split(" "))
               .mapToInt(Integer::parseInt)
               .toArray();
        int[] expected = Arrays.stream(expectedString.split(" "))
               .mapToInt(Integer::parseInt)
               .toArray();

        int [] result = solution.SquareSortedArray(nums);
        assertArrayEquals(expected, result);
    }
}
