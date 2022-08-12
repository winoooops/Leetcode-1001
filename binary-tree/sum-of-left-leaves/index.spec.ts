import { TreeNode } from "../treenode.type"
import { sumOfLeftLeaves } from "./index"

describe("Leetcode 404: Sum of Left Leaves", () => {
  it("should be 24", () => {
    const root = TreeNode.create([3,9,20,null,null,15,7])
    expect(sumOfLeftLeaves(root)).toBe(24)
  })

  it("should be 0", () => {
    const root = TreeNode.create([1,null,2])
    expect(sumOfLeftLeaves(root)).toBe(0)
  })
})
