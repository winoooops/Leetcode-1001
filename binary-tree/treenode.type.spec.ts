import { TreeNode } from "./treenode.type"

describe("Test Functionalities", () => {
  it("should turn array into TreeNode", () => {
    const list = [1, null, 4, 6, null, 1,2,null,7, 8]
    const node = TreeNode.create(list)
    const test = new TreeNode(1, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(6, new TreeNode(7), new TreeNode(8)))
    expect(node).toEqual(test)
  })
})
