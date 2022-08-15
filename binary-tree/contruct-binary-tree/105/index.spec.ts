import { } from "../../treenode.type"
import { buildTree } from "./index"


describe("Leetcode 105", () => {
  it("should be right", () => {
    const preorder = [3,9,20,15,7]
    const inorder = [9,3,15,20,7]

    console.log(buildTree(preorder, inorder))
  })
})

