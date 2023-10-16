export function twoSum(numbers: number[], target: number): number[] {
  let left: number = 1;
  let right: number = numbers.length;
  let result: number;

  while(left < right) {
    result = numbers[left-1] + numbers[right-1];
    if(result === target) return [left, right];
    if(result < target) left++;
    if(result > target) right--;
  }
  return [];
}
