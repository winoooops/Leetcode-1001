# 移除元素

给你一个数组 `nums` 和一个值 `val`，你需要 **原地** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **原地** 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

**重点: 要知道数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖.**

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
``` 

示例 1：
```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```
示例 2：
```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

## 暴力解法
```typescripts
export function removeElement(nums: Number[], target: Number) {
  let length = nums.length

  for(let i = 0; i < length; i++) {
    if(nums[i] === target) {
      for(let j = i+1; j < length; j++) {
        nums[j-1] = nums[j]
      }
      if(i !== 0) i--
      length-- 
    }
  } 

  return length
}
```

## 双指针

![双指针](./two-index.gif)

和移除重复元素类似, 也可使用快慢指针来达成变走边整理的效果. 

因为只走了一遍, 所以时间复杂度是`O(n)`
因为没有新增数组, 所以空间复杂度是`O(1)`


```ts
export function removeElement(nums: Number[], target: Number) {
  if(nums.length === 0 ) return 0 
  
  let index = 0 

  for(let j = index ; j < nums.length ; j++) {
    // if the numer checks out, replace it at the current index
    if(nums[j] !== target ) {
      nums[index] = nums[j]
      index++
    }
    // if the numer equals to target, simply ignore it, so that it could be replaced later
  }
  return index
}
```
