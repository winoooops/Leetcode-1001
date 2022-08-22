import { TreeNode } from "../treenode.type"
import { deleteNode } from "./index"

describe("Leetcode 450: Delete Node from BST", () => {
  it("should be right", () => {
    const root = TreeNode.create([5, 3, 6, 2, 4, null, 7])
    const test = TreeNode.create([5, 4, 6, 2, null, null, 7])
    expect(deleteNode(root, 3)).toEqual(test)
  })
})