import { lemonadeChange } from "./index"

describe("Leetcode 860: Lemonade Change", () => {
  it("it should be true", () => {
    const bills = [5,5,5,10,20]
    expect(lemonadeChange(bills)).toEqual(true)
  }) 

  it("it should be false", () => {
    const bills = [5,5,10,10,20]
    expect(lemonadeChange(bills)).toEqual(false)
  })
})
