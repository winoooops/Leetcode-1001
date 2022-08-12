import { TreeNode } from "../treenode.type"
import { findBottomLeftValue } from "./index"


describe("LeetCode 513: Find Bottom Left Tree Value", () => {
  it("should be 1", () => {
    const root = TreeNode.create([2,1,3])
    expect(findBottomLeftValue(root)).toBe(1)
  })

  it("should be 7", () => {
    const root = TreeNode.create([1,2,3,4,null,5,6,null,null,7])
    expect(findBottomLeftValue(root)).toBe(7)
  })

})
