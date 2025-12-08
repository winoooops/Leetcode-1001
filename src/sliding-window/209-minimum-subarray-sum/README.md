# 209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

## Example
```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

```
Input: target = 4, nums = [1,4,4]
Output: 1
```

```
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

## Solution

### Sliding window (grow then shrink)

Cheat steps applied:
1. **Invariant:** window is valid when `sum >= target`.
2. Start with `left = 0`, `sum = 0`, and best answer set to `Infinity`.
3. Sweep `right` forward once; add `nums[right]` into `sum`.
4. While the window stays valid, shrink from `left`, subtracting `nums[left]`, and record the smallest valid length seen.
5. Return `0` if no valid window was found.

![how-it-work](/static/img/sliding-window/209.gif)

```ts
function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.MAX_VALUE;
  let slow = 0;
  let sum = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    sum += nums[fast];

    while (sum >= target) {
      // shrink to the tightest valid window seen so far
      result = Math.min(result, fast - slow + 1);
      sum -= nums[slow];
      slow++;
    }
  }

  return result === Number.MAX_VALUE ? 0 : result;
}
```

```ts
function minSubArrayLen2(target: number, nums: number[]): number {
  let result: number = Number.MAX_VALUE;
  let slow = 0;
  let fast = 0;
  let sum = 0;

  while (fast < nums.length) {
    sum += nums[fast];

    while (sum >= target) {
      result = Math.min(result, fast - slow + 1);
      sum -= nums[slow++];
    }

    fast++;
  }

  return result === Number.MAX_VALUE ? 0 : result;
}
```

> Time Complexity: `O(n)`, Space Complexity: `O(1)`
