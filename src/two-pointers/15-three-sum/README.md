# 15. 3Sum

Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k` and `nums[i] + nums[j] + nums[k] == 0`. The solution set must not contain duplicate triplets.

## Example
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

## Solution

### Sort then sweep with two pointers
- Sort the array so duplicates can be skipped and two-pointer logic works.
- Anchor each index `i`; if it matches the previous anchor, continue to avoid duplicate triplets.
- Use `left` and `right` pointers to search for pairs that sum to `-sorted[i]`, shifting them inward based on whether the sum is too small or large.
- When a match is found, push the triplet and advance both pointers past any duplicates.

```ts
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    const target = 0 - sorted[i];
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[left] + sorted[right];
      if (sum === target) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) {
          left++;
        }
        while (left < right && sorted[right] === sorted[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
```
