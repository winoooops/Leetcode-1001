import { removeElement, createListNode } from './index'
import { ListNode } from '../linkedlist.types'

describe('203: Remove Element', () => {
  describe("Test createListNode", () => {
    it("should create listnode properly", () => {
      const head = createListNode([1,4,2,4])
      expect(head.val).toEqual(1)
      expect(head.next.val).toEqual(4)
      expect(head.next.next.val).toEqual(2)
      expect(head.next.next.next.val).toEqual(4)
      expect(head.next.next.next.next).toBeFalsy()
    })

    it("should be identicle", () => {
      const head = createListNode([1,2,6,3,4,5,6])
      expect(head).toEqual(new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))))))
    });
  })

  describe("Test removeElement", () => {
    it('should return [1,2]', () => {
      const head = createListNode([1,4,2,4])
      expect(removeElement(head,4)).toEqual(createListNode([1,2]))
    })

    it("should return [1,2,3,4,5]", () => {
      const head = createListNode([1,2,6,3,4,5,6])
      expect(removeElement(head,6)).toEqual(createListNode([1,2,3,4,5]))
    })
  })
});
