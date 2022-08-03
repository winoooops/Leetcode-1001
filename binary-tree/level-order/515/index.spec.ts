import { largestFromBinary } from "./index"
import { TreeNode } from '../../treenode.type'

describe("LeetCode 515: Largest of the Binary Tree", () => {
  it("should be right", () => {
    const root = TreeNode.create([1,3,2,5,3,null,9])
    expect(largestFromBinary(root)).toEqual([1,3,9])
  })
})
