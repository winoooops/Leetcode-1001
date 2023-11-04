# 219. Contains Duplicate II

Given an integer array `nums` and an integer `k`, 
return true if there are two distinct indices `i` and `j` in the array such that 
`nums[i] == nums[j]` and `abs(i - j) <= k`.

Constraints:
* 1 <= nums.length <= 105
* -109 <= nums[i] <= 109
* 0 <= k <= 105

## Example

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## Solution 

### HashMap

> Time Complexity is `O(n)`, Space Complexity is `O(n)`, because need to use a hashmap

```ts
export function containsNearbyDuplicate(nums: number[], k: number) {
  const numMap: Map<number, number> = new Map(); // number -> index

  for(let i = 0; i < nums.length; i++) {
    let found = numMap.get(nums[i]);
    if(found !== undefined && i - found <= k) {
      return true;
    }
    numMap.set(nums[i], i);
  }

  return false;
}
```

### Sliding Window

* maintain a set that has length smaller or equal to `k`
* iterate through the array,
  * delete the number at the bottom of the set when length is equal to `k` 
  * check if there's duplicate number in the set
  * add number to the set if the length is smaller than `k`

```ts
export function containsNearbyDuplicateTwo(nums: number[], k: number): boolean {
  const numSet: Set<number> = new Set();

  for(let i = 0; i < nums.length; i++) {
    if(i > k) {
      numSet.delete(nums[i - k - 1]);
    }

    if(numSet.has(nums[i])) return true;

    numSet.add(nums[i]);
  }

  return false;
}
```


