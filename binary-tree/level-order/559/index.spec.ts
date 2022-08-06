import { Node } from "../429/node.type"
import { maxDepth } from "./index"

describe("LeetCode 559: MaxDepth of N-Tree", () => {
  it("should be 3", () => {
    let root = Node.create([1,null,3,2,4,null,5,6])
    expect(maxDepth(root)).toEqual(3)
  })
})
