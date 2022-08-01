import { TreeNode } from "../treenode.type"

import { preorder } from "./preorder"
import { inorder } from "./inorder"
import { postorder } from "./postorder"

describe("Test Travasal", () => {
  let node: TreeNode

  beforeEach(() => {
    node = new TreeNode(5, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(6, new TreeNode(7), new TreeNode(8)))
  })

  afterEach(() => {
    node = null
  })

  it("Test Class", () => {
    expect(node).toBeInstanceOf(TreeNode)
  })


  it("Test Preorder Travasal", () => {
    expect(preorder(node)).toEqual([5,4,1,2,6,7,8])
  })

  it("Test Inorder Travasal", () => {
    expect(inorder(node)).toEqual([1,4,2,5,7,6,8])
  })

  
  it("Test Postorder Travasal", () => {
    expect(postorder(node)).toEqual([1,2,4,7,8,6,5])
  })
})
