# 228. Summary Ranges

You are given a sorted unique integer array nums.

A range `[a,b]` is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, 
and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

* "a->b" if a != b
* "a" if a == b


## Example

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

## Solution

### Two Pointer
* use 2 pointers `slow` & `fast` to determine the start and end the the ranges, 
  * in the case of `fast === slow`, the range is only `"${nums[slow]}"` 

```ts
export function summaryRanges(nums: number[]): string[] {
  const ans: string[] = []

  let slow = 0, fast = 0;
  let path: string;

  while(fast < nums.length) {
    slow = fast;
    while(fast+1 < nums.length && nums[fast] + 1 === nums[fast+1]) {
      fast++;
    }

    path = `${nums[slow]}`;

    if(slow < fast) {
      path += `->${nums[fast]}`;
    }
    ans.push(path);
    fast++;
  }

  return ans;
}
```
