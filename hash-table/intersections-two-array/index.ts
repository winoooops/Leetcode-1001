export function intersections(nums1: number[], nums2: number[]): number[] {
  const result: Set<number> = new Set()
  const setOne: Set<number> = new Set(nums1)

  for(let i of nums2) {
    if(setOne.has(i)){
      result.add(i)
    }
  }

  return Array.from(result)
}
