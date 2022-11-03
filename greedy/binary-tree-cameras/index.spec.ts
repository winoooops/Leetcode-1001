import { minCameraCover } from "./index"
import { TreeNode } from "../../binary-tree/treenode.type"

describe("Leetcode 968: binary-tree cameras", () => {
  it("it should be right", () => {
    const root = TreeNode.create([0,0,null,0,0])
    expect(minCameraCover(root)).toBe(1);
  })

  it("it should be right", () => {
    const root = TreeNode.create([0,0,null,0,null,0,null,null,0])
    expect(minCameraCover(root)).toBe(2);
  })
  
  it("it should be right", () => {
    const root = TreeNode.create([0,0,0,null,null,null,0])
    expect(minCameraCover(root)).toBe(2);
  })
})
