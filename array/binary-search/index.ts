export function BinarySearch(nums: Number[], target: Number) {
  if (!target && target !== 0) return -1;

  const length = nums.length;

  let left = 0;
  let right = length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}