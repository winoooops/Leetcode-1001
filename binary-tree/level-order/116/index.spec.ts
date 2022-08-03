import { Node } from "./node.type"
import { connect } from "./index"

describe("Leetcode 116", () => {
  it("should be right", () => {

    const root = Node.create([1,2,3,4,5,6,7])
    const res = connect(root)
    expect(res.left.next).toEqual(res.right)
  })
})
