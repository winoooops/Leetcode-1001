package RemoveElement;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "0 1 2 2 3 0 4 2, 2, 5",
            "3 2 2 3, 3, 2"
    })
    void testRemoveElement(String numString, int target, int expected) {
       Solution solution = new Solution();
       int[] nums = Arrays.stream(numString.split(" ")).mapToInt(Integer::parseInt).toArray();
       int result = solution.RemoveElement(nums, target);

       assertEquals(expected, result);
    }
}
