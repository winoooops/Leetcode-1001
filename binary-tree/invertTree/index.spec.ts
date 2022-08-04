import { invertTree } from "./index"
import { TreeNode } from "../treenode.type"


describe("Leetcode 226: InventTree", () => {
  it("should be [2, 3, 1]", () => {
    const root = TreeNode.create([2,1,3]);
    const test = TreeNode.create([2,3,1])

    expect(invertTree(root)).toEqual(test)
  })


  it("should be [4,7,2,9,6,3,1]", () => {
    const root = TreeNode.create([4,2,7,1,3,6,9])
    const test = TreeNode.create([4,7,2,9,6,3,1])

    expect(invertTree(root)).toEqual(test)
  })
})
