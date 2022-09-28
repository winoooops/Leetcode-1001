import { maxProfit, maxProfitDP } from "./index"

describe("Leetcode 714: Best time to sell with fee", () => {
  it("should be 8", () => {
    const prices = [1,3,2,8,4,9]
    const fee = 2 
    expect(maxProfit(prices, fee)).toBe(8)
    expect(maxProfitDP(prices, fee)).toBe(8)
  })

  it("should be 6", () => {
    const prices = [1,3,7,5,10,3]
    const fee = 3 
    expect(maxProfit(prices, fee)).toBe(6)
    expect(maxProfitDP(prices, fee)).toBe(6)
  })
})
