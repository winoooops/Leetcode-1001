# 88.Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



## Example

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

## Solution

### 遍历法
> 注意此时需要更改nums1, 而不是单纯的将结果推入新的数组. 注意到nums1数组的特点, 所以我们需要将两个数组中最大的数依次从栈的末尾推入.
> 
* 当两个有序数组都可被遍历时,比较后放入较大的值
* 其中有个有序数组无法被遍历时, 将另一个数组的剩余元素全部推入结果
  * 如果nums1还有剩余, 直接返回
  * 如果nums2还有剩余, 修改成nums2的值

```java
public class Solution {
    public void MergeSortedArray(int[] nums1, int m, int[] nums2, int n)
    {
        int i = m - 1;
        int j = n - 1;
        int idx = nums1.length - 1;

        while(j >= 0)
        {
            // if equals, first puts element in nums2 in
            // so that if runing out of elements in nums2, we could keep what's left in nums1 as it is.
            if(i >= 0 && nums1[i] > nums2[j])
            {
                nums1[idx--] = nums1[i--];
            } else
            {
                nums1[idx--] = nums2[j--];
            }
        }
    }
}
```