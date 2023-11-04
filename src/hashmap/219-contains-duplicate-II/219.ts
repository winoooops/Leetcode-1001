export function containsNearbyDuplicate(nums: number[], k: number) {
  const numMap: Map<number, number> = new Map(); // number -> index

  for(let i = 0; i < nums.length; i++) {
    let found = numMap.get(nums[i]);
    if(found !== undefined && i - found <= k) {
      return true;
    }
    numMap.set(nums[i], i);
  }

  return false;
}

export function containsNearbyDuplicateTwo(nums: number[], k: number): boolean {
  const numSet: Set<number> = new Set();

  for(let i = 0; i < nums.length; i++) {
    if(i > k) {
      numSet.delete(nums[i - k - 1]);
    }

    if(numSet.has(nums[i])) return true;

    numSet.add(nums[i]);
  }

  return false;
}
