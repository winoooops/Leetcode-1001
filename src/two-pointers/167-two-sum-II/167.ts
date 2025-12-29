export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const result = numbers[left] + numbers[right];

    if (result === target) return [left + 1, right + 1];

    if (result < target) {
      left++;
      continue;
    }

    if (result > target) {
      right--;
      continue;
    }
  }

  return [];
}
