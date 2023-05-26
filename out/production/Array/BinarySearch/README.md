
# 二分查找

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例 1:
```
输入: nums = [-1,0,3,5,9,12], target = 9     
输出: 4       
解释: 9 出现在 nums 中并且下标为 4     
```

示例 2:
```
输入: nums = [-1,0,3,5,9,12], target = 2     
输出: -1        
解释: 2 不存在 nums 中因此返回 -1        
提示：
```

* 你可以假设 nums 中的所有元素是不重复的。
* n 将在 [1, 10000]之间。
* nums 的每个元素都将在 [-9999, 9999]之间。

## 思路

* 因为是有序数组并且数组之间的元素不重复, 那么我们就可以考虑这个是否可以使用二分法.
* 考虑二分法的区间为: 1) *左闭右闭*: `[left, right]`, 或者2) *左闭右开*: `[left, right)`


### 左闭右闭二分查找

循环的条件是 `while(left <= right)`
```typescript 
export function BinarySearch(nums: Number[], target: Number) {
  if(!target && target !== 0) return -1

  const length = nums.length  
  
  let left = 0 
  let right = length - 1 

  while(left <= right) {
    let middle = Math.floor((left + right) / 2)

    if(nums[middle] === target ) return middle

    if(nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1 
    }
  } 

  return -1 
}
```

### 左闭右开二分查找

循环的条件是 `while(left < right)`
```typescript
export function BinarySearch(nums: Number[], target: Number) {
  if(!target && target !==0) return -1

  const length = nums.length  
  
  let left = 0 
  let right = length - 1 

  while(left < right) {
    let middle = Math.floor((left + right) / 2)

    if(nums[middle] === target ) return middle

    if(nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle 
    }
  } 

  return -1 
}
```

