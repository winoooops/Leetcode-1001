export function removeElement(nums: Number[], target: Number) {
  if(nums.length === 0 ) return 0 
  
  let slow = 0 

  for(let fast = 0; fast < nums.length ; fast++) {
    if(nums[fast] !== target) {
      nums[slow] = nums[fast]  
      slow++
    }
  }

  return slow
}
