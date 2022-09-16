import { candy } from "./index"

describe("Leetcode 135: Candies", () => {
  it("it should be 5", () => {
    expect(candy([1,0,2])).toBe(5)
  })

  it("it should be 4", () => {
    expect(candy([1,2,2])).toBe(4)
  })
})
