import { increasingSub } from "./index"

describe("Leetcode 491: Increasing Subsequences", () => {
  it("should be right", () => {
    const nums = [4, 6, 7, 7]
    expect(increasingSub(nums)).toEqual(expect.arrayContaining([[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]))
  })

  it("should be right", () => {
    const nums = [4,4,3,2,1]
    expect(increasingSub(nums)).toEqual([[4,4]])
  })
})

