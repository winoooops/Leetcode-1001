export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array.from({length: nums.length}, () => 1);

  let prefix = 1;
  // keep down the product of the "lefties"
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  // keep down the product of the "righties"
  // and calculate the result of lefties and righties on given index
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
