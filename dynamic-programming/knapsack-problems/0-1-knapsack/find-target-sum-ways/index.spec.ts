import { findTargetSumWays } from "./index"

describe("Leetcode 494: Find Target Sum Ways", () => {
  it("should be 5", () => {
    const nums = [1, 1, 1, 1, 1]
    expect(findTargetSumWays(nums, 3)).toBe(5);
  });

  it("should be 0", () => {
    const nums = [7, 9, 3, 8, 0, 2, 4, 8, 3, 9];
    expect(findTargetSumWays(nums, 0)).toBe(0);
  });
});