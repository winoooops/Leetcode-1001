## 55. Jump Game — Greedy Coverage Notes

### Problem
Given a non-negative array `nums`, start at index `0`. Each value is the maximum jump length from that position. Decide whether you can reach the last index.

Examples:
- `[2,3,1,1,4]` → `true` (0→1→4)
- `[3,2,1,0,4]` → `false` (coverage stalls at index `3`)

### Greedy Insight
> Need to make sure that itereated steps(element in the nums) is actually within the coverage!!!

We do not need to simulate every exact jump. Instead, keep the farthest index we can *cover* as we scan from left to right:

1. Initialize `coverage = 0`.
2. For each index `i` that is within the current coverage (`i <= coverage`), update `coverage = max(coverage, i + nums[i])`.
3. If `coverage` ever reaches or exceeds the last index, return `true`.
4. If we finish the loop without reaching the end, return `false`.

The key observation: once an index is unreachable (`i > coverage`), nothing after it can be reached either, so we can stop early.

```ts
export function canJump(nums: number[]): boolean {
  if (nums.length <= 1) return true;
  let coverage = 0;

  for (let i = 0; i < nums.length && i <= coverage; i++) {
    coverage = Math.max(coverage, i + nums[i]);

    if (coverage >= nums.length - 1) return true;
  }

  return false;
}
```

### Complexity
- Time `O(n)` — each index is processed once as long as it is reachable.
- Space `O(1)` — only the coverage pointer is tracked.
