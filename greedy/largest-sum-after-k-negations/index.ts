export function largestSumAfterKNegations(nums: number[], k: number): number {
  let result: number = 0
  if (!nums.length) return result

  nums.sort((a, b) => Math.abs(b) - Math.abs(a))

  let right: number = 0
  let left: number = 0

  while (left < k && right < nums.length) {
    if (nums[right] < 0) {
      nums[right] *= -1
      left++
    }
    right++
  }

  while (left < k) {
    nums[nums.length - 1] *= -1
    left++
  }

  return nums.reduce((a, b) => a + b, 0)
}

export function improvedFunc(nums: number[], k: number): number {
  let result: number = 0
  if (!nums.length) return result

  let sum: number = 0
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
    }
    sum += nums[i]
  }

  // k % 2 === 0 即代表符号一样, 不需要更改
  // k % 2 > 0 代表符号不一样, 需要更改
  if (k % 2 > 0) {
    sum -= 2 * nums[nums.length - 1]
  }


  return sum
}
