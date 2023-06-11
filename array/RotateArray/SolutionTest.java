package RotateArray;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "1 2 3 4 5 6 7, 3, 5 6 7 1 2 3 4",
            "-1 -100 3 99, 2, 3 99 -1 -100"
    })
    void testSolutionOne(String arrayStr, int k, String expectedStr){
        Solution solution = new Solution();
        int[] nums = Arrays.stream(arrayStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] expected = Arrays.stream(expectedStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        solution.rotateArray1(nums, k);
//        printArray(nums);
        Assertions.assertArrayEquals(expected, nums);
    }

    @ParameterizedTest
    @CsvSource({
            "1 2 3 4 5 6 7, 3, 5 6 7 1 2 3 4",
            "-1 -100 3 99, 2, 3 99 -1 -100"
    })
    void testSolutionTwo(String arrayStr, int k, String expectedStr){
        Solution solution = new Solution();
        int[] nums = Arrays.stream(arrayStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] expected = Arrays.stream(expectedStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        solution.rotateArray2(nums, k);
//        printArray(nums);
        Assertions.assertArrayEquals(expected, nums);
    }

    @ParameterizedTest
    @CsvSource({
            "1 2 3 4 5 6 7, 3, 5 6 7 1 2 3 4",
            "-1 -100 3 99, 2, 3 99 -1 -100"
    })
    void testSolutionThree(String arrayStr, int k, String expectedStr){
        Solution solution = new Solution();
        int[] nums = Arrays.stream(arrayStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] expected = Arrays.stream(expectedStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        solution.rotateArray3(nums, k);
//        printArray(nums);
        Assertions.assertArrayEquals(expected, nums);
    }

    @ParameterizedTest
    @CsvSource({
            "1 2 3 4 5 6 7, 3, 5 6 7 1 2 3 4",
            "-1 -100 3 99, 2, 3 99 -1 -100"
    })
    void testSolutionFour(String arrayStr, int k, String expectedStr){
        Solution solution = new Solution();
        int[] nums = Arrays.stream(arrayStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] expected = Arrays.stream(expectedStr.split(" ")).mapToInt(Integer::parseInt).toArray();
        solution.rotateArray4(nums, k);
        Assertions.assertArrayEquals(expected, nums);
    }

    private void printArray(int[] nums)
    {
        for(int i = 0; i < nums.length; i++)
        {
            System.out.println(nums[i]);
        }
    }
}
