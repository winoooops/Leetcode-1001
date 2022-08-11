import { isBalanced } from "./index"
import { TreeNode } from "../treenode.type"

describe("Leetcode 110: Balanced Tree Node", () => {
  it("should be true", () => {
    const list = [5,4,6,null,null,7,8]
    const root = TreeNode.create(list)
    expect(isBalanced(root)).toEqual(true)
  })

  it("should be false", () => {
    const list = [1,2,2,3,3,null,null,4,4]
    const root = TreeNode.create(list)
    expect(isBalanced(root)).toEqual(false)
  })
})
