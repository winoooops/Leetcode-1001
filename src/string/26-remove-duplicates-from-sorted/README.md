# 26. Remove Duplicates from Sorted Array

Given a non-decreasing integer array `nums`, remove duplicates in-place so that each distinct value appears exactly once. The relative order of the remaining elements must be preserved. Return `k`, the count of unique values. After the procedure, the first `k` entries in `nums` should contain those unique values in sorted order; the remaining slots are unspecified.

## Example
```
Input:  nums = [0,0,1,1,1,2,2,3,3,4]
Output: k = 5, nums = [0,1,2,3,4,_,_,_,_,_]
```
Explanation: The array already comes sorted, so duplicates appear consecutively. Keeping one copy of each value leaves five unique numbers. Any values after index `k - 1` are ignored.

## Solution

Use two pointers to compact the array. Pointer `slow` marks the end of the unique prefix; pointer `fast` scans each element exactly once.

1. Initialize `slow = 0` and start `fast` at `1`.
2. For every index `fast`, compare `nums[fast]` with `nums[slow]`.
3. When they differ, increment `slow` and copy the new value to `nums[slow]`.
4. After the scan, the number of unique values is `slow + 1` (or `0` for an empty input).

This works because any duplicate appears adjacent to its previous occurrence in a sorted array, so each new value can simply overwrite the slot immediately after the unique prefix.

```ts
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}
```

## Step-by-Step Walkthrough

Input:
```
nums = [0,0,1,1,1,2,2,3,3,4]
```

- Start with `slow = 0`, `fast = 1`. Duplicate `0` → skip.
- `fast = 2`, value `1` ≠ `nums[slow]` → write at `slow = 1`.
- Continue scanning; every time a new value appears (`2`, `3`, `4`), advance `slow` and write it.
- Final state: `slow = 4`, so `k = slow + 1 = 5`, and the prefix is `[0,1,2,3,4]`.

## Complexity

- Time: `O(n)` — each element is read once.
- Space: `O(1)` — all rewrites happen in-place.
