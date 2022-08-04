import { isSymmetric } from "./index"
import { TreeNode } from "../treenode.type"

describe("Leetcode 101: Symmetric TreeNode", () => {
  it("should be false", () => {
    const root = TreeNode.create([1,2,2,null,3,null,3])
    expect(isSymmetric(root)).toEqual(false)
  })

  it("should be true", () => {
    const root = TreeNode.create([1,2,2,3,4,4,3])
    expect(isSymmetric(root)).toEqual(true)
  })
})
