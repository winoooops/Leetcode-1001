import { TreeNode } from "../../../binary-tree/treenode.type"
import { rob } from "./index"

describe("Leetcode 337", () => {
  it("should be 7", () => {
    const root = TreeNode.create([3, 2, 3, null, 3, null, 1])
    expect(rob(root)).toBe(7);
  })

  it("should be 9", () => {
    const root = TreeNode.create([3, 4, 5, 1, 3, null, 1]);
    expect(rob(root)).toBe(9);
  })
})