import { TreeNode } from "../treenode.type"
import { countNodes } from "./index"

describe("Leetcode 222: Count Nodes for Complete Binary Tree", () => {
  it("should be 6", () => {
    const root = TreeNode.create([1,2,3,4,5,6])
    expect(countNodes(root)).toEqual(6)
  })

  it("should be 0", () => {
    const root = TreeNode.create([])
    expect(countNodes(root)).toEqual(0)
  })

  it("should be 1", () => {
    const root = TreeNode.create([2])
    expect(countNodes(root)).toEqual(1)
  })
})
