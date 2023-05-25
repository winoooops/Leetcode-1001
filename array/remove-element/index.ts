export function removeElement(nums: Number[], target: Number) {
  let length = nums.length;

  let left: number = 0; // index to alter

  for (let right = 0; right < length; right ++){
    if (nums[right] !== target) {
      nums[left++] = nums[right]
    }
  }

  return left;
}