# 167. Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` 
where `1 <= index1 < index2 < numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.


## Example
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

```
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

### Two Pointer
> Because the array is sorted, so we could use pointers to control the sum to be bigger or smaller

* let pointer1 begins from left of the array, while pointer2 begin from right of the array
  * if the sum of the numbers pointers are pointing is equal to target, return result
  * if the sum of the numbers pointers are pointing is smaller than target, `pointer1++`
  * if the sum of the numbers pointers are pointing is bigger than target, `pointer2--`

```ts
export function twoSum(numbers: number[], target: number): number[] {
  let left: number = 1;
  let right: number = numbers.length;
  let result: number;

  while(left < right) {
    result = numbers[left-1] + numbers[right-1];
    if(result === target) return [left, right];
    if(result < target) left++;
    if(result > target) right--;
  }
  return [];
}
```
