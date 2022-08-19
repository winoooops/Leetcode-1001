import { minimalDifference } from "./index"
import { TreeNode } from "../treenode.type"

describe("Leetcode 530: Minimal Difference of BST", () => {
  it("should be 1", () => {
    const root = TreeNode.create([4,2,6,1,3])
    expect(minimalDifference(root)).toBe(1)
  })

  it("should be 1", () => {
    const root = TreeNode.create([1,0,48,null,null,12,49])
    expect(minimalDifference(root)).toBe(1)
  })

  it("should be 2", () => {
    const root = TreeNode.create(([1,null,5,3]))
    expect(minimalDifference(root)).toBe(2)
  })
})
