# 27. Remove Element

Given an integer array `nums` and a value `val`, remove every occurrence of `val` **in-place**. The relative order of the remaining elements must stay the same, and the first `k` positions of `nums` should contain the elements that were kept. The function returns `k`; the values beyond index `k - 1` are irrelevant.

## Example
```
Input:  nums = [0,1,2,2,3,0,4,2], val = 2
Output: k = 5, nums = [0,1,3,0,4,_,_,_]
```
Explanation: The elements not equal to `2` are written to the front in their original order. Any values beyond the first five slots may be ignored.

```
Input:  nums = [3,3], val = 3
Output: k = 0, nums = [_,_]
```
Explanation: Every value matches `val`, so the array is considered empty after removal.

## Solution 1

> establish a `slow` pointer to write, and a `fast` pointer to read

Use two pointers that walk the array once. Pointer `fast` scans every index, while pointer `slow` records the position where the next valid element should be written.

1. Initialize `slow = 0`.
2. For each `fast` from `0` to `nums.length - 1`, copy `nums[fast]` into `nums[slow]` if it is not equal to `val`, then increment `slow`.
3. After the loop, return `slow`; the first `slow` values now form the filtered array.

This approach keeps the order stable, touches every element at most once, and uses O(1) extra memory.

_Note:_ When element order does not matter and `val` is rare, you can instead swap matches with the end of the array and shrink the effective length from the right.

### Step-by-Step Walkthrough

Input:
```
nums = [0,1,2,2,3,0,4,2]
val = 2
```

Starting state:
```
slow = 0, fast = 0
```

1. `nums[0] = 0` ≠ `2` → write at index 0, advance `slow` to 1.
2. `nums[1] = 1` ≠ `2` → write at index 1, advance `slow` to 2.
3. `nums[2] = 2` = `val` → skip, `slow` stays 2.
4. `nums[3] = 2` = `val` → skip, `slow` stays 2.
5. `nums[4] = 3` ≠ `2` → write at index 2, advance `slow` to 3.
6. `nums[5] = 0` ≠ `2` → write at index 3, advance `slow` to 4.
7. `nums[6] = 4` ≠ `2` → write at index 4, advance `slow` to 5.
8. `nums[7] = 2` = `val` → skip.

All elements processed. `slow = 5`, so the first five positions now contain the kept values: `[0,1,3,0,4]`.

```ts
export function removeElement(nums: number[], val: number): number {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}
````

> the time complexity is `O(n), n = nums.length` since we only traverse through the array once
>
> the space complexity is `O(1)` since we don't create new array here

## Solution 2
When order does not matter, shrink the array from the right:

1. Set `left = 0`, `right = nums.length - 1`.
2. While `left <= right`:
   * If `nums[left] === val`, swap it with `nums[right]` and decrement `right` (the new tail value is ignored in future).
   * Otherwise increment `left`.
3. Return `left`; it marks the new length.

This version still runs in O(n) time and O(1) space, but can reduce writes when `val` is rare because it avoids shifting untouched values
