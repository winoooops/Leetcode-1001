package JumpGame.II;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
       "2 3 1 1 4, 2",
       "3 2 1 0 4, 2",
       "1 2 3, 2"
    })
    void testMinJumpSteps(String numstr, int expected)
    {
        int[] nums = Arrays.stream(numstr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        int result = solution.minJumpSteps(nums);
        Assertions.assertEquals(expected, result);
    }
}
