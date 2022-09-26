import { eraseOverlapIntervals } from "./index"

describe("Leetcode 435: Erase Overlap Intervals", () => {
  it("should be 1", () => {
    const intervals = [[1,2],[2,3],[3,4],[1,3]]
    expect(eraseOverlapIntervals(intervals)).toBe(1)
  })

  it("should be 2", () => {
    const intervals = [[1,2],[1,2],[1,2]]
    expect(eraseOverlapIntervals(intervals)).toBe(2)
  })

  it("should be 1", () => {
    const intervals = [[1,2],[2,3]]
    expect(eraseOverlapIntervals(intervals)).toBe(0)
  })
})
