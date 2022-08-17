import { TreeNode } from "../../treenode.type"
import { buildTree } from "./index"


describe("Leetcode 106", () => {
  it("should be right", () => {
    const postorder = [2,null,1]
    const inorder = [2,1,null]


    console.log(buildTree(inorder, postorder))
    console.log(TreeNode.create([1,2]))
  })
})
