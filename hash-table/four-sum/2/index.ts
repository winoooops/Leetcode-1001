export function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const twoMap: Map<number,number> = new Map()
  let count = 0 
  
  for(let i of nums1) {
    for(let j of nums2){
      twoMap.set(i+j, (twoMap.get(i+j) || 0) + 1)
    }
  }
  
  for(let x of nums3) {
    for(let y of nums4){
      count += twoMap.get(0-(x+y)) || 0
    }
  } 
  
  return count
}
