# 189. Rotate Array
Given an integer array nums, rotate the array to the right by `k` steps, 
where k is non-negative.



## Example

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

## Solution

### 1.Brute Super Slow
> The efficiency of this algorithm is too slow, it won't pass the LeetCode Submission Test!

```java
public class Solution {
    public void RotateArray(int[] nums, int k)
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
}

```



> Only discussing where the time complexity of each rotate is `O(n)`, or otherwise using *dequeue* to solve this would be of no meaning


### 2.Brute Faster

* first check k, make sure it less than `nums.length`; if k==0, should be the original nums
* then create an array `temp` of k to store the kth element that should be rotated
* rotate the array once, check if `idx >= k`, if so `nums[idx] = nums[idx - k]`; otherise, `nums[idx] = temp[k - idx - 1]`

> the time complexity is `O(n)` becuase it looped the nums once, created an array to store the kth element, so the space complexity is `O(k)`

```java
public class Solution
{
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
}
```

### 3.Brute Optimized
> Without using any additional arrays, so the space complexity is `O(1)` while the time complexity is still `O(n)` 

* first check k, make sure it less than `nums.length`; if k==0, should be the original nums
* 

### 4.Swap

> Make sure the `k < nums.length`, if not just use the remained

* reverse the whole array
* divide the products into 2 arrays of length: `k` and `n - k`
* reverse those 2 arrays

