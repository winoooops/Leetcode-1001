## 45. Jump Game II

### Problem
You are given a non-negative integer array `nums` and start at index `0`. Each element represents the maximum jump length from that position. Return the minimum number of jumps needed to reach the last index.

### Examples
- Input: `[2,3,1,1,4]` → Output: `2`. Path: `0 → 1 → 4`.
- Input: `[2,3,0,1,4]` → Output: `2`. Path: `0 → 1 → 4`.

---

### Approach 1: Greedy I (`jumpOne`)
Track the current coverage range (`currCoverage`) and the farthest range reachable with one more jump (`nextCoverage`). For each index:
1. Update `nextCoverage = max(nextCoverage, i + nums[i])`.
2. If `nextCoverage` already reaches the end, take one final jump and exit.
3. When we finish scanning the current coverage (`i === currCoverage`), we must spend a jump to extend the window, so assign `currCoverage = nextCoverage` and increment the step counter.

```ts
export function jumpOne(nums: number[]): number {
  let currCoverage = 0;
  let nextCoverage = 0;
  let steps = 0;

  for (let i = 0; i < nums.length; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i]);
    if (nextCoverage >= nums.length - 1) {
      steps++;
      break;
    }
    if (i === currCoverage) {
      currCoverage = nextCoverage;
      steps++;
    }
  }
  return steps;
}
```

---

### Approach 2: Greedy II (`jumpTwo`)
Limit the loop to the second-to-last index. Whenever we reach the end of the current coverage, we take a jump and expand to `nextCoverage`, which implicitly ensures we add the final step exactly when needed.

```ts
export function jumpTwo(nums: number[]): number {
  let currCoverage = 0;
  let nextCoverage = 0;
  let steps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i]);
    if (i === currCoverage) {
      currCoverage = nextCoverage;
      steps++;
    }
  }
  return steps;
}
```

Both greedy strategies run in `O(n)` time with `O(1)` extra space. They differ only in whether they exit early once the end becomes reachable.
