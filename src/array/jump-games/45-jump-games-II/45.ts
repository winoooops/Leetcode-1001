export function jump(nums: number[]): number {
  let currCoverage = 0;
  let nextCoverage = nums[0];
  let steps = 0;

  for (let i = 0; i < nums.length; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i]);

    if (nextCoverage >= nums.length - 1) {
      steps++;
      break;
    }

    if (i === currCoverage) {
      steps++;
      currCoverage = nextCoverage;
    }
  }

  return steps;
}

export function jump2(nums: number[]): number {
  let currCoverage = 0;
  let nextCoverage = nums[0];
  let steps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i]);

    if (i === currCoverage) {
      currCoverage = nextCoverage;
      steps++;
    }
  }

  return steps;
}
