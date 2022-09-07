import { findContentChildren } from "./index"

describe("Leetcode 455: Find Content Children", () => {
  it("should be right", () => {
    const g = [1,2,3]
    const s = [1,1]
    expect(findContentChildren(g, s)).toBe(1)
  })

  it("should be right", () => {
    const g = [1,2]
    const s = [1,2,3]
    expect(findContentChildren(g, s)).toBe(2)
  })

  it("should be right", () => {
    const g = [2,2,3]
    const s = [1,1]
    expect(findContentChildren(g, s)).toBe(0)
  })

  it("should be right", () => {
    const g = [1,2,3]
    const s = [3]
    expect(findContentChildren(g, s)).toBe(1)
  })

  it("should be right", () => {
    const g = [10,9,8,7]
    const s = [5,6,7,8]
    expect(findContentChildren(g, s)).toBe(2)
  })
})
