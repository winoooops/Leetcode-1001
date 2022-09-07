import { wiggleMaxLength, wiggleMaxLengthWithDP } from "./index"

describe("Leetcode 376: Wiggle Subsequence", () => {
  it("should be 6", () => {
    const nums = [1,7,4,9,2,5]
    expect(wiggleMaxLength(nums)).toBe(6)
    expect(wiggleMaxLengthWithDP(nums)).toBe(6)
  })
  it("should be 7", () => {
    const nums = [1,17,5,10,13,15,10,5,16,8] 
    expect(wiggleMaxLength(nums)).toBe(7)
    expect(wiggleMaxLengthWithDP(nums)).toBe(7)
  })
  it("should be 2", () => {
    const nums = [1,2,3,4,5,6,7,8,9]
    expect(wiggleMaxLength(nums)).toBe(2)
    expect(wiggleMaxLengthWithDP(nums)).toBe(2)
  })
})
