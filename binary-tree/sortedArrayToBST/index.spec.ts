import { TreeNode } from "../treenode.type"
import { arrayToBST } from "./index"

describe("Leetcode 108: Sorted Array to BST", () => {
  it("should be right", () => {
    const list = [-10, -3, 0, 5, 9]
    const expected = TreeNode.create([0, -10, 5, null, -3, null, 9])
    expect(arrayToBST(list)).toEqual(expected)
  })
})
