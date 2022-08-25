import { combinationSum } from "./index"

describe("Leetcode 216: Combination Sum", () => {
  it("should be right", () => {
    expect(combinationSum(7, 3)).toEqual(expect.arrayContaining([[1, 2, 4]]))
  })

  it("should be right", () => {
    expect(combinationSum(9, 3)).toEqual(expect.arrayContaining([[1, 2, 6], [1, 3, 5], [2, 3, 4]]))
  })

  it("should be ", () => {
    console.log(combinationSum(45, 9))
  })
})
