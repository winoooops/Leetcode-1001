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

### Sliding Window
* declare two pointers `slow` and `fast`, which determine the start and end of the subarray; declare `sum` to be 0
* while `sum < target`, `sum += nums[fast]`, and `fast` pointer move the to right
  * while `sum` is bigger than `target`, subtract the value of the start of subarray, `sum -= nums[slow]`; and move slow pointer to the right; 

![how-it-work](/static/img/sliding-window/209.gif)

```ts
function minSubArrayLen(target: number, nums: number[]):number {
  let result = Number.MAX_VALUE;
  let slow = 0;
  let sum = 0;

  for(let fast = 0; fast < nums.length; fast++) {
    sum += nums[fast];

    while(sum >= target) {
      // don't need to worry about wrong result, because the subarray will keep shrinking if bigger than target  
      result = Math.min(result, fast - slow + 1)
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
  let sum  = 0;

  while(fast < nums.length) {
    sum += nums[fast];

    while(sum >= target) {
      result = Math.min(result, fast - slow + 1);
      sum -= nums[slow++];
    }

    fast++;
  }

  return result === Number.MAX_VALUE ? 0 : result;
}
```

> Time Complexity: `O(n)`, Space Complexity: `O(1)`
