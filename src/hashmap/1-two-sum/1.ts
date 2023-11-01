

export function twoSumOne(nums: number[], target: number): number[] {
  const results: number[] = [];

  for(let left = 0; left < nums.length - 1; left++) {
    for(let right = left + 1; right < nums.length; right++) {
      if(nums[left] + nums[right] === target) return [left, right];
    }
  }

  return results;
}

export function twoSumTwo(nums: number[], target: number): number[] {
  const results: number[] = [];
  const numMap: Map<number, number> = new Map(); // number -> index

  for(let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], i);
  }

  for(let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    const found = numMap.get(remaining);

    if(numMap.has(remaining) && found !== undefined && found !== i) {
      return [i, found];
    }
  }

  return results;
}


export function twoSumThree(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();

  for(let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    const found = numMap.get(remaining);
    if(numMap.has(remaining) && found !== undefined) {
      return [i, found];
    }
    numMap.set(nums[i], i);
  }

  return [];
}
