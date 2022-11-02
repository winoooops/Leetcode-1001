import { climbStairs } from "./index"

describe("Leetcode 70. Climb Stairs", () => {
  it("should be 2", () => {
    expect(climbStairs(2)).toBe(2);
  })

  it("should be 3", () => {
    expect(climbStairs(3)).toBe(3);
  })
})