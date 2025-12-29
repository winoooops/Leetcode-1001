export function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate: number | undefined;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += candidate === num ? 1 : -1;
  }

  return candidate!;
}
