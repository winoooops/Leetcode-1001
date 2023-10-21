export function minSubArrayLen(target: number, nums: number[]):number {
  let result = Number.MAX_VALUE;
  let slow = 0;
  let sum = 0;

  for(let fast = 0; fast < nums.length; fast++) {
    sum += nums[fast];

    while(sum >= target) {
      result = Math.min(result, fast - slow + 1)
      sum -= nums[slow];
      slow++;
    }
  }

  return result === Number.MAX_VALUE ? 0 : result;
}

export function minSubArrayLen2(target: number, nums: number[]): number {
  let result: number = Number.MAX_VALUE;
  let slow = 0;
  let fast = 0;
  let sum  = 0;

  while(fast < nums.length) {
    sum += nums[fast];

    while(sum >= target) {
      result = Math.min(result, fast - slow + 1);
      sum -= nums[slow++];
    }

    fast++;
  }

  return result === Number.MAX_VALUE ? 0 : result;
}
