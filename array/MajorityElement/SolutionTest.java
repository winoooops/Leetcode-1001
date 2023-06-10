package MajorityElement;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;


public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "3 2 3, 3",
            "2 2 1 1 1 2 2, 2",
            "4 5 4, 4"
    })
    void testSolutionOne(String arrayString, int expected)
    {
        Solution solution = new Solution();
        int[] nums = Arrays.stream(arrayString.split(" ")).mapToInt(Integer::parseInt).toArray();
        int result = solution.majorityElementOne(nums);

        Assertions.assertEquals(expected, result);
    }


    @ParameterizedTest
    @CsvSource({
            "3 2 3, 3",
            "2 2 1 1 1 2 2, 2",
            "4 5 4, 4",
            "2 2 1 1 3 3, -1"
    })
    void testMooreVoting(String arrayString, int expected)
    {
        Solution solution = new Solution();
        int[] nums = Arrays.stream(arrayString.split(" ")).mapToInt(Integer::parseInt).toArray();
        int element = solution.mooreVoting(nums);
        System.out.println(element);
    }
}
