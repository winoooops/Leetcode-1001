import { TreeNode } from "../treenode.type"
import { mergeTree } from "./index"


describe("Leetcode: 617 Merge Trees", () => {
  it("should be right", () => {
    const root1 = TreeNode.create([1,3,2,5])
    const root2 = TreeNode.create([2,1,3,null,4,null,7])

    const result = mergeTree(root1, root2)
    const test = TreeNode.create([3,4,5,5,4,null,7])

    expect(result).toEqual(test)
  })

  it("should be right", () => {
    const root1 = TreeNode.create([1])
    const root2 = TreeNode.create([1,2])

    const result = mergeTree(root1, root2)
    const test = TreeNode.create([2,2])

    expect(result).toEqual(test)
  })
})
