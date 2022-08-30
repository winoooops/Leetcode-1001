import { permutationsII } from "./index"

describe("Leetcode 47: Permutations II", () => {
  it("should be right", () => {
    const nums = [1,2,1]
    expect(permutationsII(nums)).toEqual(expect.arrayContaining([[1,1,2], [1,2,1], [2,1,1]]))
  })
})
