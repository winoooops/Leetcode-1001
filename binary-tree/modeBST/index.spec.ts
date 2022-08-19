import { TreeNode } from "../treenode.type"
import { findMode } from "./index"

describe("Leetcode 501: Find Mode in BST", () => {
  it("should be [2]", () => {
    const root = TreeNode.create([1,null,2,2])
    expect(findMode(root)).toEqual([2])
  })
  it("should be [1, 2]", () => {
    const root = TreeNode.create([1,null,2])
    expect(findMode(root)).toEqual([1, 2])
  })
})
