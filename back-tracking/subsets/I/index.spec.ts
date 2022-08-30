import { subsets } from "./index"

describe("Leetcode 78: Subsets", () => {
  it("should be right", () => {
    const nums = [1,2,3]
    expect(subsets(nums)).toEqual(expect.arrayContaining([ [3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], [] ]))
  })
})
