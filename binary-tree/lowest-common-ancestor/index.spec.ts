import { TreeNode } from "../treenode.type"
import { findBSTLCA, findLCA } from "./index"

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

describe("Leetcode 235: Find LCA in BST", () => {
  it("should be 6", () => {
    const root = TreeNode.create([6,2,8,0,4,7,9,null,null,3,5])
    expect(findBSTLCA(root, 2, 8)).toEqual(root)
  })

  it("should be 4", () => {
    const root = TreeNode.create([6,2,8,0,4,7,9,null,null,3,5])
    const test = TreeNode.create([2,0,4,null,null,3,5])
    expect(findBSTLCA(root, 2, 4)).toEqual(test)
  })
})
