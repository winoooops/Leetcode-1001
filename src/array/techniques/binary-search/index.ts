export function binarySearch(nums: number[], val: number): number {
  if (nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (val === nums[middle]) return middle;

    if (val < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
