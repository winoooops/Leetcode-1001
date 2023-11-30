import {ListNode} from "../ListNode";
import {reverseBetween, reverseBetweenOneTime} from "./92";

describe('92.Reverse Linked List II', () => {
  describe("Test Solution: cut off, reverse and sew back", function () {
    it('should be [1,4,3,2,5]', function () {
      const head = ListNode.createListNodeFromArray([1,2,3,4,5]);
      const result = reverseBetween(head, 2, 4);
      const expected = ListNode.createListNodeFromArray([1,4,3,2,5]);
      expect(result).toEqual(expected);
    });

    it('should be [5]', function () {
      const head = ListNode.createListNodeFromArray([5]);
      const result = reverseBetween(head, 1, 1);
      expect(result).toEqual(head);
    });
  });

  describe('Test Solution: Traverse One Time', () => {
    it('should be [1,4,3,2,5]', function () {
      const head = ListNode.createListNodeFromArray([1,2,3,4,5]);
      const result = reverseBetweenOneTime(head, 2, 4);
      const expected = ListNode.createListNodeFromArray([1,4,3,2,5]);
      expect(result).toEqual(expected);
    });

    it('should be [5]', function () {
      const head = ListNode.createListNodeFromArray([5]);
      const result = reverseBetweenOneTime(head, 1, 1);
      expect(result).toEqual(head);
    });

    it("should be [],", function() {
      const head = ListNode.createListNodeFromArray([9, 7, 2, 5, 4, 3, 6]);
      const result = reverseBetweenOneTime(head, 3, 6);
      const expected = ListNode.createListNodeFromArray([9,7,3,4,5,2,6]);
      expect(result).toEqual(expected);
    })
  })

})
