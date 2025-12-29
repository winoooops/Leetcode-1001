# 11. Container With Most Water

## Description
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Given an array `height` where `height[i]` is the height of a vertical line at `x = i`, return the maximum area of water that can be contained between two lines. The container must remain upright (no slanting).

## Example
```
Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49
```

## Solution

### Two pointers shrinking toward the center
- Start pointers at both ends so the width is as large as possible.
- Compute area each step and track the maximum.
- Move the pointer at the shorter line inward to look for a taller boundary that could form a larger area.

```ts
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const min = Math.min(height[left], height[right]);
    const distance = right - left;
    max = Math.max(max, min * distance);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
```
