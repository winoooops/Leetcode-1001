import { TreeNode } from "../../treenode.type"
import { levelOrderBottom } from "./index"

describe("Leetcode 102: Level Order", () =>{
  it("should be right", () => {
    let root = new TreeNode(6, new TreeNode(4, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(5), new TreeNode(8)))
    expect(levelOrderBottom(root)).toEqual([[1,3,5,8], [4,7], [6]])
  })
})
