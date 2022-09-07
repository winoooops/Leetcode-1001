import { maxSubArray } from "./index"

describe("Leetcode 53: Max Subarray", () => {
  it("should be 6", () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4] 
    expect(maxSubArray(nums)).toBe(6)
  })
  it("should be 1", () => {
    const nums = [1] 
    expect(maxSubArray(nums)).toBe(1)
  })
  it("should be 23", () => {
    const nums = [5,4,-1,7,8] 
    expect(maxSubArray(nums)).toBe(23)
  })
})
