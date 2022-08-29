import { combinationSum } from "./index"

describe("Leetcode 40: Combination Sum II", () => {
  it("should be right", () => {
    const list = [10, 1, 2, 7, 6, 1, 5]
    const target = 8 

    expect(combinationSum(list, target))
      .toEqual(expect.arrayContaining([[1,7], [1,2,5], [2,6], [1,1,6]]))
  })

  it("should be right", () => {
    const list = [2,5,2,1,2]
    const target = 5 

    expect(combinationSum(list, target))
      .toEqual(expect.arrayContaining([[1,2,2], [5]]))
  })
})

