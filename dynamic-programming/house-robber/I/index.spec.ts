import { rob } from "./index"

describe("Leetcode 198: House Robber", () => {
  it("it should be 4", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  })

  it("it should be 12", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  })
})