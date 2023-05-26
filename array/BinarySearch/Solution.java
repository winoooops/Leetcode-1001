package BinarySearch;

public class Solution {
    public int BinarySearch(int[] nums, int target) {
        int length = nums.length;
        int left = 0;
        int right = length - 1;

        // [left, right]
        while(left <= right) {
            int middle = (left + right) / 2;
            if(nums[middle] == target) return middle;
            if(nums[middle] > target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return -1;
    }
}
