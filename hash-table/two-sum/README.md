# 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


## 示例

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

## 思路

因为既需要知道数字, 有需要数字在数组中的下标, 所以不考虑使用数组或者Set来做哈希. 

```typescript
export function twoSum(nums: number[], target: number): number[] {
  let result = []
  let index: number | undefined
  const numsMap: Map<number, number> = new Map()

  for(let i = 0 ; i < nums.length ; i++) {
    index = numsMap.get(target - nums[i])
    if(index !== undefined) {
      result = [i, index];
    }
    numsMap.set(nums[i], i);
  }

  return result;
}
```
