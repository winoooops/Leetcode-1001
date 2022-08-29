import { combinationSum } from "./index"

describe("Leetcode 39: Combination Sum", () => {
  it("should be right", () => {
    const candidates = [2,3,6,7]
    const target = 7 
    expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining([[7], [2,2,3]]))
  })

  it("should be right", () => {
    const candidates = [2,3,5]
    const target = 8 
    expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining([[2,2,2,2], [2,3,3], [3,5]]))
  })
})
