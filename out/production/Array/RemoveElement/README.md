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

![双指针](../../../static/img/array/two-index.gif)

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

# 26.从有序数组中移除重复元素
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

## 示例
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 思路
* 考虑到最后需要返回的是有几个不重复的元素, 所以使用双指针解题. 
* 和删除重复元素类似, 如果两者不同那么都移动指针并且`nums[slow] = nums[fast]`; 如果相同, 那么慢指针不变, 快指针继续移动知道两者再次不同.

```java
public class Solution {
    public int removeDuplicate(int[] nums)
    {
        int slow = 0;
        for(int fast = 0; fast < nums.length; fast++)
        {
            if(nums[fast] != nums[slow])
            {
                slow++;
                nums[slow] = nums[fast];
            }
        }

        return slow + 1;
    }
}
```

# 80.从有序数组中删除元素II 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that **each unique element appears at most twice**. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## 示例
```
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

```
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 思路 
### 添加重复次数
在[26.删除重复元素]的基础上多一个是否超过2个的条件即可



### 间隔比较
> 因为只允许2个或以内的相同, 也就是说只要比较比较相隔一个元素的两个元素是否相同即可; **中间那个元素是否相同不影响结果**.

```java
public class Solution {
    public int removeDuplicateII(int[] nums)
    {
        // do need to care if they are the same,
        // just check if the 3rd is equals to the 1st
        int slow = 2;

        for(int fast = slow; fast < nums.length; fast++)
        {
            if(nums[fast] != nums[slow - 2])
            {
                nums[slow++] = nums[fast];
            }

        }

        return slow + 1;
    }
}
```
