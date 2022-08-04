import { maxDepth } from "./index"
import { TreeNode } from "../../treenode.type"


describe("Leetcode 104: Map Depth", () => {
  it("should return 3", () => {
    const root = TreeNode.create([3, 9, 20, null, null, 15, 7])
    expect(maxDepth(root)).toEqual(3)
  })
})

