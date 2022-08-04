import { minDepth } from "./index"
import { TreeNode } from "../../treenode.type"

describe("Leetcode 111: Minimal Depth", () => {
  it("should be right", () => {
    const list = [1,2,3,4,null]
    const root = TreeNode.create(list)
    expect(minDepth(root)).toEqual(2)
  })
})
