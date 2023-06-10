package MajorityElement;

import java.util.Arrays;

public class Solution {
    public int majorityElementOne(int[] nums)
    {
       int[] sorted = Arrays.stream(nums).sorted().toArray();
       int count = 1;
       int max = 0;
       int target = sorted[0];
       for(int i = 1; i < sorted.length; i++)
       {
           if(sorted[i] == sorted[i - 1])
           {
               count++;
               if(count > max){
                   target = sorted[i];
                   max = count;
               }
           } else {
               count = 1;
           }
       }

       return target;
    }

    public int mooreVoting(int[] nums)
    {
       int length = nums.length;
       int count = 0;
       int element = 0;

       // applying Moore's Voting Algorithm
        for(int i = 0; i < length; i++)
        {
            if(count == 0)
            {
                count = 1;
                element = nums[i];
            } else if(element == nums[i]) {
                count++;
            } else {
              count--;
            }
        }
        return element;
    }
}
