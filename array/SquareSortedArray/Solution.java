package SquareSortedArray;

import java.sql.Array;

public class Solution {
    public int[] SquareSortedArray(int[] nums) {
        int length = nums.length;
        int left = 0;
        int right = length - 1;
        int k = length - 1;
        int[] result = new int[length];

        while(left <= right) {
            if(Math.abs(nums[left]) > Math.abs(nums[right])) {
                result[k--] = nums[left] * nums[left];
                left++;
            } else {
                result[k--] = nums[right] * nums[right];
                right--;
            }
        }

        return result;
    }
}
