import { merge } from "./index"

describe("Leetcode 56: Merge Intervals", () => {
  it("should be right", () => {
    const intervals = [[1,3], [2,6], [8,10],[15,18]]
    expect(merge(intervals)).toEqual(expect.arrayContaining([[1,6], [8,10], [15, 18]]))
  })

  it("should be right", () => {
    const intervals = [[1,4], [4,5]]
    expect(merge(intervals)).toEqual(expect.arrayContaining([[1,5]]))
  })
})
