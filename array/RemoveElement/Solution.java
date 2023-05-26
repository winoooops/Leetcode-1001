package RemoveElement;

public class Solution {
    public int RemoveElement(int[] nums, int target) {
       int length = nums.length;
       int left = 0;

       for(int right = 0; right < length; right++) {
         if(nums[right] != target) {
             nums[left] = nums[right];
             left++;
         }
         // ignore the case where num[right] == target, let it increment
       }

       return left;
    }
}
