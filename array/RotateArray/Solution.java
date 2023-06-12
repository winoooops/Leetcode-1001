package RotateArray;

public class Solution {
    public void rotateArray1(int[] nums, int k)
    {
        if(nums.length == 1 || k == 0 || k == nums.length){
            return;
        }

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
        if(nums.length == 1 || k == 0 || k == nums.length){
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
        if(nums.length == 1 || k == 0 || k == nums.length){
            return;
        }
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
        if(nums.length == 1 || k == 0 || k == nums.length){
            return;
        }
        if(k > nums.length){
            k = k % nums.length;
        }

        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length - 1);
    }

    public void rotateArray5(int[] nums, int k){
        if(nums.length == 1 || k == 0 || k == nums.length){
            return;
        }
       int n = nums.length;
       k = k % n;
       int g = gcd(k, n);
       int count = n / g;

       for(int i = 0; i < g; i++)
       {
           int j = i;
           int curr = 0;
           int prev = nums[j];
           int temp;

           while(curr < count)
           {
              j = (j + k) % n;
              temp = nums[j];
              nums[j] = prev;
              prev = temp;
              curr++;
           }
       }
    }

    private int gcd(int x, int y)
    {
        return y == 0 ? x : gcd(y, x % y);
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
