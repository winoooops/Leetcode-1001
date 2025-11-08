# 169. Majority Element

Given an integer array `nums`, return the element that appears more than `⌊ n/2 ⌋` times. The majority element is guaranteed to exist.

## Example
```
Input:  nums = [2,2,1,1,1,2,2]
Output: 2
```
Explanation: The value `2` occurs four times while the array length is seven, so it satisfies the majority requirement.

## Solution

Use the Boyer–Moore voting algorithm. Maintain a current candidate and a vote count. Scan the array once:

1. If the vote count is zero, set the current number as the candidate.
2. If the current number equals the candidate, increment the count; otherwise decrement it.
3. After the scan ends, the candidate is the majority element.

The intuition is that every non-majority number can be paired with a majority occurrence and cancel out. Because the majority appears more than half the time, it cannot be completely eliminated.

```ts
export function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate: number | undefined;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate!;
}
```

## Step-by-Step Walkthrough

Input:
```
nums = [2,2,1,1,1,2,2]
```

| Step | num | candidate | count | Action                              |
| ---- | --- | --------- | ----- | ----------------------------------- |
| 1    | 2   | 2         | 1     | count was 0 → candidate becomes 2   |
| 2    | 2   | 2         | 2     | same as candidate → increment       |
| 3    | 1   | 2         | 1     | different → decrement               |
| 4    | 1   | 2         | 0     | different → decrement to zero       |
| 5    | 1   | 1         | 1     | count zero → switch candidate to 1 |
| 6    | 2   | 1         | 0     | different → decrement to zero       |
| 7    | 2   | 2         | 1     | count zero → switch candidate to 2 |

Final candidate is `2`, which is the answer.

## Complexity

- Time: `O(n)` — each element is processed once.
- Space: `O(1)` — only a few variables are used.
