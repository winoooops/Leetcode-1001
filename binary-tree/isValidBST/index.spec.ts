import { TreeNode } from "../treenode.type"
import { isValidBST } from "./index"

describe("Leetcode 98: Is Valid BST?", () => {
  it("should be true", () => {
    const root = TreeNode.create([2,1,3])
    expect(isValidBST(root)).toEqual(true)
  })

  it("should be false", () => {
    const root = TreeNode.create([5,1,3,null,null,3,6])
    expect(isValidBST(root)).toEqual(false)
  })
})
