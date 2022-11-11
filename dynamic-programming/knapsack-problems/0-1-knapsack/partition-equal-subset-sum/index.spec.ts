import { canPartition } from "./index" 

describe("Leetcode 416: Partition Equal Subset Sum", () => {
  it("should be true", () => {
    const nums = [1,5,11,5];
    expect(canPartition(nums)).toEqual(true);
  })

  it("should be false", () => {
    const nums = [1,2,3,5];
    expect(canPartition(nums)).toEqual(false);
  })
})
