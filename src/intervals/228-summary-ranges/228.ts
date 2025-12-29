export function summaryRanges(nums: number[]): string[] {
  const ans: string[] = []

  let slow = 0, fast = 0;
  let path: string;

  while(fast < nums.length) {
    slow = fast;
    while(fast+1 < nums.length && nums[fast] + 1 === nums[fast+1]) {
      fast++;
    }

    path = `${nums[slow]}`;

    if(slow < fast) {
      path += `->${nums[fast]}`;
    }
    ans.push(path);
    fast++;
  }

  return ans;
}
