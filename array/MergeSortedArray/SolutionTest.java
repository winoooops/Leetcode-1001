package MergeSortedArray;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
   @Test
   void testMergeSortedArray(){
       Solution solution = new Solution();

       int[] nums1 = {0};
       int m = 0;
       int[] nums2 = {1};
       int n = 1;

       int[] expected = {1};
       solution.MergeSortedArray(nums1, m, nums2, n);

       assertArrayEquals(expected, nums1);
   }

    @Test
    void testMergeSortedArray2(){
        Solution solution = new Solution();

        int[] nums1 = {1};
        int m = 1;
        int[] nums2 = {};
        int n = 0;

        int[] expected = {1};
        solution.MergeSortedArray(nums1, m, nums2, n);

        assertArrayEquals(expected, nums1);
    }

    @Test
    void testMergeSortedArray3(){
        Solution solution = new Solution();

        int[] nums1 = {1,2,3,0,0,0};
        int m = 3;
        int[] nums2 = {2,5,6};
        int n = 3;

        int[] expected = {1,2,2,3,5,6};
        solution.MergeSortedArray(nums1, m, nums2, n);

        assertArrayEquals(expected, nums1);
    }
}
