export function sortSquares(nums: number[]): number[] {
  const length = nums.length 
  const result: number[]= new Array(length)

  let i = 0
  let j = length - 1 
  let k = length - 1
  while(i <= j) {
    if(Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[k] = nums[i] * nums[i]
      i ++
    } else {
      result[k] = nums[j] * nums[j]
      j --
    }
    k--
  }
  console.log(i)
  console.log(j)
  console.log(result)
  return result 
}
