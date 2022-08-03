import { TreeNode } from "../../treenode.type"
import { rightSideView } from "./index"

describe("Leetcode 199: Rightside View", () =>{
  it("should be right", () => {
    let root = new TreeNode(6, new TreeNode(4, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(5), new TreeNode(8)))
    expect(rightSideView(root)).toEqual([6,7,8])
  })
}) 
