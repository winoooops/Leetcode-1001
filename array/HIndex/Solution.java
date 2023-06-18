package HIndex;

import java.util.Arrays;

public class Solution {
    public int hIndexBinarySort(int[] citations)
    {
        Arrays.sort(citations);
        int left = 0;
        int right = citations.length;

        while(left < right)
        {
           int mid = (left + right + 1) / 2;
           int count = 0;
           for(int citation : citations)
           {
               if(citation >= mid)
               {
                   count++;
               }
           }

           if(count >= mid) {
               left = mid;
           } else {
               right = mid - 1;
           }
        }

        return left;
    }

    public int hIndexBucketSort(int[] citations)
    {
        int n = citations.length;
        int[] buckets = new int[n + 1];
        for(int citation: citations){
            if(citation >= n) {
                buckets[n]++;
            } else {
                buckets[citation]++;
            }
        }

        int counter = 0;
        for(int k = n; k >= 0; k--){
           counter += buckets[k];
           if(counter >= k) {
               return k;
           }
        }

        return 0;
    }

    private void showArray(int[] nums)
    {
        for(int i = 0; i < nums.length; i++){
            System.out.println(nums[i]);
        }
    }
}