import { jumpOne, jumpTwo } from "./index"

describe("Leetcode 45: JUmp Game II", () => {
  it("should be 2", () => {
    const nums = [2,3,1,1,4]
    expect(jumpOne(nums)).toBe(2)
    expect(jumpTwo(nums)).toBe(2)
  })
})
