import { minCostClimbStairs } from "./index"

describe("Leetcode 746: Min-Cost Climbing Stairs", () => {
  it("should be 15", () => {
    const cost = [10, 15, 20];
    expect(minCostClimbStairs(cost)).toBe(15);
  })

  it("should be 6", () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    expect(minCostClimbStairs(cost)).toBe(6);
  })
});