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

// [2,3,1,2,4,3] 7
// left, right, sum, result
// 0 0 2 8
// 0 1 5 8
// 0 2 6 8 
// 0 3 8 4 
// 1 4 10 4 
// 2 4 7 3
// 3 5 9 3 
// 4 5 7 2

