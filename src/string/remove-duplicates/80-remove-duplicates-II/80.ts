export function removeDuplicateII(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let slow = 2;
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}
