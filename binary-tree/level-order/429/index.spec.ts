import { Node } from "./node.type"
import { levelOrder } from "./index"

describe("Leetcode 102: Level Order", () =>{
  it("should be right", () => {
    const list = [1,null,3,2,4,null,5,6]
    const root = Node.create(list)
    expect(levelOrder(root)).toEqual([[1],[3,2,4],[5,6]])
  })

  it("should be right", () => {
    const list = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
    const root = Node.create(list)
    expect(levelOrder(root)).toEqual([[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]])
  })
})

