import { combinationSum } from "./index"

describe("Leetcode 377: Combination Sum IV", () => {
  it("should be 7", () => {
    const nums = [1, 2, 3];
    const target = 4
    expect(combinationSum(nums, target)).toBe(7);
  });

  it("should be 0", () => {
    expect(combinationSum([9], 3)).toBe(0);
  })
})