import { TreeNode } from "../treenode.type"

import { preorder } from "./preorder"
import { inorder } from "./inorder"
import { postorder } from "./postorder"

describe("Test Travasal", () => {
  let node: TreeNode
  let list: number[]

  beforeEach(() => {
    node = new TreeNode(5, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(6, new TreeNode(7), new TreeNode(8)))
    list = []
  })

  afterEach(() => {
    node = null
    list = null
  })

  it("Test Class", () => {
    expect(node).toBeInstanceOf(TreeNode)
  })


  it("Test Preorder Travasal", () => {
    expect(preorder(node, list)).toEqual([5,4,1,2,6,7,8])
  })

  it("Test Inorder Travasal", () => {
    expect(inorder(node, list)).toEqual([1,4,2,5,7,6,8])
  })

  it("Test Postorder Travasal", () => {
    expect(postorder(node, list)).toEqual([1,2,4,7,8,6,5])
  })
})
