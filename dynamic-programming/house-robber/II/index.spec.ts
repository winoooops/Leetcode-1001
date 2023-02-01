import { rob } from "./index"

describe("Leetcode 213: House Robber", () => {
  it("should be 3", () => {
    expect(rob([2, 3, 2])).toBe(3);
  })

  it("should be 4", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  })

  it("should be 3", () => {
    expect(rob([1, 2, 3])).toBe(3);
  })
})
