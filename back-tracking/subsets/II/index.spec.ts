import { subsetsWithDup } from "./index"

describe("Leetcode 90: Subsets with Duplicate", () => {
  it("should be right", () => {
    const nums = [1,2,2]
    expect(subsetsWithDup(nums)).toEqual([[],[1],[1,2],[1,2,2],[2],[2,2]])
  })

  it("should be right", () => {
    const nums = [0]
    expect(subsetsWithDup(nums)).toEqual([[],[0]])
  })
})
