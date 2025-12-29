# 1. Two Sum

## Solution: Hash Map

Use a hash map to store the indices of the values as we iterate. For each element `x`, check if `target - x` exists in the map.

```ts
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
```
