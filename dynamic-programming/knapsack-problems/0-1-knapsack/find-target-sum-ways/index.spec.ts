import { findTargetSumWays } from "./index"

describe("Leetcode 494: Find Target Sum Ways", () => {
  it("should be 5", () => {
    const nums = [1, 1, 1, 1, 1]
    expect(findTargetSumWays(nums, 3)).toBe(5);
  });

  it("should be 1", () => {
    const nums = [1];
    expect(findTargetSumWays(nums, 1)).toBe(1);
  });
});