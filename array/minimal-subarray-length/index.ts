export function minSubArrayLen(nums: number[], target: number) {
  const length = nums.length;
  let result = length + 1 
  let slow = 0;
  let sum = 0;

  for(let fast = 0; fast < length ; fast++) {
    sum += nums[fast]

    while (sum >= target) {
      console.log(nums.slice(slow, fast+1))
      result = Math.min(fast-slow+1, result)
      sum -= nums[slow]
      slow ++
    }
  }

  return result > length ? 0 : result
}
