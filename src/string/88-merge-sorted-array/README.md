# 88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



## Example
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
```
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

## Solution

Compare one element from each array at a time, but fill from the end of nums1.
Why backwards? Because the back of nums1 is free space. Writing from right → left avoids overwriting valid nums1 values.

> so the key is that we make decision from right to left in `nums1`!

1. We maintain three pointers:
    * `i = m - 1` → last valid element in nums1
    * `j = n - 1` → last element in nums2
    * `k = m + n - 1` → write position in nums1
2. At each step, place the larger of `nums1[i]` and `nums2[j]` at `nums1[k]`, then move that pointer and k left by one.
3. Stop when `j < 0` (i.e., nums2 is fully consumed), If `i < 0`, we just copy remaining nums2 values (the loop already handles this).

## Step-by-Step Walkthrough

Input:
```
nums1 = [1,2,3,0,0,0], m=3
nums2 = [2,5,6],       n=3
```

Starting state:
```
i = 2 (nums1[i]=3), j = 2 (nums2[j]=6), k = 5
```

1. Compare 3 vs 6 → put 6 at k=5
nums1 = [1,2,3,0,0,6]
update: j=1 (5), k=4

2. Compare 3 vs 5 → put 5 at k=4
nums1 = [1,2,3,0,5,6]
update: j=0 (2), k=3

3. Compare 3 vs 2 → put 3 at k=3
nums1 = [1,2,3,3,5,6]
update: i=1 (2), k=2

4. Compare 2 vs 2 → tie; take from nums2 (either is fine)
nums1 = [1,2,2,3,5,6]
update: j=-1, k=1

5. Now j < 0 → done. nums1 is fully merged: [1,2,2,3,5,6].
