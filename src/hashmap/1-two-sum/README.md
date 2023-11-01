# 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



## Example

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Solution 

### HashMap

* use a hashMap to store all the number and its index.
* map the numbers once, update the hashmap.
* go through every number using index `i`, check if we can found number `target - nums[i]` in the hashMap
  * it's possible to find duplicated element such that a element is used twice, so need to add constraints

```ts
export function twoSumTwo(nums: number[], target: number): number[] {
  const results: number[] = [];
  const numMap: Map<number, number> = new Map(); // number -> index

  for(let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], i);
  }

  for(let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    const found = numMap.get(remaining);

    if(numMap.has(remaining) && found !== undefined && found !== i) {
      return [i, found];
    }
  }

  return results;
}
```


### Improved 

* use a hashMap to store all the number and its index.
* go through every number using index `i`, 
  * check if we can found number such that `target - nums[i]` is in the hashmap
  * update the hashmap if not match previous condition

```ts
export function twoSumThree(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();

  for(let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    const found = numMap.get(remaining);
    if(numMap.has(remaining) && found !== undefined) {
      return [i, found];
    }
    numMap.set(nums[i], i);
  }

  return [];
}
```
