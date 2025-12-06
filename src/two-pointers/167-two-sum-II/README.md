# 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array `numbers` sorted in non-decreasing order, return the 1-based indices of the two values whose sum equals `target`. Exactly one valid pair exists and each element may be used only once.

## Example
```
Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]
```

## Solution

### Two pointers from both ends
- Use the sorted order to start pointers at the beginning and end of the array.
- Compare their sum to `target`; move `left` rightward if the sum is too small, otherwise move `right` leftward.
- When the sum matches, return the 1-based positions.

```ts
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const result = numbers[left] + numbers[right];

    if (result === target) return [left + 1, right + 1];

    if (result < target) {
      left++;
      continue;
    }

    if (result > target) {
      right--;
      continue;
    }
  }
}
```
