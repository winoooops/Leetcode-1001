import { integerBreak } from "./index"

describe("Leetcode 343: Integer Break", () => {
  it("should be 36", () => {
    expect(integerBreak(10)).toBe(36);
  })

  it("should be 1", () => {
    expect(integerBreak(2)).toBe(1);
  })
})