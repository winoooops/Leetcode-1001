import { TreeNode } from "../treenode.type"
import { pathSum } from "./index"

describe("Leetcode 113", () => {
  it("should be true", () => {
    const root = TreeNode.create([1, 2])
    expect(pathSum(root, 3)).toEqual([[1, 2]])
  })

  it("should be false", () => {
    const root = TreeNode.create([1, 2, 3])
    expect(pathSum(root, 22)).toEqual([])
  })

  it("should be true", () => {
    const root = TreeNode.create([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
    expect(pathSum(root, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]])
  })
})
