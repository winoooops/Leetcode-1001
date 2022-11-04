import { numTrees } from "./index"

describe("Leetcode 96: Unique BST", () => {
  it("it should be 5", () => {
    expect(numTrees(3)).toBe(5);
  })

  it("should be 42", () => {
    expect(numTrees(5)).toBe(42);
  })
})
