import { TreeNode } from "../treenode.type"
import { trimBST } from "./index"

describe('Leetcode 669: Trim BST', () => {
  it("should be right", () => {
    const root = TreeNode.create([3, 0, 4, null, 2, null, null, 1, null])
    const expected = TreeNode.create([3, 2, 4, 1])
    expect(trimBST(root, 1, 5)).toEqual(expected)
  })
  it("should be right", () => {
    const root = TreeNode.create([3, 0, 4, null, 2, null, null, 1])
    const expected = TreeNode.create([3, 2, null, 1])
    expect(trimBST(root, 1, 3)).toEqual(expected)
  })
})
