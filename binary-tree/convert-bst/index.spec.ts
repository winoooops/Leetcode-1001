import { convertBST, reverseInOrder } from "./index"
import { TreeNode } from "../treenode.type"

describe("538: Convert Binary Tree", () => {
  describe("Test Recursion", () => {
    it("should be right", () => {
      const root = TreeNode.create([3,2,4,1])
      const expected = TreeNode.create([7,9,4,10])
      expect(convertBST(root)).toEqual(expected)
    })

    it("should be right", () => {
      const root = TreeNode.create([0, null, 1])
      const expected = TreeNode.create([1, null, 1])
      expect(convertBST(root)).toEqual(expected)
    })
  })
  describe("Test Iteration", () => {
    it("should be right", () => {
      const root = TreeNode.create([3,2,4,1])
      const expected = TreeNode.create([7,9,4,10])
      expect(reverseInOrder(root)).toEqual(expected)
    })

    it("should be right", () => {
      const root = TreeNode.create([0, null, 1])
      const expected = TreeNode.create([1, null, 1])
      expect(reverseInOrder(root)).toEqual(expected)
    })
  })
})
