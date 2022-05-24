import { createListNode } from "../linkedlist.types"
import { getIntersectionNode } from "./index"

describe("LeetCode 160: Intersection of Two LinkedList", () => {
  it("should be [1,2]", () => {
    const headOne = createListNode([3,1,2])
    const headTwo = createListNode([1,2])
    expect(getIntersectionNode(headOne, headTwo)).toEqual(createListNode([1,2]))
  })
  it("should be [8,4,5]", () => {
    const headOne = createListNode([4,1,8,4,5])
    const headTwo = createListNode([5,2,8,4,5])
    expect(getIntersectionNode(headOne, headTwo)).toEqual(createListNode([8,4,5]))
  })
})


