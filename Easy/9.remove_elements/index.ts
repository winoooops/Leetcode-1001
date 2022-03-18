export const removeElement = (nums: number[], val: number): number => {
  if (!nums.length) return 0

  let slow = 0

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      nums[slow] = nums[index]
      slow++
    }
  }
  return slow
}

console.log(removeElement([2, 2, 3, 3], 2))