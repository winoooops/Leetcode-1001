package MergeSortedArray;

public class Solution {
    public void MergeSortedArray(int[] nums1, int m, int[] nums2, int n)
    {
        int i = m - 1;
        int j = n - 1;
        int idx = nums1.length - 1;

        while(j >= 0)
        {
            // if eqauls, first puts element in nums2 in
            if(i >= 0 && nums1[i] > nums2[j])
            {
                nums1[idx--] = nums1[i--];
            } else
            {
                nums1[idx--] = nums2[j--];
            }
        }
    }
}
