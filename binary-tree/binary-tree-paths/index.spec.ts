import { binaryPaths } from "./index"
import { TreeNode } from "../treenode.type"


describe("Leetcode 257: Binary Paths", () => {
  it("should be right", () => {
    const root = TreeNode.create([1,2,3,null,5])
    // console.log(binaryPaths(root))
    expect(binaryPaths(root)).toEqual(expect.arrayContaining(["1->2->5", "1->3"]))
  })
})


// [3,2,1,null] ["1->3", "1->2"]
// [3,2] ["1-3", "1-2"]
//
// [3,5] ["1-3","1-2-5"]


