package ProductExceptSelf;

import java.sql.SQLOutput;

public class Solution {
    public int[] productExceptSelf(int[] nums)
    {
        int[] products = new int[nums.length];

        int temp = 1;
        for(int i = 0; i < nums.length; i++)
        {
            products[i] = temp;
            temp *= nums[i];
        }
        showArray(products);

        temp = 1;
        for(int i = nums.length - 1; i >= 0; i--)
        {
            products[i] *= temp;
            temp *= nums[i];
        }
        showArray(products);

        return products;
    }

    public int[] productExceptSelfArray(int[] nums)
    {
        int n = nums.length;
        int[] res = new int[n];
        int[] pre = new int[n];
        int[] next = new int[n];

        pre[0] = next[n - 1] = 1;
        for (int i = 1; i < n; i++) {
            pre[i] = pre[i-1] * nums[i-1];
            next[n - i - 1] = next[n - i] * nums[n - i];
        }

        for (int i = 0; i < n; i++) {
            res[i] = pre[i] * next[i];
        }
        return res;
    }

    private void showArray(int[] nums)
    {
        for(int i : nums) {
            System.out.println(i);
        }
    }
}
