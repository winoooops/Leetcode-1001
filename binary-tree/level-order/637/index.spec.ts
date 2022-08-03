import { TreeNode } from "../../treenode.type"
import { averageOfLevels } from "./index"

describe("Leetcode 637: Average of Level Order", () =>{
  it("should be right", () => {
    let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
    expect(averageOfLevels(root)).toEqual([3,14.5,11])
  })
})
