package RemoveElement.RemoveDuplicateTwo;

public class Solution {
    public int removeDuplicateII(int[] nums)
    {
        // do need to care if they are the same,
        // just check if the 3rd is equals to the 1st
        int slow = 2;

        for(int fast = slow; fast < nums.length; fast++)
        {
            if(nums[fast] != nums[slow - 2])
            {
                nums[slow++] = nums[fast];
            }
        }

        return slow;
    }
    public int removeDuplicateIITWO(int[] nums)
    {
       int repeat = 1;
       int slow = 0;
       for(int fast = 1; fast < nums.length; fast++)
       {
           if(repeat < 2 || nums[slow] != nums[fast]){
               if(nums[slow] == nums[fast]){
                   repeat++;
               } else {
                   repeat = 1;
               }
               nums[++slow] = nums[fast];
           }
       }

       return slow + 1;
    }
}
