export function removeElement(nums: Number[], target: Number) {
  if(nums.length === 0 ) return 0 
  
  let index = 0 

  for(let j = index ; j < nums.length ; j++) {
    // if the numer checks out, replace it at the current index
    if(nums[j] !== target ) {
      nums[index] = nums[j]
      index++
    }
    // if the numer equals to target, simply ignore it, so that it could be replaced later
  }
  return index
}
