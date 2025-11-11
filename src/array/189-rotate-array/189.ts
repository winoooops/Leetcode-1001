export function rotate(nums: number[], k: number): void {
  const n = k % nums.length;
  if (n === nums.length) return;

  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, n - 1);
  reverse(n, nums.length - 1);
}
