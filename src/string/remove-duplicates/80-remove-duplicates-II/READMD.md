# 80. Remove Duplicates from Sorted Array II

Given a non-decreasing integer array `nums`, remove duplicates in-place so that each value appears **at most twice**. Preserve the original ordering, and return `k`, the count of retained elements. Only the first `k` slots of `nums` must contain the kept values; everything beyond that can be ignored.

## Example
```
Input:  nums = [0,0,1,1,1,1,2,3,3]
Output: k = 7, nums = [0,0,1,1,2,3,3,_,_]
```
Explanation: Every value beyond the second occurrence is skipped, leaving seven in-order elements.

## Solution

Extend the two-pointer compression pattern from problem 26. Pointer `slow` marks the next write position, while `fast` scans the array. By comparing with the value written two slots earlier, we can detect whether we already kept two copies.

1. If `nums.length <= 2`, the array already satisfies the rule—return its length.
2. Initialize `slow = 2` and iterate `fast` from `2` to `nums.length - 1`.
3. Whenever `nums[fast] !== nums[slow - 2]`, copy `nums[fast]` to `nums[slow]` and increment `slow`.
4. Once the scan finishes, `slow` is the count of valid elements.

This works because duplicates cluster together in a sorted array. The item at `slow - 2` is the second-most-recent write; equality signals that we already stored two copies and must skip the extra occurrence.

```ts
export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let slow = 2;

  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}
```

## Step-by-Step Walkthrough

Input:
```
nums = [0,0,1,1,1,1,2,3,3]
```

- First two entries (`0,0`) are always written.
- At `fast = 2`, value `1` differs from `nums[slow - 2] = 0` → keep: `[0,0,1]`.
- At `fast = 3`, second `1` is still allowed → `[0,0,1,1]`.
- At `fast = 4`, third `1` matches `nums[slow - 2] = 1` → skip.
- Continue; new values (`2`, `3`, `3`) differ from `nums[slow - 2]`, so they are copied.
- Final prefix: `[0,0,1,1,2,3,3]`, and `slow = 7` is returned.

## Complexity

- Time: `O(n)` — each element is read once.
- Space: `O(1)` — all updates happen in-place.

## Pattern Comparison

| Problem | Rule        | Comparison Index |
| ------- | ----------- | ---------------- |
| 26      | keep 1 copy | `slow - 1`       |
| 80      | keep 2 copy | `slow - 2`       |

The logic is identical aside from the look-back distance, making this an easy extension of the classic duplicate-removal pattern.
