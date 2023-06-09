package RemoveElement.RemoveDuplicateTwo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void testCase1()
    {
        Solution solution = new Solution();
        int[] nums = {1,1,1,2,2,3};
        int[] expected = {1,1,2,2,3};
//        int result = solution.removeDuplicateII(nums);
        int result = solution.removeDuplicateIITWO(nums);

        Assertions.assertEquals(5, result);
        Assertions.assertArrayEquals(expected, copyArray(nums, result));
    }

    @Test
    void testCase2()
    {
        Solution solution = new Solution();
        int[] nums = {0,0,1,1,1,1,2,3,3};
        int[] expected = {0,0,1,1,2,3,3};
//        int result = solution.removeDuplicateII(nums);
        int result = solution.removeDuplicateIITWO(nums);

        Assertions.assertEquals(7, result);
        Assertions.assertArrayEquals(expected, copyArray(nums, result));
    }

    private void showArray(int[] nums)
    {
        for(int i: nums)
        {
            System.out.print(i + ",");
        }
    }

    private int[] copyArray(int[] nums, int index) {
        int[] result = new int[index];
        for(int i = 0; i < index; i++)
        {
            result[i] = nums[i];
        }
        return result;
    }
}
