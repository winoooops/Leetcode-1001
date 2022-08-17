import { TreeNode } from "../../treenode.type"
import { buildTree } from "./index"


describe("Leetcode 105", () => {
  it("should be right", () => {
    const preorder = [3,9,20,15,7]
    const inorder = [9,3,15,20,7]

    expect(buildTree(preorder, inorder)).toEqual(TreeNode.create([3,9,20,null,null,15,7]))
  })

  it("should be right", () => {
    const preorder = [1,2]
    const inorder = [2,1]

    expect(buildTree(preorder, inorder)).toEqual(TreeNode.create([1,2]))
  })
})

