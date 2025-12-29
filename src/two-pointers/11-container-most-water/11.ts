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
