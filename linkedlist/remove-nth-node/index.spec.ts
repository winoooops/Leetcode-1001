import { removeNthFromEnd } from "./index"
import { createListNode, ListNode } from "../linkedlist.types"

describe("LeetCode 19: removeNthNodeFromEnd", () => {
  it("should return [1,2,3,5]", () => {
    const head = createListNode([1,2,3,4,5])
    expect(removeNthFromEnd(head,2)).toEqual(createListNode([1,2,3,5]))
  })
})
