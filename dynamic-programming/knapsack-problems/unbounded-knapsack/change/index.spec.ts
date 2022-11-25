import { change } from "./index"

describe("Leetcode 518: Change II", () => {
  it("should be 4", () => {
    const coins = [1, 2, 5];
    expect(change(coins, 5)).toBe(4);
  })

  it("should be 0", () => {
    expect(change([2], 3)).toBe(0);
  })

  it("should be 1", () => {
    expect(change([10], 10)).toBe(1);
  })
})
