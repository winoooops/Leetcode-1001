package RotateArray;

public class Solution {
    public void rotateArray1(int[] nums, int k)
    {
        if(nums.length <= 1) return;

        int rotate = 0;
        int temp;

        while(rotate < k)
        {
            int prev = nums[0];
            for(int i = 0; i < nums.length; i++)
            {
                if(i == 0){
                    prev = nums[i];
                    nums[i] = nums[nums.length - 1];
                } else {
                    temp = nums[i];
                    nums[i] = prev;
                    prev = temp;
                }
            }

            rotate++;
        }
    }

    public void rotateArray2(int[] nums, int k)
    {
        if(k == 0) {
            return;
        }
        int len = nums.length;
        int[] temp = new int[k];

        // copy the kth last element
        for(int i = 0; i < k; i++)
        {
            temp[i] = nums[len - i - 1];
        }

        // loop through the array, if j >= k, do the rotation
        for(int j = len - 1; j >=0; j--)
        {
           if(j >= k) {
              nums[j] = nums[j - k];
           } else {
              nums[j] = temp[k - j - 1];
           }
        }
    }

    public void rotateArray3(int[] nums, int k)
    {
        if(k == 0) return;
        int len = nums.length;
        k = k % len;

        int count = 0; // number of element moved.
        int start = 0;
        int pointer = start;
        int prev = nums[pointer];
        int tmp;

        while(count < len)
        {
            pointer = (pointer + k) % len;
            tmp = nums[pointer];
            nums[pointer] = prev;
            prev = tmp;
            count++;

            // when a rotation cycle is complete
            if(pointer == start)
            {
                start++;
                pointer = start;
                prev = nums[start];
            }
        }
    }

    public void rotateArray4(int[] nums, int k)
    {
        if(k == nums.length) return; // it would be the same
        if(k > nums.length){
            k = k % nums.length;
        }

        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length - 1);
    }

    private void reverse(int[] nums, int left, int right)
    {
        int tmp;
        while(left < right)
        {
            tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
            right--;
        }
    }

}
