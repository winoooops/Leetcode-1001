export function twoSum(nums: number[], target: number): number[] {
  let result = []
  let index: number | undefined
  const numsMap: Map<number, number> = new Map()

  for(let i = 0 ; i < nums.length ; i++) {
    index = numsMap.get(target - nums[i])
    if(index !== undefined) {
      result = [i, index];
    }
    numsMap.set(nums[i], i);
  }

  return result;
}
