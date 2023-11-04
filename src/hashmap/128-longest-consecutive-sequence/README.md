# 128. Longest Consecutive Sequence

Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

> You must write an algorithm that runs in O(n) time.



## Example
```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

Constraints:
* 0 <= nums.length <= 105
* -109 <= nums[i] <= 109

## Solution

### HashMap with sort
* Because it's about consecutive sequence, so the intuition is to sort the array first 
* create a hushMap to store **the pair of number and numbers that are smaller than the number**, iterate through the sorted array,  
  * if encounter a number `n`, there's a `n - 1` in the hashmap, store `n => map.get(n-1) + 1` in the hashmap 
  * otherwise, store `n => 0` in the hashmap
* return the largest values in the hashmap

> Time Complexity is `O(n)`(actually 2n, because need to sort first), space complexity is `O(n)` for it need a hashmap and number

```ts
export function longestConsecutive(nums: number[]): number {
  if(nums.length === 0) return 0;

  const helper: Map<number, number> = new Map(); // num => numsSmaller
  let largest = 0;

  nums.sort((a,b)=> a - b);

  for(let i = 0; i < nums.length; i++) {
    let found = helper.get(nums[i] - 1);

    if(found !== undefined) {
      helper.set(nums[i], found + 1);
      largest = Math.max(largest, found + 1);
    } else {
      helper.set(nums[i], 0);
    }
  }

  return largest + 1;
}
```

### HashMap without sort

> The time complexity is `O(n2)`, because in worst-case scenario, it will have to go down each element twice
```ts
export function solutionTwo(nums: number[]): number {
  const helper: Map<number, number> = new Map();
  let ans = 0;

  for(let n of nums) {
    helper.set(n, n);
  }

  
  for(let num of nums) {
    let right = helper.get(num);
    // check if there's a number next to it
    while(right !== undefined) {
      console.log(`there's a right next to ${right}`)
      console.log(`distance is ${right - num + 1}`)
      ans = Math.max(ans, right - num + 1);

      right = helper.get(right + 1);
    }
  }

  return ans;
}
```
*a walkthrough of the solution*
```
[100, 4, 200, 1, 3, 2]

map(100 => 100, 4 => 4, 1 => 1, 3 => 3, 2 => 2)

|   num   |   right   |   ans   |   
    100     undefined      0
    4           4          0    
    200     undefined  
    1           1
    1           2        2-1+1 = 2
    1           3        3-1+1 = 3
    1           4        4-1+1 = 4
```

```ts
export function solutionTwo(nums: number[]): number {
  const helper: Map<number, number> = new Map();
  let ans = 0;

  for(let n of nums) {
    helper.set(n, n);
  }

  for(let num of nums) {
    // if num - 1 is not in the array
    if(helper.get(num - 1) === undefined) {
      // test num + 1, num + 2 ...
      let right = num + 1;
      while(helper.get(right) !== undefined) {
        right++;
      }
      ans  = Math.max(ans, right - num);
    }
  }

  return ans;
}
```


Here's an improvement to this, 


### DP
because the problem is about finding consecutive ones, so each of the nums is actually relying on the previous one 

1. DP: `dp[i]` should be representing the maximum consecutive sequence's length up to `i`. 
Specifically, for any given number `num[i]`, the maximum consecutive sequence by `i`, 
should be the sum of the maximum consecutive sequence of `num[i -1]` and `num[i + 1]`, plus itself
which can be expressed as: `dp[i] = dp[i-1] + dp[i+1] + 1`
2. Init Value: `dp[0] = 1`;
3. Iteration direction: the array order




