import { permutations } from "./index"

describe("Leetcode 46: Permuatations", () => {
  it("it should be right", () => {
    const nums = [1,2,3]
    expect(permutations(nums)).toEqual(expect.arrayContaining([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]))
  })

  it("it should be right", () => {
    const nums = [0,1]
    expect(permutations(nums)).toEqual(expect.arrayContaining([[0,1],[1,0]]))
  })

  it("it should be right", () => {
    const nums = [1]
    expect(permutations(nums)).toEqual([[1]])
  })
})
