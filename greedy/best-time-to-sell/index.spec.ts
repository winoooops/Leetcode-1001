import { maxProfit, maxProfitWithDP } from "./index"

describe("Leetcode 122: Best time to buy a stock", () => {
  it("should be 7", () => {
    const nums = [7, 1, 5, 3, 6, 4]
    expect(maxProfit(nums)).toBe(7)
    expect(maxProfitWithDP(nums)).toBe(7)
  })

  it("should be 4", () => {
    const nums = [1,2,3,4,5]
    expect(maxProfit(nums)).toBe(4)
    expect(maxProfitWithDP(nums)).toBe(4)
  })

  it("should be 0", () => {
    const nums = [7,6,5,4,3,1]
    expect(maxProfit(nums)).toBe(0)
    expect(maxProfitWithDP(nums)).toBe(0)
  })
})
