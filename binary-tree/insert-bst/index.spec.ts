import { TreeNode } from "../treenode.type"
import { insertBST } from "./index"

describe("Leetcode 701: Insert into BST", () => {
  it("should be right", () => {
    const root = TreeNode.create([4,2,7,1,3])
    const test = TreeNode.create([4,2,7,1,3,5,null])
    expect(insertBST(root,5)).toEqual(test)
  })

  it("should be right", () => {
    const root = TreeNode.create([40,20,60,10,30,50,70])
    const test = TreeNode.create([40,20,60,10,30,50,70,null,null,25])
    expect(insertBST(root,25)).toEqual(test)
  })
})
