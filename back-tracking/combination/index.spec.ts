import { combinations } from "./index"

describe("Leetcode 77: Combinations", () => {
  it("should be right", () => {
    expect(combinations(4,2)).toEqual(expect.arrayContaining([[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]))
  })
})
