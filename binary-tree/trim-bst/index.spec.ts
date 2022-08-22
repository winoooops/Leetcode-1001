import { TreeNode } from "../treenode.type"
import { trimBST, trimBST2 } from "./index"

describe('Leetcode 669: Trim BST', () => {
  describe("Test recursion", () => {
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

  describe("Test Iteration", () => {
    it("should be right", () => {
      const root = TreeNode.create([3, 0, 4, null, 2, null, null, 1, null])
      const expected = TreeNode.create([3, 2, 4, 1])
      expect(trimBST2(root, 1, 5)).toEqual(expected)
    })
    it("should be right", () => {
      const root = TreeNode.create([3, 0, 4, null, 2, null, null, 1])
      const expected = TreeNode.create([3, 2, null, 1])
      expect(trimBST2(root, 1, 3)).toEqual(expected)
    })
  })
})
