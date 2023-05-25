export function sortSquares(nums: number[]): number[] {
  const length = nums.length;
  const result: number[] = [];

  let left = 0;
  let right = length - 1;
  let k = length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[k] = nums[left] * nums[left];
      left++;
    } else {
      result[k] = nums[right] * nums[right];
      right--;
    }
    k--;
  }

  return result;
}

console.log(sortSquares([-4, -1, 0, 3, 10]));
