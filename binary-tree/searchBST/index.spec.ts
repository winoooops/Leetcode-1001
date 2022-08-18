import { TreeNode } from "../treenode.type"
import { searchBST } from "./index"

describe("LeetCode 700: Search BST", () => {
  it("should be [2,1,3]", () => {
    const root = TreeNode.create([4,2,7,1,3])
    expect(searchBST(root, 2)).toEqual(TreeNode.create([2,1,3]))
  })

  it("should be null", () => {
    const root = TreeNode.create([4,2,7,1,3])
    expect(searchBST(root, 5)).toBeFalsy()
  })
})

