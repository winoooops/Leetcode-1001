package RemoveElement.RemoveDuplicateOne;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
    @Test
    void testCase1()
    {
        Solution solution = new Solution();
        int[] nums = {1, 1};

        int result = solution.removeDuplicate(nums);
        int[] resultArray = getProduct(nums,result);
        int[] expectedArray = {1};
        assertEquals(1, result);
        assertArrayEquals(expectedArray, resultArray);
    }

    @Test
    void testCase2()
    {
        Solution solution = new Solution();
        int[] nums = {1, 1, 2};

        int result = solution.removeDuplicate(nums);
        int[] resultArray = getProduct(nums,result);
        int[] expectedArray = {1,2};
        assertEquals(2, result);
        assertArrayEquals(expectedArray, resultArray);
    }

    @Test
    void testCase3()
    {
        Solution solution = new Solution();
        int[] nums = {0,0,1,1,1,2,2,3,3,4};

        int result = solution.removeDuplicate(nums);
        int[] resultArray = getProduct(nums,result);
        int[] expectedArray = {0,1,2,3,4};
        assertEquals(5, result);
        assertArrayEquals(expectedArray, resultArray);
    }


    private int[] getProduct(int[] nums, int count)
    {
        int[] result = new int[count];
        for(int i = 0; i < count; i++)
        {
            result[i] = nums[i];
        }
        return result;
    }
}
