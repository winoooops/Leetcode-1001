import { findMinArrowShots } from "./index"


describe("Leetcode 452: Find Min Arrow Shots", () => {
  it("it should be 2", () => {
    const points = [[10,16],[2,8],[1,6],[7,12]]
    expect(findMinArrowShots(points)).toBe(2)
  })
  it("it should be 4", () => {
    const points = [[1,2],[3,4],[5,6],[7,8]]
    expect(findMinArrowShots(points)).toBe(4)
  })
  it("it should be 2", () => {
    const points = [[1,2],[2,3],[3,4],[4,5]]
    expect(findMinArrowShots(points)).toBe(2)
  })
  it("it should be 1", () => {
    const points = [[1,2]]
    expect(findMinArrowShots(points)).toBe(1)
  })
  it("it should be 1", () => {
    const points = [[2,3], [2,3]]
    expect(findMinArrowShots(points)).toBe(1)
  })
})
