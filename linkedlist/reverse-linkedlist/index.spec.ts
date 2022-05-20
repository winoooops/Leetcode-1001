import { reverseLinkedList } from "./index"
import { ListNode, createListNode } from '../linkedlist.types'

describe("Reverse LinkedList", () => {
  it("should return revserse linkedList", () => {
    const head = createListNode([1,2,3,4,5])
    const reverse = createListNode([5,4,3,2,1])
    expect(reverseLinkedList(head)).toEqual(reverse)
  })
})


