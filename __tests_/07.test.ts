import { ListNode, makeListNode, mergeTwoList } from '../Easy/7.merge_two_sorted_lists'

describe('07. Merge Two List', () => {
  describe('can create ListNode properly', () => {
    it('listNode could be empty', () => {
      const l1 = makeListNode([])
      expect(l1).toBeNull()
    })

    it('listNode could accept array with one element', () => {
      const l1 = makeListNode([1])
      expect(l1).toEqual({
        val: 1,
        next: null
      })
    })

    it('listNode could accept multiple elements', () => {
      const arr = [1, 2, 3]
      const l1 = makeListNode(arr)
      const l2 = new ListNode(1, new ListNode(2, new ListNode(3)))
      expect(l1).toEqual(l2)
    })
  });

  describe('can merge properly', () => {
    it('should return l1 if l2 is empty', () => {
      const l1 = makeListNode([1, 3, 4])
      const l2 = makeListNode([])
      expect(mergeTwoList(l1, l2)).toEqual(l1)
    })

    it('should return l2 if l1 is empty', () => {
      const l1 = makeListNode([])
      const l2 = makeListNode([2, 4, 6])

      expect(mergeTwoList(l1, l2)).toEqual(l2)
    })

    it('should return sorted ListNode', () => {
      const l1 = makeListNode([1, 2, 4])
      const l2 = makeListNode([1, 3, 4])

      expect(mergeTwoList(l1, l2)).toEqual(makeListNode([1, 1, 2, 3, 4, 4]))
    })

    it('should return empty if l1 and l2 are empty', () => {
      const l1 = makeListNode([])
      const l2 = makeListNode([])

      expect(mergeTwoList(l1, l2)).toEqual(makeListNode([]))
    })

    it('can handle 0 properly', () => {
      const l1 = makeListNode([])
      const l2 = makeListNode([0])

      expect(mergeTwoList(l1, l2)).not.toBeNull()
      expect(mergeTwoList(l1, l2)).toEqual(makeListNode([0]))
    })
  })


});