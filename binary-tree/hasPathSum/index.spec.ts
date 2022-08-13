import { TreeNode } from "../treenode.type"
import { hasPathSum } from "./index"

describe("Leetcode 112", () => {
  it("should be false", () => {
    const root = TreeNode.create([1,2])
    expect(hasPathSum(root, 0)).toEqual(false)
  })

  it("should be false", () => {
    const root = TreeNode.create([1,2,3])
    expect(hasPathSum(root, 5)).toEqual(false)
  })

  it("should be true", () => {
    const root = TreeNode.create([5,4,8,11,null,13,4,7,2,null,null,null,1])
    expect(hasPathSum(root, 22)).toEqual(true)
  })
})
