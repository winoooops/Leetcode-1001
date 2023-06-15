package JumpGame.I;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "2 3 1 1 4, true",
            "3 2 1 0 4, false",
            "0 2 3, false",
            "0, true",
            "1 2 3, true"
    })
    void testCanJumpI(String numstr, boolean expected)
    {
        int[] nums = Arrays.stream(numstr.split(" ")).mapToInt(Integer::parseInt).toArray();
        Solution solution = new Solution();
        boolean result = solution.canJumpI(nums);
        Assertions.assertEquals(expected, result);
    }
}
