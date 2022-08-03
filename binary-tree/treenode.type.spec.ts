import { TreeNode } from "./treenode.type"

describe("Test Functionalities", () => {
  it("should turn array into TreeNode: full binary-tree", () => {
    const list = [5, 4, 6, 1,2, 7, 8]
    const node = TreeNode.create(list)
    const test = new TreeNode(5, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(6, new TreeNode(7), new TreeNode(8)))
    expect(node).toEqual(test)
  })

  it("should turn array intn TreeNode: not complete", () => {

    const list = [5, 4, 6, null, 2, 7, null]

    const node = TreeNode.create(list)

    const test = new TreeNode(5, new TreeNode(4, undefined, new TreeNode(2)), new TreeNode(6, new TreeNode(7), undefined))

    expect(node).toEqual(test)
  })
})
