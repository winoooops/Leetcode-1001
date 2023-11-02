export function solutionOne(nums: number[]): number {
  if(nums.length === 0) return 0;

  const helper: Map<number, number> = new Map(); // num => numsSmaller
  let largest = 0;

  nums.sort((a,b)=> a - b);

  for(let i = 0; i < nums.length; i++) {
    let found = helper.get(nums[i] - 1);

    if(found !== undefined) {
      helper.set(nums[i], found + 1);
      largest = Math.max(largest, found + 1);
    } else {
      helper.set(nums[i], 0);
    }
  }

  return largest + 1;
}


export function solutionTwo(nums: number[]): number {
  const helper: Map<number, number> = new Map();
  let ans = 0;

  for(let n of nums) {
    helper.set(n, n);
  }

  for(let num of nums) {
    // if num - 1 is not in the array
    if(helper.get(num - 1) === undefined) {
      // test num + 1, num + 2 ...
      let right = num + 1;
      while(helper.get(right) !== undefined) {
        right++;
      }
      ans  = Math.max(ans, right - num);
    }
  }

  return ans;
}

export function solutionThree(nums: number[]): number {
  const dpMap: Map<number, number> = new Map();
  let ans = 0;

  for(let i = 1; i < nums.length; i++) {
    // prevent duplication
    if(!dpMap.has(nums[i])) {
      let dpPrevious = dpMap.get(nums[i] - 1) || 0;
      let dpNext = dpMap.get(nums[i] + 1) || 0;

      ans = Math.max(ans, dpPrevious + dpNext + 1)
      dpMap.set(nums[i], dpPrevious + dpNext + 1);
      dpMap.set(nums[i], dpPrevious + dpNext + 1);
      console.log(`dp[${nums[i]}]: ${dpPrevious + dpNext + 1}`);
    }
  }

  return ans;
}

