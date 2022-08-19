import { TreeNode } from "../treenode.type"
import { findLCA } from "./index"

describe("Leetcode 236: Find LCA", () => {
  it("should be 3", () => {
    const root = TreeNode.create([3,5,1,6,2,0,8,null,null,7,4])
    expect(findLCA(root, 5, 1)).toEqual(root)
  })

  it("should be 5", () => {
    const root = TreeNode.create([3,5,1,6,2,0,8,null,null,7,4])
    const test = TreeNode.create([5,6,2,null,null,7,4])
    const result = findLCA(root, 5, 4)

    expect(findLCA(root, 5, 4)).toEqual(test)
  })
})
