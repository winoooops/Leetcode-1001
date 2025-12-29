export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    const target = 0 - sorted[i];
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[left] + sorted[right];
      if (sum === target) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) {
          left++;
        }
        while (left < right && sorted[right] === sorted[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
